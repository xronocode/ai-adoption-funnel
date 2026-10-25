#!/usr/bin/env python3
"""Check that published layer estimates match the Monte Carlo simulation.

Runs src/monte_carlo_funnel.py (module-level seed=42 makes it deterministic)
and diffs each layer's central estimate and 90% CI against
data/funnel_layers.csv. Exits non-zero on drift, so CI fails when the
published numbers and the model disagree.

Usage: python3 scripts/verify_numbers.py   (stdlib only)

Units already align between sim and CSV: L1-L4 in millions, L5-L6 in
thousands, L7 in individuals. The published central is the simulated mean
(L1-L5) or median (L6-L7), so either match within tolerance is accepted.
"""

import csv
import io
import runpy
import statistics
import sys
from contextlib import redirect_stdout
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOLERANCE = 0.05  # relative drift allowed before failing


def close(published, simulated):
    return abs(published - simulated) / abs(simulated) <= TOLERANCE


def main():
    buf = io.StringIO()
    with redirect_stdout(buf):  # run exactly like `python src/monte_carlo_funnel.py`
        ns = runpy.run_path(str(ROOT / "src" / "monte_carlo_funnel.py"))
    results, n = ns["results"], ns["N"]

    print(f"verify_numbers: MC n={n}, tolerance={TOLERANCE:.0%}")
    print(f"{'layer':<30}{'central':>10}{'mean':>10}{'median':>10}{'ci (csv)':>18}{'ci (sim)':>18}  status")

    failures = []
    with open(ROOT / "data" / "funnel_layers.csv", newline="") as f:
        for row in csv.DictReader(f):
            samples = sorted(results[f"L{row['layer']}"])
            mean = statistics.mean(samples)
            median = samples[int(n * 0.50)]
            p5 = samples[int(n * 0.05)]
            p95 = samples[int(n * 0.95)]
            central, lo, hi = float(row["estimate_central"]), float(row["ci_low"]), float(row["ci_high"])
            checks = {
                "central vs mean/median": close(central, mean) or close(central, median),
                "ci_low vs p5": close(lo, p5),
                "ci_high vs p95": close(hi, p95),
            }
            bad = [name for name, ok in checks.items() if not ok]
            if bad:
                failures.append((row["name"], bad))
            status = "OK" if not bad else "DRIFT: " + "; ".join(bad)
            print(f"L{row['layer']} {row['name']:<26}{central:>10.1f}{mean:>10.1f}{median:>10.1f}"
                  f"{lo:>8.1f}-{hi:<9.1f}{p5:>8.1f}-{p95:<9.1f}  {status}")

    if failures:
        print(f"\nFAIL: {len(failures)} layer(s) drifted from data/funnel_layers.csv")
        return 1
    print("\nPASS: published numbers match the simulation")
    return 0


if __name__ == "__main__":
    sys.exit(main())

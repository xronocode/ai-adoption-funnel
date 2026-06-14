# Monte Carlo

The confidence intervals in the funnel come from a 10,000-iteration simulation that propagates uncertainty through every cascade step. Code: [`../src/monte_carlo_funnel.py`](../src/monte_carlo_funnel.py) (standard library only, `seed=42` for reproducibility).

## Why simulate

Cascade error multiplies. If Layer 4 is ±2M and each subsequent filter has its own spread, a naive ± on the bottom layer understates the true uncertainty. The simulation samples each input from a distribution and reports the resulting percentiles, so the intervals widen honestly toward the bottom.

## Distributions per input

| Input | Distribution | Rationale |
|-------|--------------|-----------|
| Knowledge workers | uniform(640M, 1000M) | definitional range, no central tendency |
| US occasional rate | normal(0.50, 0.015) | tight survey CI |
| Geo multiplier | triangular(0.60, 0.90, 0.75) | expert range, mode at 0.75 |
| Frontier rate | normal(0.16, 0.015) | survey ± ~3pp |
| AI-user base | normal(0.28, 0.03) of KW | "frequent+" as base |
| Dev population | uniform(20.8M, 36.5M) | wide source disagreement |
| Dev daily rate | normal(0.51, 0.025) | non-probability sample widened |
| Agent rate | normal(0.318, 0.025) | SO measured ± |
| Decision-maker share | normal(0.44, 0.025) | WTI verified |
| Hands-on fraction | uniform(0.02, 0.06) | heuristic |
| Builder rate | uniform(0.04, 0.12) | heuristic |
| Regulated/EM fraction | uniform(0.005, 0.04) | heuristic, very wide |

## Output (10K iterations, seed=42)

| Layer | Central | 90% CI |
|-------|---------|--------|
| Occasional users | 307M | 234–388M |
| Frontier Professionals | 27.6M | 19.0–37.7M |
| Agentic coders | 4.6M | 3.4–6.1M |
| C-level coders | 486K | 236–808K |
| AI builders | 35K | 15–75K |
| Regulated/EM | 720 | 191–2,085 |

## Note on a prior estimate

An earlier pass (by one of the reviewing models) reported a narrower Layer-6 interval (≈7–42K) without disclosing its assumptions. This reproduced simulation, with assumptions stated above, gives the wider 15–75K. When a confidence interval can't be reproduced from stated assumptions, treat it as a model artifact — the same scrutiny this model applies to its sources.

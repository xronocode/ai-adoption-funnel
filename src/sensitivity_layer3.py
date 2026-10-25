"""Layer-3 sensitivity: how the Frontier Professionals estimate depends on the
denominator (the size of the global 'AI users' base, which Microsoft WTI does
not publish). Demonstrates that the denominator choice alone swings the
estimate ~8x.
"""

denominators = [80, 130, 200, 300, 400]  # millions, candidate "AI user" bases
frontier_rates = [0.12, 0.16, 0.19]       # low / central (WTI) / high

print("Layer 3 (Frontier Professionals) sensitivity — millions")
print("Denominator interpretations: 80M=daily only ... 400M=occasional upper\n")

header = f"{'Base (M)':>10}" + "".join(f"{int(r*100):>8}%" for r in frontier_rates)
print(header)
print("-" * len(header))
for d in denominators:
    row = f"{d:>10}"
    for r in frontier_rates:
        row += f"{d * r:>8.1f} "
    print(row)

lo = min(denominators) * min(frontier_rates)
hi = max(denominators) * max(frontier_rates)
print(f"\nRange: {lo:.1f}M – {hi:.1f}M  ({hi/lo:.1f}x spread from assumptions alone)")
print("Funnel uses the 'frequent+' base: 0.28 x geo of knowledge workers")
print("(~150-210M) x 16% -> ~27.6M central (see monte_carlo_funnel.py).")

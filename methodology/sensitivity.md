# Sensitivity

## The Layer-3 denominator problem

Microsoft WTI reports 16% of AI users as Frontier Professionals — but never publishes how many AI users exist globally. The absolute estimate for Layer 3 therefore depends entirely on which base you pick.

Run [`../src/sensitivity_layer3.py`](../src/sensitivity_layer3.py):

| AI-user base | 12% Frontier | 16% Frontier | 19% Frontier |
|--------------|-------------|-------------|-------------|
| 80M (daily only) | 9.6M | 12.8M | 15.2M |
| 130M (daily, upper) | 15.6M | 20.8M | 24.7M |
| 200M (frequent+) | 24.0M | 32.0M | 38.0M |
| 300M (occasional, lower) | 36.0M | 48.0M | 57.0M |
| 400M (occasional, upper) | 48.0M | 64.0M | 76.0M |

**Spread: 9.6M to 76M — 8× from the denominator choice alone.**

The funnel uses the "frequent+" base — 28% of geo-adjusted knowledge workers (~150–210M; see [`monte-carlo.md`](monte-carlo.md), "AI-user base") — × 16% → **27.6M central, 19.0–37.7M CI**. That is the 200M row above, give or take, and it is what [`../data/funnel_layers.csv`](../data/funnel_layers.csv) publishes.

## Why this is the key sensitivity

Layer 3 feeds every layer below it. The Monte Carlo (see [`monte-carlo.md`](monte-carlo.md)) shows that bottom-layer uncertainty is dominated by upstream variance, not by each layer's own filter. Get the denominator wrong and the whole bottom half of the funnel shifts.

# Estimation Taxonomy

Every number in the funnel carries one of five confidence labels. This makes the difference between a measurement and a guess explicit.

| Level | Definition | Example in this model |
|-------|------------|------------------------|
| **Observed** | Direct measurement from a representative survey | Gallup 13% daily (n=23,717); Stack Overflow 51% of devs daily (n=49,009) |
| **Derived** | Computed by cross-multiplying observed shares | 10.5–18.5M daily AI developers (dev population × SO daily rate) |
| **Synthetic estimate** | Cascading product of 2+ derived filters | Layer 5: Frontier × decision-maker % × hands-on % → ~486K |
| **Scenario estimate** | Modeled with explicit assumptions + Monte Carlo | Layer 6: 15–75K (10K-iteration simulation) |
| **Heuristic range** | Expert judgment, no formal model | Layer 7: ~200–2,000 regulated/emerging |

## Why it matters

Reporting a heuristic range with the same visual weight as a survey share is how AI hype gets manufactured. By tagging each layer, a reader can immediately see that "16% Frontier Professionals" is solid and "~700 in regulated emerging markets" is a directional guess — even though both appear in the same funnel.

In the figure, this maps to colour: teal = anchored in a measured share, coral = model output, grey = population baseline.

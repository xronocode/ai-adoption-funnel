# Methodology

How the funnel is built, what each number means, and where it can break.

## The approach in one paragraph

The funnel is a **cascade of independent filters**. Each layer narrows the one above it by intersecting with a metric from a different source. Top layers (1–4) are anchored on representative surveys (combined n > 115K). Bottom layers (5–7) are extrapolations — increasingly so toward the bottom — and are labelled as such.

## Files

| File | What it covers |
|------|----------------|
| [`estimation-taxonomy.md`](estimation-taxonomy.md) | The five confidence levels: observed → derived → synthetic → scenario → heuristic |
| [`cascade.md`](cascade.md) | Layer-by-layer derivation: which share, which base, which multiplier |
| [`monte-carlo.md`](monte-carlo.md) | How the 90% confidence intervals are computed; assumptions per layer |
| [`sensitivity.md`](sensitivity.md) | The Layer-3 denominator problem and other sensitivities |
| [`biases.md`](biases.md) | Vendor incentive, visibility distortion, circular validation |
| [`quality-gates.md`](quality-gates.md) | The qualitative filter that defines each layer transition |
| [`reviewers.md`](reviewers.md) | The seven-model review log and what each contributed |
| [`update-protocol.md`](update-protocol.md) | When and how to refresh the model |

## Core principle: share-first, count-second

The strongest claims are **survey percentages** — they were actually measured (50% of US employees, 13% daily, 16% Frontier Professionals, 31.8% of developers using agents). The **absolute counts** are model outputs and should always be read with their confidence intervals. Confusing the two is the single most common error in AI-adoption analysis, and this model is structured to keep them distinct.

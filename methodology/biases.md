# Known Biases

Three structural problems that travel with every number in this model. None of them are fixable with the available data; all of them push in knowable directions.

## 1. Vendor incentive contamination

The four anchor sources all have reasons to show AI adoption as broad as possible.

| Source | Bias | Direction | Rough magnitude |
|--------|------|-----------|------------------|
| Gallup | self-report (social desirability) | overstate | ~10–20% |
| Microsoft WTI | pre-filtered sample (AI users only) + product sponsor | overstate sophistication | inflates Frontier % |
| McKinsey | org self-report + consulting-client base | overstate adoption | ~15–25% |
| Stack Overflow | non-probability sample via SO channel | overstate among engaged devs | medium |

**Net effect:** the top of the funnel is probably overstated by 10–25%.

## 2. Visibility distortion

Every source over-samples *visible* populations: developers, remote workers, knowledge workers in tech and finance. The largest economic populations — back-office operations, compliance, regional management, SMEs, administrative labour — have far lower adoption density and are largely invisible to these instruments. This systematically overstates penetration in the upper layers.

## 3. Circular validation

Seven AI models reviewed this analysis (Grok, Qwen, DeepSeek, Gemini, ChatGPT, plus a methodology-audit pass). They agreed on the order of magnitude. But they all worked from the **same four upstream surveys** — so this is seven interpretations of shared data, not seven independent measurements. Agreement here raises confidence in internal consistency, not in external truth.

## What this means for reading the funnel

- Treat top-layer shares as solid but slightly inflated.
- Treat bottom-layer counts as directional, with the published intervals as the real uncertainty.
- The *shape* of the funnel (severe compression toward the bottom) is robust across all three biases; the *exact numbers* are not.

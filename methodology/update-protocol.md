# Update Protocol

This is a living model. Here's how to keep it current.

## Source cadence

| Source | Publishes | Next expected | Updates which layer |
|--------|-----------|---------------|---------------------|
| Gallup Workforce AI | quarterly | next quarter | Layers 2–3 (US adoption) |
| Microsoft Work Trend Index | annually (~May) | May 2027 | Layer 3 (Frontier %) |
| Stack Overflow Developer Survey | annually (~Dec) | Dec 2026 | Layer 4 (dev usage, agents) |
| McKinsey State of AI | annually (~Nov) | Nov 2026 | org adoption, high performers |
| SlashData / JetBrains | annually | 2026 | dev population base |

## Refresh procedure

1. **Add the new source row** to [`../data/sources.csv`](../data/sources.csv) with `publication_date` and today's `last_verified`.
2. **Update the metric** in [`../data/funnel_layers.csv`](../data/funnel_layers.csv) and, if it's a Gallup quarter, [`../data/historical_gallup.csv`](../data/historical_gallup.csv).
3. **Re-run the simulation** — `python src/monte_carlo_funnel.py` — and update the CI columns.
4. **Regenerate figures** — `python src/render_funnel.py`. The Gallup trend chart (`figures/ai-adoption-trend.png`) has no generation script and is maintained by hand.
5. **Log it** in [`../CHANGELOG.md`](../CHANGELOG.md).

## Versioning

- `v1.x` — data refresh (new survey wave, updated estimate). Patch/minor.
- `v2.0` — methodology change (new layer, new estimation approach, a deferred concept shipped). Major.

## Freshness rule of thumb

A metric older than **~12 months** should be flagged in prose as potentially stale — AI-adoption numbers move fast. The `last_verified` field tracks when each was last checked against its source, separate from when the source was published.

## What would upgrade the model from "estimate" to "measured"

The bottom layers (5–7) are extrapolations because no survey measures them. A small targeted survey (even n=50–100 of C-suite in regulated industries) would convert Layers 5–7 from heuristic to observed. That's the highest-value contribution anyone could make to this repo.

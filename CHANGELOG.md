# Changelog

All notable changes to the funnel model and data.

Versioning: `v1.x` = data refresh, `v2.0` = methodology change.

## [1.0] — 2026-06

Initial public release.

### Data
- Funnel layers 1–7 with central estimates and 90% confidence intervals
- Historical Gallup quarterly series (2023-Q2 → 2026-Q1)
- Source manifest: 16 primary sources with citations, dates, verification status

### Methodology
- Five-level estimation taxonomy (observed → derived → synthetic → scenario → heuristic)
- Layer-by-layer cascade derivation
- Monte Carlo simulation (10K iterations, seed=42) for confidence intervals
- Layer-3 denominator sensitivity analysis
- Documented biases: vendor incentive, visibility distortion, circular validation
- Quality gates for each layer transition
- Seven-model reviewer log

### Code
- `monte_carlo_funnel.py` — confidence intervals
- `sensitivity_layer3.py` — denominator sensitivity
- `render_funnel.py` — figure generation

### Figures
- Funnel diagram (SVG source + PNG)
- Gallup adoption trend chart

### Test
- AI Power User Index — bilingual RU/EN self-assessment

---

<!-- Template for future entries:

## [1.1] — YYYY-MM
### Changed
- Gallup Q2 2026 data: daily use X% → Y%
- Re-ran Monte Carlo; Layer N CI updated
-->

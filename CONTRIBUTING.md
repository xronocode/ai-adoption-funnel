# Contributing

This is a living model and corrections are welcome — especially ones that make the numbers *more* honest, not just larger.

## Highest-value contributions

1. **A primary survey for the bottom layers (5–7).** These are extrapolations because nothing measures them directly. Even a small targeted sample (n=50–100 of C-suite / engineers in regulated industries) would convert them from heuristic to observed. This is the single biggest improvement possible.
2. **A direct ILO/UN source** for the knowledge-worker count (currently cited second-hand).
3. **Regional anchors** to replace the heuristic geo-multipliers (Eurostat, ITU, country-level surveys).
4. **Verification of the KZ AI law** enacted text against [adilet.zan.kz](https://adilet.zan.kz).

## How to propose a change

**Data correction or new source:**
1. Add/update the row in `data/sources.csv` with `publication_date` and `last_verified`.
2. If it changes an estimate, update `data/funnel_layers.csv` and re-run `python src/monte_carlo_funnel.py`.
3. Note it in `CHANGELOG.md`.
4. Open a PR describing what changed and why.

**Methodology change:** open an issue first to discuss — these are `v2.0`-level and affect every downstream number.

## Ground rules

- **Cite, don't reproduce.** Link sources; never paste copyrighted text or paragraphs.
- **Label every estimate** with its taxonomy level (observed / derived / synthetic / scenario / heuristic).
- **State assumptions** for any modeled number. An unreproducible confidence interval is treated as an artifact, no matter who produced it.
- **Distinguish measured shares from modeled counts** in any prose you add.
- Numbers can be wrong; that's fine. Numbers presented with false precision are the problem.

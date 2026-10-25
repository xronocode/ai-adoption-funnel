# The Cascade

Layer-by-layer derivation. Each step states the share used, the base it applies to, and the resulting estimate.

## Layer 1 → 2: Knowledge workers → Occasional AI users
- **Base:** 0.64–1.0B knowledge workers (ILO/UN range; WEF/OECD consensus ~1B)
- **Share:** 50% of US employees use AI at least occasionally (Gallup Q1 2026)
- **Adjustment:** US penetration is higher than global. Tiered regional multipliers (US 1.0×, developed 0.9–1.1×, emerging 0.5–0.7×, frontier emerging 0.2–0.4×) instead of a single discount.
- **Result:** ~307M (central), 234–388M

## Layer 2 → 3: → Frontier Professionals
- **Base:** the global "AI users" pool (see [the denominator problem](sensitivity.md))
- **Share:** 16% of AI users are Frontier Professionals (Microsoft WTI 2026)
- **Result:** ~27.6M (central), 19.0–37.7M
- **Note:** WTI's 16% is of *its own surveyed AI users*, not of Gallup's daily users. The definitions differ; this is the model's largest single sensitivity.

## Layer 3 → 4: → Agentic coders
- **Base:** 20.8–36.5M professional developers (SlashData / JetBrains / Statista spread)
- **Shares:** 51% use AI tools daily; 31.8% use AI *agents* at work (Stack Overflow 2025)
- **Result:** ~4.6M (central), 3.4–6.1M
- **Cross-check:** Cursor >1M DAU + Claude Code (WAU doubled Jan–Apr) + others → same order.

## Layer 4 → 5: → C-level hands-on coders
- **Base:** Frontier Professionals
- **Shares:** 44% of Frontier are decision-makers (WTI, PDF p.20); of those, an estimated 3–5% personally write code rather than delegate
- **Result:** ~486K (central), 236–808K — synthetic estimate

## Layer 5 → 6: → AI builders
- **Share:** 5–10% of hands-on coders build their own frameworks/tools (Stack Overflow / JetBrains historical "builders vs users" proxy)
- **Result:** ~35K (central), 15–75K — scenario estimate (Monte Carlo)

## Layer 6 → 7: → Regulated, emerging markets
- **Filter:** works in a regulated industry (finance, telecom, public sector, personal-data-heavy) in an emerging market, under full compliance
- **Result:** ~200–2,000 globally — heuristic range, no direct survey
- **Central Asia slice:** single digits to low dozens (see [`../data/full-annotated-table.md`](../data/full-annotated-table.md), Layer 7b)

## Cross-validation

Three independent paths converge for layers 1–4:
1. Gallup → global: 13% US daily × US workforce, scaled globally → 63–84M daily (matches lower bound)
2. Microsoft → Frontier: 16% × ~150–210M frequent+ → ~27.6M (matches the central estimate)
3. Stack Overflow → coders: 28–36M devs × 51% daily × ~30% agentic → 3–5M (matches Layer 4)

Layers 5–7 have only one path (the cascade), so convergence cannot be checked — hence the wide intervals.

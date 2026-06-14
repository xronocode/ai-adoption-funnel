# AI Power User Index — Self-Assessment

A bilingual (RU/EN) self-test that locates you in the funnel. Ten questions, scored 0–30, mapped to the seven layers with a percentile estimate.

`AICohortTest.jsx` — a single-file React component (no required props, default export). It uses React state only (no browser storage) and renders standalone.

## What it measures

The questions operationalize the [quality gates](../methodology/quality-gates.md): frequency, depth of coding (autocomplete vs agentic), seniority, whether you build your own tools, and whether you work under regulatory constraints. The output cohort corresponds to a funnel layer.

> **Caveat.** This is a self-positioning tool, not a measurement instrument. It inherits all the [biases](../methodology/biases.md) of self-report. The percentile is illustrative — anchored to the funnel's modeled proportions, not to a validated norm sample.

## Run locally

```bash
npx create-vite@latest funnel-test -- --template react
cd funnel-test
# drop AICohortTest.jsx into src/, import it in App.jsx
npm install && npm run dev
```

## Deploy

The component is self-contained and works on any static React host (Vercel, Cloudflare Pages, GitHub Pages via Vite build). Once deployed, update the test link in the companion writeup and in the repo README.

## Mapping to funnel layers

| Score | Cohort | Funnel layer |
|-------|--------|--------------|
| 0–7 | Casual user | Layers 1–2 |
| 8–13 | Regular user | Layer 2 (daily) |
| 14–19 | Power user | Layer 3 (Frontier) |
| 20–26 | AI builder | Layers 4–6 |
| 27–30 | AI-native operator | Layer 6–7 edge |

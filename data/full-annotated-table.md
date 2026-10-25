# AI Power User Funnel — Research Data Table

**Version:** 1.8 | **Date:** May 24, 2026 | **Author:** M. Evdokimov  
**Purpose:** Верифицируемая база данных для воронки AI Power Users. Каждая метрика привязана к первичному источнику.  
**Triangulation:** Claude (primary research) + Grok (validation + regional cut + PDF verification) + Grok Researcher (epistemic review) + Qwen (methodological review) + Methodology Audit (quality gates) + DeepSeek (structural review + Central Asia deep research) + Gemini (source verification + Monte Carlo + regional anchors) + ChatGPT (publication-grade audit + confidence downgrade)  
**Historical depth:** Q2 2023 → Q1 2026 (quarterly for Gallup, annual for McKinsey/Microsoft/SO)  
**Presentation principle (ChatGPT v1.6):** Share-first, count-second. Strongest claims = survey shares (50% US use, 13% daily, 16% Frontier, 50.6% devs daily). Absolute lower-funnel counts = model outputs, not primary facts.

---

## 0. Executive Summary

AI Power User Funnel — каскадная воронка, построенная на пересечении независимых primary источников (суммарно n>115K).

**Ключевые выводы (май 2026):**
- В Q1 2026 впервые **50% US employees** используют AI на работе (Gallup). Tipping point пройден.
- **16% AI users = Frontier Professionals** (Microsoft WTI 2026) — они оркестрируют агентов, переделывают воркфлоу, 80% из них делают работу, невозможную год назад.
- Agentic coding — отдельный быстрорастущий слой: Cursor $2B ARR, Claude Code 2× WAU за 4 месяца. Оценка 3-5M likely conservative.
- **Organizational readiness** = 67% variance (vs 32% individual). Основной драйвер — не инструменты, а перестройка процессов.
- В **regulated emerging banking** когорта сжимается до **сотен глобально**, в Central Asia — **единицы-десятки**.

**Порядок величин устойчив** (7 ревьюеров единогласно). Погрешность нижних слоёв ±3-5x, но порядок надёжный.

**Stratification thesis (Grok Researcher v1.7):** AI пока **усиливает стратификацию**, а не выравнивает возможности. Технология непропорционально усиливает already capable, already technical, already high-agency. Общество может выглядеть «AI-native» медийно, при том что transformative usage остаётся у узкой группы. Usage intensity ≠ economic leverage: 10 продвинутых оркестраторов могут экономически перевесить 1000 casual users.

**Системные caveats (v1.7):**
- ⚠️ **Visibility distortion:** основные источники (Gallup, SO, WTI) overindex на visible populations (devs, founders, remote KW). Middle operations, compliance, SMEs = radically lower adoption. Penetration может быть систематически завышен.
- ⚠️ **Vendor incentive contamination:** Gallup, Microsoft, McKinsey имеют structural incentive к завышению (enterprise sponsorship, self-report bias, definitional drift). Top funnel directionally correct, но absolute numbers likely overstated.

---

## 1. Таблица данных

### Layer 1: Knowledge Workers — глобальная база

| # | Метрика | Значение | Источник | Локация в источнике | URL | Дата публикации |
|---|---------|----------|----------|---------------------|-----|-----------------|
| 1.1 | Общее число knowledge workers в мире | >1 млрд (~32% всех работников) | Gartner | Knowledge-worker forecast (press release) | https://www.gartner.com/en/newsroom/press-releases/2021-06-22-gartner-forecasts-51-percent-of-global-knowledge-workers-will-be-remote-by-2021 | 2021 |
| 1.1b | Knowledge workers — уточнённый диапазон | **0.64 — 1.0 млрд** (19.6-30.4% глобальной занятости) | ILOSTAT — занятость по занятиям (ISCO-08) | Major groups 1–3: managers + professionals + technicians/associate professionals, доля глобальной занятости | https://ilostat.ilo.org/topics/employment/ | 2025 |
| 1.2 | Число professional developers в мире | 36.5 млн (professional), 47.2 млн (total incl. amateur) | SlashData, Developer Population Q1 2025 | Вебинар «Global developer population trends 2025»: «From early 2022 to early 2025, the number of professional developers grew significantly—by 70%—from 21.8 million to 36.5 million» | https://www.slashdata.co/post/global-developer-population-trends-2025-how-many-developers-are-there | May 2025 |
| 1.3 | Число professional developers (альтернативная оценка) | 20.8 млн professional (**~14% MAPE** в модели JetBrains) | JetBrains Developer Ecosystem Data Playground 2025 | Chart: «By 2025, the number of professional developers worldwide reached approximately 20.8 million people»; model has avg historical error ~14% MAPE | https://www.jetbrains.com/lp/devecosystem-data-playground/ | 2025 |
| 1.4 | Число professional developers (Statista) | 28.7 млн | Statista via Keyhole Software | «The global software developer population reached 28.7 million in 2025 according to Statista» | https://keyholesoftware.com/software-development-statistics-2026-market-size-developer-trends-technology-adoption/ | Apr 2026 |

**Комментарий:** Оценки dev population разнятся (20.8M — 47.2M) в зависимости от определения «developer» (только professional vs. включая amateur/hobbyist). Для воронки используем ~20.8-36.5M professional developers как рабочую оценку.

> ✅ **[ChatGPT]** «~1 млрд» = верхняя граница шорткат. Для publication-grade: **«0.64-1.0B depending on definition»** (ILO/UN). JetBrains модель имеет ~14% MAPE — учитывать при экстраполяции dev base.

---

### Layer 2: AI adoption среди workforce (occasional → daily)

| # | Метрика | Значение | Источник | Локация в источнике | URL | Дата публикации |
|---|---------|----------|----------|---------------------|-----|-----------------|
| 2.1 | Доля US employees, использующих AI на работе хотя бы occasionally | **50%** (впервые перешли 50%) | Gallup Workforce Survey, Q1 2026 | n=23,717 US employees, Feb 4-19 2026. «Total AI users = 50%, first time crossing 50% mark» | https://www.axios.com/2026/04/13/ai-workplace-use-leaders-poll | Apr 13, 2026 |
| 2.2 | Доля US employees, использующих AI daily | **13%** | Gallup Workforce Survey, Q1 2026 | «13% of workers saying they use the tech daily, compared with 12% last quarter and 10% before that» | https://www.tomshardware.com/tech-industry/artificial-intelligence/half-of-all-us-employees-now-use-artificial-intelligence-at-work | Apr 14, 2026 |
| 2.3 | Доля US employees, использующих AI few times/week+ | **28%** | Gallup Workforce Survey, Q1 2026 | «28% use it at least a few times a week. Both numbers are all-time highs» | Ibid. | Apr 14, 2026 |
| 2.4 | Доля US employees, использующих AI daily (Q4 2025) | **12%** | Gallup Workforce Survey, Q4 2025 | n=22,000+ US workers. «12% of employed adults say they use AI daily» | https://www.gallup.com/workplace/701195/frequent-workplace-continued-rise.aspx | Jan 25, 2026 |
| 2.5 | AI adoption among remote-capable employees | **66%** total, **40%** frequent, **19%** daily | Gallup Q4 2025 | «By 2025, total AI use among remote-capable employees reached 66%, including 40% who use AI frequently and 19% who use it daily» | https://www.gallup.com/workplace/701195/frequent-workplace-continued-rise.aspx | Jan 25, 2026 |
| 2.6 | Доля организаций, использующих AI в хотя бы одной функции | **88%** (vs 78% годом ранее) | McKinsey State of AI 2025 (QuantumBlack) | «88 percent report regular AI use in at least one business function, compared with 78 percent a year ago» | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai | Nov 5, 2025 |
| 2.7 | Рост AI adoption у employees (McKinsey longitudinal) | 30% → 76% (2023 → 2025) | McKinsey «How AI Is—and Isn't—Changing the Future of Work» | «In 2023, McKinsey research found only 30 percent of employees reported using AI at work. By 2025, 76 percent» | https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/how-ai-is-and-isnt-changing-the-future-of-work | Apr 6, 2026 |
| 2.8 | Daily GenAI users глобально | **122 млн+** | Elfsight / агрегация | «Over 122 million use generative AI tools daily» | https://elfsight.com/blog/ai-usage-statistics/ | May 2026 |
| 2.9 | GenAI users, которые используют несколько раз в день | **10-15%** online adults | Elfsight / агрегация | «Roughly 10–15% of online adults use generative AI tools multiple times per day, concentrated heavily among students, developers, and knowledge workers» | https://elfsight.com/blog/ai-usage-statistics/ | May 2026 |

**Экстраполяция на Layer 2:**  
- US penetration = 50% → глобальная корректировка (tiered regional multipliers, Gemini v1.5)  
- 1 млрд KW × 35-45% = **350-450 млн** occasional+ users  
- Daily users: 1 млрд × 8-13% (с поправкой) = **80-130 млн**
- **Monte Carlo (Gemini, 10K iterations): central 374M, 95% CI = 330-420M** (±45M, уже от ±100M)

> ⚠️ **[Qwen]** Рекомендуется более консервативная оценка **350-500 млн** (не 400-600 млн). Коэффициент 0.7-0.8 эвристический, не обоснован эмпирически. Нужны региональные якоря (Eurostat, APAC).  
> ⚠️ **[Audit]** Определение «AI user» разнится между источниками: Gallup (≥ few times/year, завышает базу), Microsoft WTI (pre-filtered AI users only), Stack Overflow («use or plan to use», смешивает намерения с фактом), McKinsey (org-level, не individual). Необходим quality gate: Microsoft WTI metric 3.3 «produce work impossible a year ago» как критерий перехода Layer 2 → 3.  
> ✅ **[Gemini]** Заменить единый geo-коэффициент 0.7-0.8 на **tiered regional multipliers** (US=1.0x, Developed=0.9-1.1x, Emerging=0.5-0.7x, Frontier EM=0.2-0.4x). APAC может **превышать** US в некоторых сегментах (Microsoft WTI 2025 APAC: 84% KW using AI). Eurostat 2025: EU27 = 20% enterprises, Nordic = 42%. Это сужает CI Layer 2 на ~40%.

---

### Layer 3: Frontier Professionals — переделывают workflow, оркестрируют агентов

| # | Метрика | Значение | Источник | Локация в источнике | URL | Дата публикации |
|---|---------|----------|----------|---------------------|-----|-----------------|
| 3.1 | Доля AI users, являющихся Frontier Professionals | **16%** | Microsoft Work Trend Index 2026 | n=20,000 AI users, 10 markets, Feb 18 — Apr 20 2026, fielded by Edelman Data x Intelligence. «They represent a small but disproportionately valuable group: 16% of the AI users we surveyed» | https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization | May 5, 2026 |
| 3.2 | Определение Frontier Professional | Routinely use agents for multi-step workflows, redesign how work gets done, share learnings with teams | Microsoft WTI 2026 | «These are the 16% of AI users who routinely use agents for multi-step workflows, redesign how their work gets done, and share what they learn with their teams» | https://www.geekwire.com/2026/microsofts-new-research-finds-an-ai-paradox-holding-companies-back/ | May 2026 |
| 3.3 | Frontier Professionals производят ранее невозможную работу | **80%** (vs 58% среди всех AI users) | Microsoft WTI 2026 | «58% of AI users say they now produce work that was impossible a year ago. That number rises to 80% among Frontier Professionals» | Ibid. | May 2026 |
| 3.4 | Frontier Professionals сознательно работают без AI | **43%** целенаправленно делают задачи без AI для сохранения навыков | Microsoft WTI 2026 | «43% of frontier professionals—and 30% of AI users overall—purposely do some tasks without AI assistance to keep their skills sharp» | https://www.fastcompany.com/91536348/ai-power-users-are-pulling-away-from-everyone-else-says-microsoft | May 2026 |
| 3.5 | Организационный фактор vs индивидуальный | **67% org / 32% individual** | Microsoft WTI 2026 | «Organizational factors such as culture, manager support, and talent practices drive roughly twice the AI impact of individual mindset and behaviour, a 67% to 32% split» | https://themicrosoftcloudblog.com/2026/05/2026-work-trend-index-evidence-check/ | May 2026 |
| 3.6 | Frontier zone (org + individual aligned) | **19%** AI users | Microsoft WTI 2026 | «19% of AI users are in the Frontier, the sweet spot where organizational capability and individual readiness are both reinforcing each other» | https://finance.yahoo.com/sectors/technology/articles/microsoft-finds-just-13-firms-044659301.html | May 2026 |
| 3.7 | AI High Performers (организации) | **~6%** | McKinsey State of AI 2025 | «AI high performers, representing about 6 percent of respondents—report pushing for transformative innovation» из ~1,500 org survey | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai | Nov 5, 2025 |

**Экстраполяция на Layer 3:**  
- 16% от ~100M daily users = **~16 млн** Frontier Professionals  
- Или 19% (Frontier zone) от daily+frequent = **~19-25 млн**

---

### Layer 4: AI-кодеры — ежедневно кодят через AI

| # | Метрика | Значение | Источник | Локация в источнике | URL | Дата публикации |
|---|---------|----------|----------|---------------------|-----|-----------------|
| 4.1 | Доля developers, использующих AI в dev process | **84%** (use or plan to use) | Stack Overflow Developer Survey 2025 | n=49,009, 166 countries, May-Jun 2025. AI section: «84% of respondents are using or planning to use AI tools in their development process, up from 76% last year» | https://survey.stackoverflow.co/2025/ai | Published Dec 2025 |
| 4.2 | Доля professional developers, использующих AI daily | **51%** | Stack Overflow Developer Survey 2025 | «This year we can see 51% of professional developers use AI tools daily» | https://survey.stackoverflow.co/2025/ai | Dec 2025 |
| 4.3 | Доля всех respondents, использующих AI daily | **47.1%** | Stack Overflow Developer Survey 2025 | «47.1% of respondents said they use AI tools daily, and another 17.7% use them weekly» | https://adtmag.com/blogs/watersworks/2026/01/stack-overflow-survey.aspx | Jan 2026 |
| 4.4 | Cursor DAU | **>1 млн** daily active users | Bloomberg (Mar 2026) | «The company now has more than 1 million daily users, including 50,000 businesses» | https://www.bloomberg.com/news/articles/2026-03-19/ai-coding-startup-cursor-plans-new-model-to-rival-anthropic-openai | Mar 19, 2026 |
| 4.5 | Cursor ARR | **$2 млрд** (Feb 2026) | Bloomberg | «Cursor's annualized recurring revenue had doubled to $2 billion in just three months» | Via https://letsdatascience.com/blog/cursor-hit-2-billion-in-revenue-then-it-told-developers-to-stop-coding | Mar 2026 |
| 4.6 | Claude Code WAU | **1.6 млн** weekly active users | ⚠️ **Third-party estimate** (не Anthropic disclosure) | «Claude Code has 1.6 million weekly active users and is growing rapidly» | https://shahidshahmiri.com/claude-ai-users/ | May 2026 |
| 4.7 | Claude Code WAU (альтернативная оценка) | **4.2 млн** WAU | ⚠️ **Third-party estimate** (Presenc AI) | «Claude Code has crossed 4.2 million weekly active developer users» | https://presenc.ai/research/claude-usage-statistics | Mar 2026 |
| 4.8 | Claude Code WAU doubled | 2x рост с Jan 2026 | ✅ **Anthropic first-party** (Series G disclosure) | «Weekly active Claude Code users doubled between January and April 2026» | https://fatjoe.com/blog/claude-ai-stats/ | May 2026 |
| 4.9 | Claude Code run-rate revenue | **$2.5 млрд** | ✅ **Anthropic first-party** | «Claude Code also reached $2.5 billion in run-rate revenue» | https://www.demandsage.com/claude-ai-statistics/ | May 2026 |
| 4.10 | GitHub Copilot users | **20 млн** **all-time** (не DAU/WAU) | GitHub/Microsoft disclosure | «Copilot had crossed 20 million users» — confirmed as all-time, not active | https://douglevin.substack.com/p/cursor-overtakes-github-consequences | Sep 2025 |
| 4.11 | Claude Sonnet adoption among developers | **42.8%** | Stack Overflow Developer Survey 2025 | «Claude Sonnet is used by 42.8% of surveyed developers» (professional coding workflows) | Via https://shahidshahmiri.com/claude-ai-users/ | 2025 |
| 4.12 | Trust in AI among developers | Only **33%** trust, **46%** distrust, **3%** highly trust | Stack Overflow Developer Survey 2025 | «Only 33% of developers trust AI accuracy, while 46% actively distrust it. Just 3% say they 'highly trust'» | https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/ | Jul 2025 |
| 4.13 | Professional devs using AI agents at work | **~31.8%** (at any cadence: daily + weekly + monthly) | Stack Overflow Developer Survey 2025 | SO AI agents section: sum of professional developers using agents at work | https://survey.stackoverflow.co/2025/ai | Dec 2025 |

**Экстраполяция на Layer 4:**  
- Professional devs ~20.8-36.5M × 51% daily AI usage = **~10.5-18.5M** используют AI tools daily  
- Из них agentic (SO: ~31.8% pro devs use agents at work): **~3.3-5.9M** agentic coders  
- Cross-check: Cursor 1M DAU + Claude Code (WAU doubled, exact count = third-party) + другие → **~3-5 млн** (converges)

> ⚠️ **[Grok]** Первоначальная оценка 2-3M устарела. Cursor >1M DAU + Claude Code rapid growth → скорректировано до 3-5M+.  
> ⚠️ **[Audit]** 10.5-18.5M включает autocomplete. Фильтр «multi-file, multi-step, autonomous» отсекает ~70%.  
> ⚠️ **[DeepSeek]** 3-5M «likely conservative as of mid-2026».  
> ✅ **[ChatGPT]** Dev base должен быть шире (10.5-18.5M, не 14-18M) из-за разброса SlashData vs JetBrains. 31.8% pro devs use agents (SO) = более точный agentic filter чем heuristic 20-30%. Claude Code WAU (1.6M, 4.2M) = **third-party estimates**, не first-party; удалить или пометить. Anthropic first-party: «doubled WAU» + «$2.5B run-rate» — это всё что подтверждено.

---

### Layer 5: C-level / Product leaders, которые сами кодят через AI

| # | Метрика | Значение | Источник | Локация в источнике | URL | Дата публикации |
|---|---------|----------|----------|---------------------|-----|-----------------|
| 5.1 | Доля C-level в workforce | **~2-3%** | US Bureau of Labor Statistics | BLS Occupational Employment Statistics, Management Occupations | https://www.bls.gov/oes/ | Annual |
| 5.2 | Frontier Professionals: доля decision makers | **44%** business decision makers, **56%** employees | Microsoft WTI 2026 | Direct quote from report PDF (p.~20): «44% business decision makers, 56% employees» | https://assets-c4akfrf5b4d3f4b7.z01.azurefd.net/assets/2026/05/2026_Work_Trend_Index_Annual_Report_050526-4_69f9b41ca0945.pdf | May 5, 2026 |
| 5.3 | Leaders используют AI чаще | Leaders > managers > IC | Gallup Q4 2025 | «Employees in leadership positions are more likely than managers and individual contributors to use AI at work» | https://www.gallup.com/workplace/701195/frequent-workplace-continued-rise.aspx | Jan 2026 |
| 5.4 | AI superusers — экономия времени | **27%** AI users экономят 9+ часов/неделю; some **20+ часов** | Federal Reserve / Fullview aggregation | «27% of AI users save over 9 hours per week, some 'superusers' reclaim 20+ hours weekly» | https://www.fullview.io/blog/ai-statistics | Nov 2025 |

**Экстраполяция на Layer 5:**  
- ~16M Frontier × 44% decision makers = ~7M leaders среди Frontier  
- Из них кодят сами (не делегируют): ~3-5% → **200-400K**

> ⚠️ **[Qwen]** Frontier Professionals: 44% decision makers / 56% IC (Microsoft WTI 2026). Это важно для B2B-сегментации — почти половина Frontier не IC.  
> ✅ **[Grok v1.4]** Прямая цитата верифицирована в PDF отчёта WTI 2026 (p.~20). **Data confidence: High.** Допущение A3 закрыто.

---

### Layer 6: AI builders — создают фреймворки, продукты, методологии

| # | Метрика | Значение | Источник | Локация в источнике | URL | Дата публикации |
|---|---------|----------|----------|---------------------|-----|-----------------|
| 6.1 | Developers, использующие AI agents | **31%** use agents at work | Stack Overflow Developer Survey 2025 | «Only 31% use agents at work in some capacity» | https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/ | Jul 2025 |
| 6.2 | Vibe coding отвергается профессионалами | **77%** — не часть профессиональной работы | Stack Overflow Developer Survey 2025 | «Nearly 77% said vibe coding is not part of their professional development work» | Ibid. | Jul 2025 |
| 6.3 | Организации, масштабирующие AI agents | **23%** scaling, **39%** experimenting | McKinsey State of AI 2025 | «23% of respondents report their organizations are scaling an agentic AI system, with an additional 39% experimenting» | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai | Nov 2025 |
| 6.4 | «Builders vs Users» ratio среди developers | **~5-10%** | Stack Overflow / JetBrains historical proxies | Экстраполяция: доля тех, кто создаёт собственные инструменты/фреймворки, а не использует готовые | Historical SO/JetBrains surveys | 2023-2025 |

**Экстраполяция на Layer 6:**  
- 200-400K C-level AI coders × 5-10% «builders» = **~15-40K**

> ⚠️ **[Audit — CRITICAL]** Каскадная погрешность. Каждый слой имеет свой ±, при перемножении погрешность мультиплицируется:  
> Layer 4 (3-5M, ±2M) × 44% DM × 3-5% coders × 5-10% builders  
> → Audit heuristic 95% CI: 5K — 120K  
> ✅ **[Gemini — Monte Carlo, 10K iterations]:** central estimate **19.4K**, real 95% CI = **7.1K — 41.8K** (±17.4K). Значительно точнее Audit estimate. Каскадная погрешность подтверждена, но реальный CI уже чем 5K-120K.  
> **Рекомендация для публикации:** «Порядок десятков тысяч (central ~20K; 95% CI: 7K-42K)»

---

### Layer 7: Regulated banking × emerging markets × всё вышеперечисленное

| # | Метрика | Значение | Источник | Локация в источнике | URL | Дата публикации |
|---|---------|----------|----------|---------------------|-----|-----------------|
| 7.1 | AI value potential in banking | **$200-340 млрд** | McKinsey Banking & AI estimates | McKinsey «AI in banking» analysis: up to 30% cost reduction potential | McKinsey reports 2024-2025 | 2024-2025 |
| 7.2 | AI diffusion в emerging markets | Uneven, constrained by skills + institutional readiness | IFC 2026 | IFC analysis: «AI diffusion uneven, constrained by skills + institutional readiness» | IFC reports | 2026 |
| 7.3 | Regulatory constraints | Model risk, audit, data residency, NBKR-level governance | Domain expertise | Pentest frameworks, cybersecurity inspections, information security audits — typical regulatory overhead in KG/KZ | N/A | Ongoing |

**Экстраполяция на Layer 7:**  
- Emerging market banking × AI-native C-level × builder → **~200-800 человек** глобально  
- KG/KZ/UZ/Central Asia subset → **единицы-десятки**

> ⚠️ **[Audit]** Layers 6-7 основаны на **expert estimates**, не на первичных данных. Маркировать как «Expert estimate, no primary source». Для Layer 7 нет ни одного survey, который бы измерял эту когорту напрямую.

---

### Layer 7b: Regional Cut — Kazakhstan / Central Asia (Grok v1.4 + DeepSeek v1.5)

| Слой | Оценка (глобально) | Оценка (KZ + Central Asia) | Комментарий |
|------|---------------------|----------------------------|-------------|
| Daily AI users | 80-130 млн | ~150-250K | Население ~80M, penetration ниже US |
| Frontier Professionals | 16-25 млн | ~3-5K | Экстраполяция 16% от local AI users |
| AI coders (agentic daily) | 3-5 млн | ~500-1K | Dev community smaller |
| C-level hands-on AI | 200-400K | **30-70** | Топ-20 банков + крупные fintech |
| AI builders (frameworks) | 15-40K | **5-15** | Внутренние платформы + indie |
| Regulated banking builders | 200-800 | **3-12** | Halyk, Kaspi, Forte, O!Bank, NBKR-regulated + 2-3 fintech |

#### Казахстан — regulatory & market context (DeepSeek deep research)

**Цифровая зрелость:** 89% безналичных платежей, ~100% penetration мобильного банкинга. Kaspi.kz + Halyk Bank контролируют 78% всех платежей и переводов. 75% коммерческих банков КЗ внедрили ML в production (скоринг, fraud detection, AML). 39% применяют нейросетевые модели.

**Закон РК «Об искусственном интеллекте»** (принят 17.11.2025, вступил 18.01.2026):
- Двумерная классификация ИИ-систем: по уровню риска (минимальный / средний / высокий) × степени автономности (низкая / средняя / высокая)
- **Статья 19-1:** полный запрет на автоматизированную обработку ПДн, влекущую возникновение/изменение/прекращение прав граждан, без предварительного документированного согласия
- Право заёмщиков требовать раскрытия логики алгоритма, опротестовывать автоматические отказы, 3 рабочих дня на рассмотрение возражений человеком

**Инфраструктура:** Data Center Valley в Экибастузе (до 1 ГВт GPU-мощности). Суверенные LLM: IrbisGPT, KazLLM. Регуляторная песочница НБРК для обучения моделей без трансграничной передачи данных.

#### Кыргызстан — ранняя стадия (DeepSeek)

**Ключевые факты:** НБКР разрабатывает архитектуру цифрового сома (Digital Som PoC, двухуровневая розничная модель). MBank — единственный банк КР, самостоятельно разрабатывающий ИИ-ассистентов для клиентов. O!Bank (ALGA Group) — активный AI adopter на C-level.

**Барьеры:** критический дефицит GPU-мощностей, нестабильность энергоснабжения, дефицит ML-кадров, отсутствие AI-специфичного законодательства (в отличие от КЗ).

**Барьеры в ЦА (сводные):** model risk governance, audit trail requirements, data residency (Закон РК «Об ИИ» + NBKR guidelines), ограниченный local ML talent pool, энергетические ограничения в КР.

**Источники:** Закон РК «Об ИИ» (17.11.2025), NBKR reports 2025-2026, Halyk/Kaspi public AI initiatives, IFC Central Asia AI readiness 2026, Oxford Insights Gov AI Readiness 2025, DeepSeek deep research, ChatGPT deep research, domain expertise.

> ⚠️ **[Grok]** Количественные оценки Regional Cut — expert estimates. **Data confidence: Low.**  
> ✅ **[DeepSeek]** Регуляторный контекст КЗ подтверждён первичным законодательством (Закон РК «Об ИИ»). Market data (75% банков с ML, 89% cashless) — из публичных отчётов НБРК/АРРФР. **Data confidence для regulatory context: High.**  
> ✅ **[ChatGPT]** Дополнительные якоря: Oxford Insights 2025 — КЗ #58 глобально, #3 в South/Central Asia (score 56.70 vs regional avg 42.08). НБРК survey (Apr 2024): из 94 участников финрынка **31% уже используют AI**, second-tier банки — **60%**, **45% планируют** внедрить в 2024. Data localization подтверждена (Morgan Lewis: ПДн обязаны храниться на серверах в РК).  
> ⚠️ **[ChatGPT — caveat]** Закон РК «Об ИИ» — DeepSeek утверждает что принят и вступил в силу. ChatGPT не смог независимо верифицировать **финальный вступивший в силу текст** из первичного правового источника в рамках данного ревью. Рекомендация: верифицировать через adilet.zan.kz перед публикацией.

---

## 2. Historical Timeline — все публикации источников (Q2 2023 → Q1 2026)

### 2.1 Gallup Workforce AI Survey — поквартальная серия

| Период | Выборка | Any use (≥ few times/year) | Frequent (≥ few times/week) | Daily | URL | Дата публикации |
|--------|---------|---------------------------|----------------------------|-------|-----|-----------------|
| Q2 2023 | US employees | **21%** | N/A | N/A | Gallup baseline (cited across all subsequent reports) | 2023 |
| Q2 2025 | US employees | **40%** | **19%** | **8%** | https://www.gallup.com/workplace/699689/ai-use-at-work-rises.aspx (cited as prior quarter baseline) | Referenced Dec 2025 |
| Q3 2025 | n=23,068 US employees (Aug 5-19, 2025) | **45%** | **23%** | **10%** | https://www.gallup.com/workplace/699689/ai-use-at-work-rises.aspx | Dec 15, 2025 |
| Q4 2025 | n=22,000+ US workers (fall 2025) | **46%** | **26%** | **12%** | https://www.gallup.com/workplace/701195/frequent-workplace-continued-rise.aspx | Jan 25, 2026 |
| Q1 2026 | n=23,717 US employees (Feb 4-19, 2026) | **50%** (first time crossing 50%) | **28%** | **13%** | https://www.axios.com/2026/04/13/ai-workplace-use-leaders-poll | Apr 13, 2026 |

**Динамика daily usage:** 8% → 10% → 12% → 13% (Q2'25 → Q1'26), **+62.5% за 9 месяцев**  
**Динамика any use:** 21% (2023) → 40% → 45% → 46% → 50%, **+138% за 3 года**

---

### 2.2 McKinsey State of AI / Global Survey — ежегодная серия

| Год публикации | Период сбора данных | Выборка | AI org adoption | GenAI org adoption | High performers | URL |
|----------------|--------------------|---------|-----------------|--------------------|-----------------|-----|
| May 2024 | Feb 22 — Mar 5, 2024 | n=1,363, all org levels | **72%** (up from ~50% prior years) | **65%** regular use (up from 33% in 2023) | N/A (not defined this year) | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024 |
| Mar 2025 | 2024 (full year) | n=1,491, 101 nations | **78%** (up from 72%) | N/A | N/A | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value |
| Nov 2025 | 2025 | ~1,500 organizations | **88%** (up from 78%) | **71%** regular GenAI | **~6%** (>5% EBIT attributable to AI) | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai |

**Динамика org adoption:** ~50% (2022) → 72% (early 2024) → 78% (late 2024) → 88% (2025), **+76% за 3 года**  
**Динамика GenAI adoption:** 33% (2023) → 65% (early 2024) → 71% (2025), **+115% за 2 года**

---

### 2.3 Microsoft Work Trend Index — ежегодная серия

| Год | Дата публикации | Выборка | Ключевой концепт | Ключевые метрики | URL |
|-----|----------------|---------|-------------------|------------------|-----|
| WTI 2025 | Apr 23, 2025 | n=31,000, 31 markets (Feb 6 — Mar 24, 2025), Edelman Data x Intelligence | **Frontier Firm** (org level) | 82% leaders plan digital labour; 71% Frontier Firm workers say company thriving (vs 37% globally); org-level AI maturity index | https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born |
| WTI 2026 | May 5, 2026 | n=20,000, 10 markets (Feb 18 — Apr 20, 2026), Edelman Data x Intelligence | **Frontier Professional** (individual level) | 16% AI users = Frontier Professionals; 80% produce previously impossible work; 67%/32% org vs individual factor; 19% in «Frontier zone» | https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization |

**Эволюция:** 2025 — фокус на организации (Frontier Firm). 2026 — фокус сместился на индивида (Frontier Professional, 16%).  
**Изменение выборки:** 31K → 20K, 31 рынков → 10 рынков. 2026 опросил **только AI users** (не всех workers).

---

### 2.4 Stack Overflow Developer Survey — ежегодная серия

| Год survey | Дата сбора | Выборка | AI use/plan | Daily AI use (professional devs) | Daily AI use (all) | Trust AI accuracy | URL |
|------------|-----------|---------|-------------|----------------------------------|--------------------|--------------------|-----|
| 2024 | Mid-2024 | ~65,000 | **76%** | N/A (not segmented this way) | N/A | ~40% trust | https://survey.stackoverflow.co/2024 |
| 2025 | May-Jun 2025 | n=49,009, 166 countries | **84%** (up from 76%) | **51%** | **47.1%** | **33%** trust (down from 40%), **46%** distrust, **3%** highly trust | https://survey.stackoverflow.co/2025/ai |

**Динамика:** AI tool adoption 76% → 84% (+8pp). Trust fell 40% → 33%. Daily use among pros: 51% (first measurement at this granularity).

---

### 2.5 AI Coding Tools — product metrics timeline

| Продукт | Метрика | Mid-2025 | Early 2026 | Рост | Источник |
|---------|---------|----------|------------|------|----------|
| Cursor | DAU | ~1M (Sep 2025, Bloomberg) | >1M (Mar 2026, Bloomberg) | Stable DAU, ARR: $500M → $2B | https://www.bloomberg.com/news/articles/2026-03-19/ai-coding-startup-cursor-plans-new-model-to-rival-anthropic-openai |
| Cursor | ARR | $100M (early 2025) → $500M (Jun 2025) → $1B (Nov 2025) | $2B (Feb 2026) | **20x за год** | Bloomberg, company disclosures |
| Claude Code | WAU | Launched Jan 2025 | 1.6-4.2M WAU (estimates vary); doubled since Jan 2026 | **>2x in 4 months** | Anthropic Series G (Feb 2026); third-party estimates |
| Claude Code | Revenue run-rate | $500M+ (within months of GA) | $2.5B | **~5x** | https://www.demandsage.com/claude-ai-statistics/ |
| GitHub Copilot | Total users | ~20M all-time | ~20M all-time (DAU lower than Cursor) | Flat on all-time; DAU lagging | https://douglevin.substack.com/p/cursor-overtakes-github-consequences |

---

### 2.6 Сводная таблица динамики по слоям воронки

| Слой | Метрика (mid-2025) | Метрика (Q1 2026) | Δ | CAGR proxy |
|------|--------------------|--------------------|----|------------|
| Daily AI users (US) | 8% (Gallup Q2'25) | 13% (Gallup Q1'26) | +62.5% | ~83% annualized |
| Any AI use (US) | 40% (Gallup Q2'25) | 50% (Gallup Q1'26) | +25% | ~33% annualized |
| Org AI adoption | 78% (McKinsey late 2024) → 88% (2025) | N/A (annual) | +13% YoY | Approaching saturation |
| GenAI org adoption | 65% (early 2024) | 71% (2025) | +9% | Decelerating |
| Developer AI adoption | 76% (SO 2024) | 84% (SO 2025) | +11% | Steady |
| Developer daily AI use | N/A (first measured 2025) | 51% pro devs | Baseline | — |
| Frontier Professionals | Not defined (2025 = org-level Frontier Firm) | 16% of AI users (WTI 2026) | New metric | — |
| Agentic coding DAU (Cursor) | ~1M | >1M | Stable DAU, ARR 20x | Revenue ≠ DAU |
| Claude Code WAU | Just launched (Jan 2025) | 1.6-4.2M; doubled since Jan 2026 | From 0 to millions | Hypergrowth |

---

## 3. Сводная воронка (v1.7 — reproduced MC)

**Principle: Share-first, count-second (ChatGPT). MC reproduced in-house (Claude, Python, seed=42).**

| Слой | Primary share | Absolute estimate | 90% CI (reproduced MC, 10K iter) | Estimation class | Якорный источник |
|------|---------------|-------------------|----------------------------------|------------------|------------------|
| Knowledge workers | — | **0.64-1.0 млрд** | 658M — 983M | Observed | ILOSTAT (ISCO-08 1-3) + Gartner |
| Occasional AI users | **50% US** (Gallup) | 307M (central) | **234 — 388M** | Derived | Gallup Q1 2026 × tiered geo |
| Frontier Professionals | **16% of AI users** (WTI) | 27.6M (central) | **19.0 — 37.7M** | Derived | Microsoft WTI 2026 × AI user base |
| Agentic coders | **31.8% pro devs** use agents (SO) | 4.6M (central) | **3.4 — 6.1M** | Derived | SO 2025 × dev population |
| C-level AI coders | — | 486K (central) | **236 — 808K** | Synthetic est. | Frontier × 44% DM × hands-on |
| AI builders (frameworks) | — | ~35K (central) | **14.9 — 74.6K** | Scenario est. | Cascading × builder rate |
| Regulated EM banking | — | ~720 (central) | **191 — 2,085** | Heuristic range | Expert estimate |

**⚠️ Reproduced MC vs Gemini MC:** Gemini's CI были narrower (L6: 7.1-41.8K vs reproduced 14.9-74.6K). Разница = assumptions about distributions. Gemini's assumptions не были disclosed. Reproduced MC с explicit code и seed=42 — verifiable.

**⚠️ Key finding:** Layer 7 (regulated EM banking) has a 90% CI spanning **an order of magnitude** (191-2085). This confirms it's a heuristic range, not a measurement.

---

## 3a. Sensitivity Analysis: Layer 3 denominator problem

**Проблема:** Microsoft WTI 2026 даёт 16% как долю от «AI users». Но сколько AI users globally? Зависит от определения.

| AI user base (global) | 12% Frontier | 16% Frontier | 19% Frontier |
|-----------------------|-------------|-------------|-------------|
| 80M (daily only) | 9.6M | 12.8M | 15.2M |
| 130M (daily, upper) | 15.6M | 20.8M | 24.7M |
| 200M (frequent+) | 24.0M | 32.0M | 38.0M |
| 300M (occasional, lower) | 36.0M | 48.0M | 57.0M |
| 400M (occasional, upper) | 48.0M | 64.0M | 76.0M |

**Вывод:** Выбор denominator меняет Layer 3 от **9.6M до 76M** (8x range). Модель использует base «frequent+» ≈ 0.28 × geo-доля knowledge workers (~150-210M) × 16% → центральная оценка **27.6M** (CI 19.0-37.7M) — примерно строка 200M таблицы выше; см. `src/monte_carlo_funnel.py`.

---

## 3b. Перекрёстная валидация

| Проверка | Результат |
|----------|-----------|
| Gallup daily 13% US × ~160M US KW = ~21M → global ×3-4x = 60-85M daily | Совпадает с 80-130M (нижняя граница) |
| Microsoft Frontier 16% × Gallup daily+frequent ~80-130M = 13-21M | Совпадает с 16-25M |
| SO professional devs 51% daily × 28-36M = 14-18M AI-coding devs → из них agentic ~20-30% = 3-5M | Совпадает с Layer 4 |
| McKinsey 6% high performers × ~1500 orgs survey → экстраполяция на ~500K orgs globally = ~30K high-performing orgs | Совпадает с Layer 6 порядок |

---

## 4. Источники — полный список

| # | Источник | Тип | Выборка | Период сбора | URL |
|---|---------|-----|---------|--------------|-----|
| S1 | Microsoft Work Trend Index 2026 Annual Report | Survey + M365 telemetry | n=20,000 AI users, 10 markets | Feb 18 — Apr 20, 2026 | https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization |
| S1b | Microsoft Work Trend Index 2025 Annual Report | Survey + M365 telemetry | n=31,000, 31 markets | Feb 6 — Mar 24, 2025 | https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born |
| S2 | Gallup Workforce AI Survey Q1 2026 | Survey | n=23,717 US employees | Feb 4-19, 2026 | https://www.axios.com/2026/04/13/ai-workplace-use-leaders-poll |
| S2b | Gallup Workforce AI Survey Q4 2025 | Survey | n=22,000+ US workers | Fall 2025 | https://www.gallup.com/workplace/701195/frequent-workplace-continued-rise.aspx |
| S2c | Gallup Workforce AI Survey Q3 2025 | Survey | n=23,068 US employees | Aug 5-19, 2025 | https://www.gallup.com/workplace/699689/ai-use-at-work-rises.aspx |
| S3 | McKinsey State of AI 2025 (QuantumBlack) | Survey | ~1,500 organizations | 2025 | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai |
| S3b | McKinsey State of AI — How Orgs Are Rewiring (late 2024) | Survey | n=1,491, 101 nations | 2024 | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value |
| S3c | McKinsey State of AI in Early 2024 | Survey | n=1,363 | Feb 22 — Mar 5, 2024 | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024 |
| S4 | McKinsey «How AI Is—and Isn't—Changing the Future of Work» | Longitudinal analysis | Multi-year survey data | Apr 2026 | https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/how-ai-is-and-isnt-changing-the-future-of-work |
| S5 | Stack Overflow Developer Survey 2025 | Survey | n=49,009, 166 countries | May-Jun 2025 | https://survey.stackoverflow.co/2025/ai |
| S6 | SlashData Developer Population Q1 2025 | Market research | Proprietary model | Q1 2025 | https://www.slashdata.co/post/global-developer-population-trends-2025-how-many-developers-are-there |
| S7 | JetBrains Developer Ecosystem 2025 | Survey + model | Proprietary | 2025 | https://www.jetbrains.com/lp/devecosystem-data-playground/ |
| S8 | Bloomberg — Cursor reporting (Mar 2026) | Journalism | Company disclosure | Mar 2026 | https://www.bloomberg.com/news/articles/2026-03-19/ai-coding-startup-cursor-plans-new-model-to-rival-anthropic-openai |
| S9 | Anthropic Series G / Claude Code metrics | Company disclosure | Internal telemetry | Feb 2026 | Via https://www.demandsage.com/claude-ai-statistics/ |
| S10 | Elfsight AI Usage Statistics | Aggregation | Multiple sources | May 2026 | https://elfsight.com/blog/ai-usage-statistics/ |
| S11 | US Bureau of Labor Statistics | Government data | Census-based | Annual | https://www.bls.gov/oes/ |
| S12 | Statista — Developer Population | Market research | Multiple sources | 2025 | https://statista.com/statistics/627312/worldwide-developer-population |
| S13 | Fast Company / Inc — Microsoft Frontier Professionals | Journalism | WTI 2026 analysis | May 2026 | https://www.fastcompany.com/91536348/ai-power-users-are-pulling-away-from-everyone-else-says-microsoft |
| S14 | GeekWire — WTI 2026 analysis | Journalism | WTI 2026 analysis | May 2026 | https://www.geekwire.com/2026/microsofts-new-research-finds-an-ai-paradox-holding-companies-back/ |

---

## 5. Методологические замечания (интеграция ревью: Grok + Qwen + Audit)

### 5.1 Подход: каскадная фильтрация по пересечению независимых метрик

Модель строится как воронка с последовательными фильтрами. Каждый слой сужает предыдущий через пересечение с независимой метрикой из другого источника. Это не sampling — это **экстраполяция через proxy-фильтры**.

**Слои 1-4:** якорятся на первичных survey data (Gallup n=23K, Microsoft n=20K, SO n=49K, McKinsey n=1.5K).  
**Слои 5-7:** экстраполяция через BLS workforce composition и экспертные оценки. Маркируются как «derived estimate».

### 5.2 Ключевые допущения и ограничения

| # | Допущение | Обоснование | Риск | Принятое решение |
|---|-----------|-------------|------|------------------|
| A1 | US → Global: коэффициент 0.7-0.8 | Эвристический → **заменён tiered regional multipliers (Gemini v1.5)**: US=1.0x, Developed=0.9-1.1x, Emerging=0.5-0.7x, Frontier EM=0.2-0.4x | ~~±25%~~ → **±12%** для Layer 2 | **Улучшено.** Eurostat + OECD + APAC anchors. CI сужен на ~40% |
| A2 | «AI user» = единое определение | Gallup (yearly+), SO (use+plan), WTI (pre-filtered) — разные пороги | Завышение базы на 20-40% | **Принято.** Добавлена маркировка Definition Alignment в Layer 2 |
| A3 | 44%/56% decision maker/IC split | ~~Qwen цитирует WTI 2026~~ → **Верифицировано** через PDF (p.~20, Grok v1.4) + **Gemini source verification** | ~~Medium~~ → **Resolved** | **Закрыто.** Двойная верификация (Grok PDF + Gemini) |
| A4 | 5-10% «builders vs users» | SO/JetBrains historical proxies, нет прямого measurement | ±2x | **Принято.** Порядок устойчивый, точное значение ненадёжно |
| A5 | Каскадная погрешность мультиплицируется | Математический факт → **Monte Carlo подтверждает (Gemini, 10K iterations)** | Layer 6: ~~5K-120K~~ → **7.1K-41.8K** (Monte Carlo 95% CI) | **Уточнено.** Monte Carlo сузил CI по сравнению с Audit heuristic |
| A6 | Layers 6-7 = expert estimates | Нет survey, измеряющего эту когорту | Непроверяемо | **Принято.** Маркировка «Expert estimate, no primary source» |

### 5.2b Estimation Taxonomy (Grok Researcher v1.7)

Вместо трёх уровней (Primary / Derived / Expert est.) — пять:

| Уровень | Определение | Примеры в документе |
|---------|-------------|---------------------|
| **Observed** | Прямое измерение из репрезентативного survey | Gallup 13% daily (n=23K), SO 51% devs daily (n=49K) |
| **Derived** | Расчёт через cross-multiplication наблюдаемых shares | 10.5-18.5M daily AI devs (dev population × SO daily rate) |
| **Synthetic estimate** | Каскадное перемножение 2+ derived filters | Layer 5: Frontier × DM% × hands-on% → 200-400K |
| **Scenario estimate** | Моделирование с explicit assumptions + Monte Carlo | Layer 6: 7.1-41.8K (MC 10K iterations) |
| **Heuristic range** | Экспертная оценка без формальной модели | Layer 7: 200-800 regulated banking builders |

Каждое значение в сводной воронке (Section 3) теперь маркируется по этой шкале.

### 5.2c Systematic Biases в upstream datasets (Grok Researcher v1.7)

**Vendor incentive contamination:**

| Источник | Тип bias | Направление | Magnitude |
|----------|----------|-------------|-----------|
| Gallup | Self-report bias | Overstatement | ~10-20% (social desirability) |
| Microsoft WTI | Pre-filtered sample (only AI users) + enterprise sponsor | Overstatement of sophistication | Medium — inflates Frontier % |
| McKinsey | Org-level self-report + consulting client bias | Overstatement of adoption | ~15-25% (aspirational reporting) |
| Stack Overflow | Non-probability sample, SO channel recruitment | Overstatement among engaged devs | Medium — SO users ≠ all devs |
| Bloomberg/company disclosures | Investor/PR incentive | Overstatement of growth metrics | Variable |

**Visibility distortion:**
Все основные источники overindex на visible, vocal, digitally-connected populations. Самые **невидимые** когорты (middle operations, compliance, regional management, SMEs, administrative labor) имеют radically lower adoption density. Это создаёт systematic overestimation of penetration в верхних слоях воронки.

**Implication:** Top funnel (Layers 1-3) directionally correct, но absolute numbers likely overstated на 10-25%. Нижние слои менее подвержены visibility distortion (они уже отфильтрованы), но более подвержены cascading error.

### 5.3 Quality gates между слоями (рекомендация Audit)

Переход между слоями определяется **качественным фильтром**, а не только частотой:

| Переход | Количественный фильтр | Качественный фильтр (рекомендуемый) |
|---------|----------------------|-------------------------------------|
| Layer 1 → 2 | Frequency ≥ few times/year | — |
| Layer 2 → 3 | Frequency ≥ daily/weekly + Microsoft 16% | **«Produce work impossible a year ago»** (WTI 2026: 80% Frontier vs 58% all) |
| Layer 3 → 4 | Uses AI for code generation | **Agentic coding** (multi-file, multi-step, autonomous — не autocomplete) |
| Layer 4 → 5 | Seniority ≥ Director/VP/C-level | **Hands-on** (сам кодит, не делегирует) |
| Layer 5 → 6 | Создаёт собственные инструменты | **Documented methodology** (framework, open-source, reproducible) |
| Layer 6 → 7 | Работает в regulated industry | **Applies AI under regulatory constraints** (audit trail, compliance, model risk) |

### 5.4 Временная согласованность источников

| Источник | Период сбора данных | Период публикации | Лаг | Data freshness на May 2026 |
|----------|--------------------|--------------------|-----|---------------------------|
| Gallup Q1 2026 | Feb 4-19, 2026 | Apr 13, 2026 | ~2 мес | ✅ Свежие (3 мес) |
| Microsoft WTI 2026 | Feb 18 — Apr 20, 2026 | May 5, 2026 | ~2 нед | ✅ Свежие (3 нед) |
| Stack Overflow 2025 | May-Jun 2025 | Dec 2025 | ~6 мес | ⚠️ Данные 12-мес давности |
| McKinsey State of AI 2025 | 2025 (exact dates N/A) | Nov 5, 2025 | N/A | ⚠️ Данные 6-12 мес давности |
| Bloomberg Cursor | Company statement Mar 2026 | Mar 19, 2026 | Immediate | ✅ Свежие (2 мес) |
| Anthropic Claude Code | Series G, Feb 2026 | Feb 2026 | Immediate | ✅ Свежие (3 мес) |

### 5.5 Перекрёстная валидация (3 независимых пути)

```
Путь 1 (Gallup → global):
  US daily 13% × 160M US KW = 21M → ×3-4x global = 63-84M
  → Совпадает с 80-130M (нижняя граница)

Путь 2 (Microsoft → Frontier):
  Frontier 16% × daily+frequent 80-130M = 13-21M
  → Совпадает с 16-25M

Путь 3 (Stack Overflow → coders):
  Pro devs 28-36M × 51% daily AI = 14-18M → agentic 20-30% = 3-5M
  → Совпадает с Layer 4

Конвергенция: Все три пути сходятся в пределах ±30% для Layers 2-4.
Layers 5-7: только один путь (каскадная экстраполяция), конвергенция невозможна.
```

### 5.6 Коррекции по результатам ревью

| Версия | Слой | Было | Стало | Источник коррекции |
|--------|------|------|-------|--------------------|
| v1.0 → v1.1 | Layer 4 | 2-3 млн | 3-5 млн | Grok: Cursor >1M DAU подтверждён, Claude Code rapid growth |
| v1.0 → v1.1 | Layer 2 | 400-600 млн | 350-450 млн | Qwen: geo coefficient conservative |
| v1.1 → v1.2 | Layer 6 CI | ±15K | 5K-120K (real 95% CI) | Audit: cascading error multiplication |
| v1.1 → v1.2 | All layers | — | Definition Alignment + Quality Gates добавлены | Audit: quality filters |
| v1.2 | Layer 3 | «16% от daily users» | «16% от AI users» (Microsoft definition) | Precision: WTI surveyed AI users, not daily users specifically |
| v1.2 → v1.3 | Layer 4 | 3-5M «central estimate» | 3-5M «likely conservative as of mid-2026» | DeepSeek: Cursor $2B ARR + Claude Code 2× WAU growth signal higher real figure |
| v1.2 → v1.3 | Methodology | — | Alternative funnel variant added (Section 5.7) | DeepSeek: start from «frequent» not «occasional» |
| v1.2 → v1.3 | Roadmap | — | Section 5.8 added (next steps) | DeepSeek: dynamic model + survey + regional anchors |
| v1.3 → v1.4 | Layer 5.2 | Qwen citation (medium confidence) | **PDF verified** (WTI 2026 p.~20, direct URL) | Grok: прямая ссылка на PDF отчёта. A3 → Resolved |
| v1.3 → v1.4 | New section | — | Layer 7b: Regional Cut KZ/Central Asia | Grok: экстраполяция по top-20 банкам ЦА |
| v1.3 → v1.4 | New section | — | Executive Summary (Section 0) | Grok + consolidation |
| v1.4 → v1.5 | Layer 2 | Single geo 0.7-0.8 | Tiered regional multipliers (US=1.0x, Dev=0.9-1.1x, EM=0.5-0.7x, Frontier=0.2-0.4x) | Gemini: Eurostat/OECD/APAC anchors. CI narrowed ~40% |
| v1.4 → v1.5 | Layer 6 CI | 5K-120K (Audit heuristic) | **7.1K-41.8K** (Monte Carlo 10K iterations) | Gemini: simulation replaces heuristic estimate |
| v1.4 → v1.5 | All layers | — | Monte Carlo 95% CI added to summary funnel | Gemini: source verification + MC simulation |
| v1.4 → v1.5 | Roadmap | R1, R4 = scope v2.0 | R1, R4 = ✅ Done | Gemini: regional anchors + Monte Carlo delivered |
| v1.4 → v1.5 | Update check | — | All anchors confirmed current through Q3 2026 | Gemini: no superseding publications for Layers 1-4 |
| v1.5 | Labels | «GPT» throughout | **«Gemini»** — corrected attribution | Author: misattribution fix |
| v1.5 | Layer 7b | Grok estimates only | + Закон РК «Об ИИ» (17.11.2025), 75% банков КЗ с ML, MBank КР, Data Center Valley | DeepSeek deep research: regulatory + market primary data |
| v1.5 | Layer 7b | Data confidence: Low | + **High** для regulatory context (первичное законодательство) | DeepSeek: Закон РК verified |
| v1.5 → v1.6 | Layer 1 | ~1 млрд (single point) | **0.64-1.0 млрд** (ILO/UN range) | ChatGPT: ILO/UN brief, 19.6-30.4% global employment |
| v1.5 → v1.6 | Layer 4 dev base | 14-18M daily AI devs | **10.5-18.5M** (wider due to dev population spread) | ChatGPT: 20.8M-36.5M dev base × 51% |
| v1.5 → v1.6 | Layer 4 | Agentic filter 20-30% heuristic | **31.8%** (SO measured) | ChatGPT: SO 2025 agents section, exact figure |
| v1.5 → v1.6 | Layer 4.6-4.7 | Claude Code WAU as fact | Marked as **⚠️ third-party estimate** | ChatGPT: Anthropic does not publicly disclose exact WAU |
| v1.5 → v1.6 | Layer 1.3 | JetBrains 20.8M | + **~14% MAPE** model error noted | ChatGPT: JetBrains methodology disclosure |
| v1.5 → v1.6 | Layer 7b | — | + Oxford Insights KZ #58, НБРК 31% AI adoption, data localization (Morgan Lewis) | ChatGPT deep research |
| v1.5 → v1.6 | Layer 7b | Закон РК = confirmed | + **Caveat: verify via adilet.zan.kz** | ChatGPT: could not independently verify final enacted text |
| v1.5 → v1.6 | Framing | — | **Share-first, count-second** principle added to header | ChatGPT: strongest claims = survey shares, not absolute counts |
| v1.6 → v1.7 | Executive Summary | — | **Stratification thesis** + visibility distortion + vendor bias caveats | Grok Researcher: epistemic review |
| v1.6 → v1.7 | Section 5.2b | 3-level taxonomy | **5-level estimation taxonomy**: Observed → Derived → Synthetic → Scenario → Heuristic | Grok Researcher |
| v1.6 → v1.7 | Section 5.2c | — | **Systematic biases** table: vendor incentive contamination + visibility distortion analysis | Grok Researcher |
| v1.6 → v1.7 | Section 5.8b | — | **Deferred Concepts** roadmap: 5 items (Leverage Density, Friction Coefficients, AI Maturity Segmentation, Temporal Decay, Stratification formal) | Grok Researcher: scope v2.0+ |
| v1.7 → v1.8 | Section 3 | Gemini MC (unverified) | **Reproduced MC** (Python, seed=42, 10K iter, explicit assumptions) | Self-review: Gemini CI were optimistic; reproduced CI wider |
| v1.7 → v1.8 | Section 3a | — | **Sensitivity table** for Layer 3 denominator (80M-400M × 12-19%) | Self-review: 8x range from denominator choice alone |
| v1.7 → v1.8 | Layer 1.1b | ILO/UN as verified | + **caveat: direct URL not independently verified** | Self-review: citation-from-citation |
| v1.7 → v1.8 | Section 5.9 | «7/7 unanimous consensus» | + **caveat: 7 interpretations of shared sources ≠ 7 independent validations** | Self-review: circular validation |
| v1.7 → v1.8 | New file | — | **Publication Brief** created as separate deliverable | Self-review: research table too large for publication |
| v1.8 → v1.9 | Layer 1.1 / 1.1b | ILO/UN via ChatGPT (URL unverified) | **Re-anchored to primary sources**: ILOSTAT employment-by-occupation (ISCO-08 groups 1–3) + Gartner (>1B, ~32%), both with direct URLs | Self-review: replaced citation-from-citation with verifiable primaries |

### 5.7 Альтернативная воронка: от «frequent» вместо «occasional» (рекомендация DeepSeek)

DeepSeek указывает, что **Layer 2 на базе «occasional» (50%, ≥ few times/year) содержит слишком много шума**. Значительная часть этих пользователей — одноразовые эксперименты, не формирующие устойчивого поведения.

**Предложение:** Построить параллельную воронку от **«frequent» (28%, ≥ few times/week)** — это отсекает noise и даёт более чистый вход в Layer 3.

| Слой | Variant A (от occasional, текущая) | Variant B (от frequent, DeepSeek) |
|------|------------------------------------|-----------------------------------|
| Layer 2 base | 50% US → 350-450M global | 28% US → 196-224M global |
| Layer 2 daily | 13% US → 80-130M | 13% US → 80-130M (без изменений) |
| Layer 3 (Frontier 16%) | 16% × 350-450M = нерелевантно (16% от AI users, не от occasional) | 16% × 196-224M = тоже нерелевантно |
| **Правильный расчёт Layer 3** | **16% × base of WTI survey (AI users) → ~16-25M** | **Без изменений** |

**Вывод:** Выбор базы (occasional vs frequent) влияет на Layer 2, но **не на Layer 3+**, потому что Microsoft WTI 2026 определяет Frontier Professionals как 16% от своей собственной выборки AI users (n=20K), а не от Gallup base. Layer 3+ остаётся стабильным.

**Рекомендация для публикации:** Показывать обе варианта Layer 2 (occasional и frequent) как «широкую» и «узкую» версию воронки. Это усиливает прозрачность и позволяет читателю выбрать.

### 5.8 Roadmap доработок (консенсус ревьюеров)

| # | Действие | Источник рекомендации | Приоритет | Статус |
|---|----------|-----------------------|-----------|--------|
| R1 | Заменить коэффициент 0.7-0.8 на региональные якоря (Eurostat DESI, ITU, Statista country-level) | Qwen + DeepSeek + Audit + **Gemini** | High | ✅ Done (v1.5: tiered multipliers, Eurostat/OECD/APAC anchors) |
| R2 | Динамическая модель: связать каждый слой с growth function из исторических данных (Section 2), спроецировать на 12-18 мес | DeepSeek | Medium | 🔲 Scope v2.0 |
| R3 | Lightweight survey для Layers 5-7 (даже n=50-100 C-suite in regulated industries превратит expert estimates в primary data) | DeepSeek | High | 🔲 Scope v2.0 |
| R4 | Монте-Карло для каскадных CI (Layers 4-7) | Audit + **Gemini** | ~~Low~~ | ✅ Done (v1.5: Gemini 10K iterations, Layer 6 CI = 7.1K-41.8K) |
| R5 | Региональный cut: KZ/KG/UZ/Central Asia (NBKR, Halyk, Kaspi data) | Grok | Medium | ✅ Done (v1.4, Layer 7b) |
| R6 | Визуализация: Sankey diagram / pyramid с confidence bands | DeepSeek | High | 🔲 Next deliverable |

### 5.8b Deferred Concepts — Scope v2.0+ (Grok Researcher v1.7)

Концепции, которые усилят документ, но требуют отдельного research:

| # | Концепция | Описание | Почему отложено | Ожидаемый ROI |
|---|-----------|----------|-----------------|---------------|
| D1 | **Leverage Density Layer** | Отдельная ось (не слой): AI-assisted → AI-accelerated → AI-dependent → AI-orchestrated → AI-native operators. Usage intensity ≠ economic leverage. | Требует отдельной метрики economic displacement, нет ready-made survey data | 🔥 High — потенциально сильнее самой воронки как thesis |
| D2 | **Institutional Friction Coefficients** | Отдельные модификаторы: legal approval latency, data access fragmentation, security restrictions, procurement cycles, incentive conflicts, manager resistance, auditability requirements. Особенно для banking, telecom, public sector, healthcare | Требует отдельного research по каждому сектору | Medium-High |
| D3 | **7-stage AI Maturity Segmentation** | Awareness → Experimentation → Habitual use → Workflow embedding → Compound orchestration → Institutional integration → AI-native operator | Это отдельный фреймворк, не патч к текущей воронке. Может стать basis для теста/калькулятора | High |
| D4 | **Temporal Confidence Decay** | AI metrics degrade fast. 2024 цифры уже almost useless. Формальный freshness weighting + temporal confidence decay function | Механика сложная, требует historical backtest | Medium |
| D5 | **Stratification Thesis — formal** | AI amplifies already capable. Формализация через Gini-coefficient of AI productivity или аналог | Нет ready-made dataset. Потенциально Habr/LinkedIn article thesis | 🔥 High — strongest narrative angle |

### 5.9 Консенсус ревьюеров (7 моделей, 8 ревью-циклов)

**⚠️ Caveat:** 7 моделей ревьюировали **один и тот же корпус upstream sources** (Gallup, Microsoft, SO, McKinsey). Это 7 interpretations shared data, не 7 independent validations. Agreement on order of magnitude = high, but consensus ≠ independent confirmation.

| Вопрос | Grok | Qwen | Audit | DeepSeek (×2) | Gemini | ChatGPT | Grok Researcher | Консенсус |
|--------|------|------|-------|---------------|--------|---------|-----------------|-----------|
| Порядок величин устойчив? | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | **Единогласно (7/7)** |
| Каскадная погрешность? | — | — | ✅ | ✅ | ✅ | ✅ | ✅ | **Единогласно** |
| Layers 5-7 = expert/scenario? | ✅ | — | ✅ | ✅ | ✅ | ✅ | ✅ (→ 5 levels) | **Единогласно** |
| Vendor bias = risk? | — | — | — | — | — | — | ✅ (new) | **Принято** |
| Visibility distortion? | — | — | — | — | — | — | ✅ (new) | **Принято** |
| Stratification > equalization? | — | — | — | — | — | — | ✅ (new) | **Принято** |
| Usage ≠ economic leverage? | — | — | — | — | — | — | ✅ (new) | **Deferred (D1)** |
| Share-first framing? | — | — | — | — | — | ✅ | ✅ | **Подтверждено** |

---

*Disclaimer (v1.8): Monte Carlo reproduced in-house (Python, seed=42, 10K iterations — code: monte_carlo_funnel.py). CI wider than Gemini's unverified estimates. Layer 3 denominator sensitivity: 8x range depending on AI user base definition (see 3a). ILO/UN source for Layer 1 = citation-from-citation, direct URL not verified. 7 AI models agreed on order of magnitude from shared upstream sources — this is consensus, not independent confirmation. Top funnel likely overstated 10-25% (vendor bias + visibility distortion). Publication Brief available as separate deliverable.*

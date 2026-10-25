import { useState, useEffect } from "react";

const translations = {
  en: {
    title: "AI Power User Index",
    subtitle: "Find your cohort & percentile among 1B knowledge workers",
    start: "Start Assessment",
    next: "Next",
    back: "Back",
    seeResults: "See Results",
    restart: "Retake",
    yourScore: "Your Score",
    percentile: "Percentile",
    cohort: "Your Cohort",
    methodology: "Methodology",
    methodText: "Cascading filter model based on Gallup Workforce AI (n=23.7K), Microsoft WTI 2026 (n=20K), McKinsey State of AI (n=1.5K), Anthropic disclosed WAU, Stack Overflow Dev Survey (n=49K). Each layer narrows by intersection of independent published metrics. Lower layers extrapolated via BLS C-level share (~2-3%) and builder-vs-user ratio (~5-10%, SO). Margin ±3-5x on bottom layers, order of magnitude stable.",
    questionLabel: "Question",
    of: "of",
    funnelTitle: "The AI Power User Funnel",
    you: "← You are here",
    shareText: "Share result",
    copied: "Copied!",
    copyFail: "Clipboard unavailable — copy manually",
    langSwitch: "RU",
    questions: [
      {
        q: "How often do you use AI tools?",
        opts: ["Rarely / never", "A few times a week", "Daily", "Multiple times daily, it's my OS"]
      },
      {
        q: "What do you primarily use AI for?",
        opts: ["Search & chat", "Content & writing", "Code generation", "Architecture, agents, product building"]
      },
      {
        q: "Your AI coding depth?",
        opts: ["I don't code with AI", "Autocomplete / Copilot suggestions", "Full code generation (Cursor, Claude)", "Agentic coding — Claude Code, multi-file, CI/CD"]
      },
      {
        q: "Your seniority level?",
        opts: ["Individual contributor", "Team lead / manager", "Director / VP", "C-level / founder"]
      },
      {
        q: "Do you build your own AI tools or frameworks?",
        opts: ["No, I use what's available", "Custom prompts & templates", "Scripts, automations, internal tools", "Own frameworks, products, or methodologies"]
      },
      {
        q: "How regulated is your industry?",
        opts: ["Unregulated / creative", "Lightly regulated", "Moderately regulated (finance, health)", "Heavily regulated + I apply AI there"]
      },
      {
        q: "How do you orchestrate AI in your workflow?",
        opts: ["One tool, one task", "Multiple AI tools for different tasks", "Multi-model pipelines, MCP, integrations", "Custom agent orchestration, own infra"]
      },
      {
        q: "Your AI methodology?",
        opts: ["Ad-hoc, no system", "Saved prompts & templates", "Systematic workflow with docs", "Own documented methodology (like GRACE, DSPy, etc.)"]
      },
      {
        q: "AI in strategic decisions?",
        opts: ["Not really", "Personal productivity", "Team-level strategy & analysis", "Board presentations, C-level decisions, investor materials"]
      },
      {
        q: "Hours per week AI saves you?",
        opts: ["0–2 hours", "3–5 hours", "6–10 hours", "10+ hours"]
      }
    ]
  },
  ru: {
    title: "AI Power User Index",
    subtitle: "Найди свою когорту и персентиль среди 1 млрд knowledge workers",
    start: "Начать тест",
    next: "Далее",
    back: "Назад",
    seeResults: "Результаты",
    restart: "Пройти заново",
    yourScore: "Ваш балл",
    percentile: "Персентиль",
    cohort: "Ваша когорта",
    methodology: "Методика",
    methodText: "Каскадная модель фильтрации по пересечению независимых метрик: Gallup Workforce AI (n=23.7K), Microsoft WTI 2026 (n=20K), McKinsey State of AI (n=1.5K), Anthropic WAU, Stack Overflow Dev Survey (n=49K). Нижние слои — экстраполяция через долю C-level (~2-3%, BLS) и долю builders vs users (~5-10%, SO). Погрешность нижних слоёв ±3-5x, порядок устойчивый.",
    questionLabel: "Вопрос",
    of: "из",
    funnelTitle: "Воронка AI Power Users",
    you: "← Вы здесь",
    shareText: "Поделиться",
    copied: "Скопировано!",
    copyFail: "Буфер недоступен — скопируйте вручную",
    langSwitch: "EN",
    questions: [
      {
        q: "Как часто вы используете AI-инструменты?",
        opts: ["Редко / никогда", "Несколько раз в неделю", "Каждый день", "Много раз в день — это моя ОС"]
      },
      {
        q: "Для чего в основном используете AI?",
        opts: ["Поиск и чат", "Контент и тексты", "Генерация кода", "Архитектура, агенты, создание продуктов"]
      },
      {
        q: "Глубина AI-кодинга?",
        opts: ["Не кодирую с AI", "Автокомплит / подсказки Copilot", "Полная генерация кода (Cursor, Claude)", "Агентный кодинг — Claude Code, мульти-файл, CI/CD"]
      },
      {
        q: "Ваш уровень в организации?",
        opts: ["Индивидуальный специалист", "Тимлид / менеджер", "Директор / VP", "C-level / основатель"]
      },
      {
        q: "Строите ли свои AI-инструменты или фреймворки?",
        opts: ["Нет, использую готовое", "Кастомные промпты и шаблоны", "Скрипты, автоматизации, внутренние тулы", "Собственные фреймворки, продукты, методологии"]
      },
      {
        q: "Насколько регулируется ваша отрасль?",
        opts: ["Нерегулируемая / креативная", "Слабо регулируемая", "Средне (финансы, медицина)", "Сильно регулируемая + я применяю там AI"]
      },
      {
        q: "Как оркестрируете AI в своём workflow?",
        opts: ["Один инструмент, одна задача", "Разные AI-тулы под разные задачи", "Мульти-модельные пайплайны, MCP, интеграции", "Собственная оркестрация агентов, своя инфра"]
      },
      {
        q: "Ваша AI-методология?",
        opts: ["Ad-hoc, без системы", "Сохранённые промпты и шаблоны", "Системный воркфлоу с документацией", "Своя задокументированная методология (GRACE, DSPy и т.п.)"]
      },
      {
        q: "AI в стратегических решениях?",
        opts: ["Почти нет", "Личная продуктивность", "Стратегия и аналитика на уровне команды", "Презентации для борда, C-level решения, материалы для инвесторов"]
      },
      {
        q: "Сколько часов в неделю экономит AI?",
        opts: ["0–2 часа", "3–5 часов", "6–10 часов", "10+ часов"]
      }
    ]
  }
};

const cohorts = {
  en: [
    { name: "Casual User", range: [0, 7], population: "1B", percentileBase: 50, color: "#64748b", desc: "You use AI occasionally. You're in the majority — and the opportunity ahead is massive." },
    { name: "Regular User", range: [8, 13], population: "100M", percentileBase: 80, color: "#6366f1", desc: "Daily AI user. You're ahead of 80% of knowledge workers globally." },
    { name: "Power User", range: [14, 19], population: "27.6M", percentileBase: 93, color: "#8b5cf6", desc: "Frontier Professional territory. You reshape workflows, not just use tools." },
    { name: "AI Builder", range: [20, 26], population: "486K", percentileBase: 98.5, color: "#d946ef", desc: "You build with AI, not just use it. Custom tools, pipelines, products." },
    { name: "AI-Native Executive", range: [27, 30], population: "~35K", percentileBase: 99.9, color: "#f43f5e", desc: "You operate AI at C-level in a regulated industry while building your own frameworks and products. You are the edge case." }
  ],
  ru: [
    { name: "Казуальный пользователь", range: [0, 7], population: "1 млрд", percentileBase: 50, color: "#64748b", desc: "Вы используете AI эпизодически. Вы в большинстве — и перед вами огромные возможности." },
    { name: "Регулярный пользователь", range: [8, 13], population: "100 млн", percentileBase: 80, color: "#6366f1", desc: "Ежедневный AI-юзер. Вы впереди 80% knowledge workers в мире." },
    { name: "Power User", range: [14, 19], population: "27.6 млн", percentileBase: 93, color: "#8b5cf6", desc: "Территория Frontier Professional. Вы перестраиваете воркфлоу, а не просто используете инструменты." },
    { name: "AI Builder", range: [20, 26], population: "486K", percentileBase: 98.5, color: "#d946ef", desc: "Вы строите на AI, а не просто используете. Свои тулы, пайплайны, продукты." },
    { name: "AI-Native Executive", range: [27, 30], population: "~35K", percentileBase: 99.9, color: "#f43f5e", desc: "Вы применяете AI на уровне C-level в регулируемой отрасли, параллельно создавая собственные фреймворки и продукты. Вы — edge case." }
  ]
};

const funnelData = {
  en: [
    { label: "Knowledge workers", count: "1B", width: 100 },
    { label: "Daily GenAI users", count: "100M", width: 72 },
    { label: "Frontier Professionals", count: "27.6M", width: 48 },
    { label: "AI coders (daily)", count: "4.6M", width: 30 },
    { label: "C-level AI builders", count: "486K", width: 18 },
    { label: "Framework creators", count: "35K", width: 10 },
    { label: "Regulated + all above", count: "~hundreds", width: 5 }
  ],
  ru: [
    { label: "Knowledge workers", count: "1 млрд", width: 100 },
    { label: "Ежедневные GenAI", count: "100 млн", width: 72 },
    { label: "Frontier Professionals", count: "27.6 млн", width: 48 },
    { label: "AI-кодеры (daily)", count: "4.6 млн", width: 30 },
    { label: "C-level AI builders", count: "486K", width: 18 },
    { label: "Создатели фреймворков", count: "35K", width: 10 },
    { label: "Регулируемые + всё выше", count: "~сотни", width: 5 }
  ]
};

// Funnel row (index into funnelData) highlighted for each cohort. The cohort
// ranges above plus this row mapping are the single boundary table both the
// cohort and the funnel highlight derive from, so they cannot disagree.
const cohortFunnelRow = [0, 1, 2, 4, 6];

function getCohortIndex(score, lang) {
  const c = cohorts[lang];
  for (let i = c.length - 1; i >= 0; i--) {
    if (score >= c[i].range[0] && score <= c[i].range[1]) return i;
  }
  return 0;
}

function getCohort(score, lang) {
  const c = cohorts[lang];
  const i = getCohortIndex(score, lang);
  const rangeSize = c[i].range[1] - c[i].range[0];
  const posInRange = Math.min(Math.max(score - c[i].range[0], 0), rangeSize);
  const nextBase = i < c.length - 1 ? c[i + 1].percentileBase : 99.99;
  const pct = c[i].percentileBase + (posInRange / rangeSize) * (nextBase - c[i].percentileBase);
  return { ...c[i], percentile: Math.min(99.99, pct) };
}

function getFunnelIndex(score, lang) {
  return cohortFunnelRow[getCohortIndex(score, lang)];
}

export default function AICohortTest() {
  const [lang, setLang] = useState("ru");
  const [phase, setPhase] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showMethod, setShowMethod] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [animIn, setAnimIn] = useState(true);

  const t = translations[lang];
  const totalQ = t.questions.length;

  useEffect(() => {
    setAnimIn(true);
  }, [current, phase]);

  const transition = (fn) => {
    setAnimIn(false);
    setTimeout(() => { fn(); setAnimIn(true); }, 200);
  };

  const selectAnswer = (idx) => {
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
  };

  const score = answers.reduce((s, a) => s + (a || 0), 0);

  const goNext = () => {
    if (current < totalQ - 1) transition(() => setCurrent(current + 1));
    else transition(() => setPhase("result"));
  };

  const goBack = () => {
    if (current > 0) transition(() => setCurrent(current - 1));
  };

  const restart = () => {
    transition(() => { setPhase("intro"); setCurrent(0); setAnswers([]); });
  };

  const result = getCohort(score, lang);
  const funnelIdx = getFunnelIndex(score, lang);
  const funnel = funnelData[lang];

  const share = () => {
    const text = lang === "ru"
      ? `AI Power User Index: ${result.name}, персентиль ${result.percentile.toFixed(1)}%, балл ${score}/30`
      : `AI Power User Index: ${result.name}, percentile ${result.percentile.toFixed(1)}%, score ${score}/30`;
    const succeed = () => {
      setCopyError(false);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    const fail = () => {
      setCopied(false);
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(succeed).catch(fail);
    } else {
      fail();
    }
  };

  const bg = "linear-gradient(145deg, #0a0a0f 0%, #0f0f1a 50%, #0a0a0f 100%)";

  // intro
  if (phase === "intro") {
    return (
      <div style={{ minHeight: "100vh", background: bg, color: "#e2e8f0", fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", position: "relative" }}>
        <button onClick={() => setLang(lang === "ru" ? "en" : "ru")} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#94a3b8", borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>
          {t.langSwitch}
        </button>
        <div style={{ opacity: animIn ? 1 : 0, transition: "opacity 0.3s", textAlign: "center", maxWidth: 520 }}>
          <div style={{ fontSize: 11, letterSpacing: 6, textTransform: "uppercase", color: "#6366f1", marginBottom: 20 }}>assessment</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 12px", background: "linear-gradient(135deg, #e2e8f0 0%, #6366f1 50%, #d946ef 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2 }}>
            {t.title}
          </h1>
          <p style={{ color: "#94a3b8", fontSize: 14, margin: "0 0 40px", lineHeight: 1.6 }}>{t.subtitle}</p>
          <button onClick={() => transition(() => setPhase("quiz"))} style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", border: "none", borderRadius: 8, padding: "14px 40px", fontSize: 15, fontFamily: "inherit", cursor: "pointer", fontWeight: 600, transition: "transform 0.15s", boxShadow: "0 0 30px rgba(99,102,241,0.3)" }} onMouseEnter={e => e.target.style.transform = "scale(1.04)"} onMouseLeave={e => e.target.style.transform = "scale(1)"}>
            {t.start}
          </button>
          <div style={{ marginTop: 48, fontSize: 11, color: "#475569", lineHeight: 1.7 }}>
            10 {lang === "ru" ? "вопросов" : "questions"} · 2 min · {lang === "ru" ? "источники" : "sources"}: Gallup, Microsoft WTI, McKinsey, Anthropic
          </div>
        </div>
      </div>
    );
  }

  // quiz
  if (phase === "quiz") {
    const q = t.questions[current];
    const progress = ((current + 1) / totalQ) * 100;
    return (
      <div style={{ minHeight: "100vh", background: bg, color: "#e2e8f0", fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace", display: "flex", flexDirection: "column", padding: "24px", position: "relative" }}>
        <button onClick={() => setLang(lang === "ru" ? "en" : "ru")} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#94a3b8", borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>
          {t.langSwitch}
        </button>

        {/* progress */}
        <div style={{ maxWidth: 560, width: "100%", margin: "0 auto 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#64748b", marginBottom: 8 }}>
            <span>{t.questionLabel} {current + 1} {t.of} {totalQ}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #6366f1, #d946ef)", borderRadius: 2, transition: "width 0.4s ease" }} />
          </div>
        </div>

        {/* question */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 560, width: "100%", margin: "0 auto", opacity: animIn ? 1 : 0, transform: animIn ? "translateY(0)" : "translateY(12px)", transition: "all 0.25s ease" }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 28px", lineHeight: 1.4, color: "#f1f5f9" }}>{q.q}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {q.opts.map((opt, i) => {
              const selected = answers[current] === i;
              return (
                <button key={i} onClick={() => selectAnswer(i)} style={{ textAlign: "left", padding: "14px 18px", background: selected ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.03)", border: selected ? "1px solid rgba(99,102,241,0.5)" : "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: selected ? "#c7d2fe" : "#94a3b8", fontSize: 13, fontFamily: "inherit", cursor: "pointer", transition: "all 0.15s", lineHeight: 1.5 }}>
                  <span style={{ color: selected ? "#6366f1" : "#475569", marginRight: 10, fontWeight: 700, fontSize: 11 }}>{String.fromCharCode(65 + i)}</span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* nav */}
        <div style={{ maxWidth: 560, width: "100%", margin: "32px auto 0", display: "flex", justifyContent: "space-between" }}>
          <button onClick={goBack} disabled={current === 0} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: current === 0 ? "#334155" : "#94a3b8", borderRadius: 8, padding: "10px 24px", fontSize: 13, fontFamily: "inherit", cursor: current === 0 ? "default" : "pointer" }}>
            {t.back}
          </button>
          <button onClick={goNext} disabled={answers[current] === undefined} style={{ background: answers[current] !== undefined ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "rgba(255,255,255,0.05)", color: answers[current] !== undefined ? "#fff" : "#475569", border: "none", borderRadius: 8, padding: "10px 28px", fontSize: 13, fontFamily: "inherit", cursor: answers[current] !== undefined ? "pointer" : "default", fontWeight: 600 }}>
            {current === totalQ - 1 ? t.seeResults : t.next}
          </button>
        </div>
      </div>
    );
  }

  // result
  return (
    <div style={{ minHeight: "100vh", background: bg, color: "#e2e8f0", fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace", padding: "24px", position: "relative" }}>
      <button onClick={() => setLang(lang === "ru" ? "en" : "ru")} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#94a3b8", borderRadius: 6, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>
        {t.langSwitch}
      </button>

      <div style={{ maxWidth: 560, margin: "0 auto", opacity: animIn ? 1 : 0, transition: "opacity 0.4s" }}>
        {/* score header */}
        <div style={{ textAlign: "center", marginBottom: 36, paddingTop: 20 }}>
          <div style={{ fontSize: 11, letterSpacing: 6, textTransform: "uppercase", color: result.color, marginBottom: 16 }}>{t.cohort}</div>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 6px", color: result.color }}>{result.name}</h1>
          <p style={{ color: "#94a3b8", fontSize: 13, margin: "12px 0 24px", lineHeight: 1.6, maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}>{result.desc}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#f1f5f9" }}>{score}<span style={{ fontSize: 16, color: "#64748b" }}>/30</span></div>
              <div style={{ fontSize: 10, color: "#64748b", marginTop: 2, textTransform: "uppercase", letterSpacing: 2 }}>{t.yourScore}</div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, color: result.color }}>{result.percentile.toFixed(1)}%</div>
              <div style={{ fontSize: 10, color: "#64748b", marginTop: 2, textTransform: "uppercase", letterSpacing: 2 }}>{t.percentile}</div>
            </div>
          </div>
        </div>

        {/* funnel */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#64748b", marginBottom: 16 }}>{t.funnelTitle}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {funnel.map((f, i) => {
              const isHere = i === funnelIdx;
              const colors = ["#64748b", "#6366f1", "#7c3aed", "#8b5cf6", "#a855f7", "#d946ef", "#f43f5e"];
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: `${f.width}%`, minWidth: 28, background: isHere ? `${colors[i]}33` : "rgba(255,255,255,0.04)", border: isHere ? `1px solid ${colors[i]}88` : "1px solid transparent", borderRadius: 4, padding: "7px 12px", fontSize: 11, color: isHere ? "#f1f5f9" : "#64748b", display: "flex", justifyContent: "space-between", transition: "all 0.3s" }}>
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.label}</span>
                    <span style={{ fontWeight: 600, flexShrink: 0, marginLeft: 8 }}>{f.count}</span>
                  </div>
                  {isHere && <span style={{ fontSize: 11, color: colors[i], whiteSpace: "nowrap", fontWeight: 600 }}>{t.you}</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* actions */}
        <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
          <button onClick={restart} style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", borderRadius: 8, padding: "10px", fontSize: 13, fontFamily: "inherit", cursor: "pointer" }}>
            {t.restart}
          </button>
          <button onClick={share} style={{ flex: 1, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", border: "none", borderRadius: 8, padding: "10px", fontSize: 13, fontFamily: "inherit", cursor: "pointer", fontWeight: 600 }}>
            {copied ? t.copied : copyError ? t.copyFail : t.shareText}
          </button>
        </div>

        {/* methodology */}
        <button onClick={() => setShowMethod(!showMethod)} style={{ width: "100%", background: "transparent", border: "none", color: "#475569", fontSize: 11, fontFamily: "inherit", cursor: "pointer", padding: "8px 0", textAlign: "left", letterSpacing: 1, textTransform: "uppercase" }}>
          {showMethod ? "▾" : "▸"} {t.methodology}
        </button>
        {showMethod && (
          <div style={{ fontSize: 11, color: "#475569", lineHeight: 1.7, padding: "8px 0 16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            {t.methodText}
          </div>
        )}
      </div>
    </div>
  );
}

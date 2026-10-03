import type { Lang } from "../i18n/dict";

export interface AboutContent {
  statement: { line1: string; line2: string };
  intro: string[];
  currentlyLabel: string;
  currently: { group: string; items: { name: string; note: string }[] }[];
  journeyLabel: string;
  journey: { year: string; title: string; text: string }[];
  approachLabel: string;
  approach: { title: string; text: string }[];
  stackLabel: string;
  stack: { area: string; techs: string }[];
  metricsLabel: string;
  metrics: { value: string; label: string }[];
  workLabel: string;
  work: string[];
  philosophyLabel: string;
  philosophy: { title: string; text: string }[];
  ctaTelegram: { label: string; title: string; text: string; link: string };
  ctaGithub: { label: string; title: string; text: string; link: string };
}

export const about: Record<Lang, AboutContent> = {
  en: {
    statement: {
      line1: "Most developers write code.",
      line2: "I build systems.",
    },
    intro: [
      "I'm a full-stack developer passionate about crafting flawless products that solve real problems. Learning and understanding something new — that's what drives me. Growth isn't optional, it's everything.",
      "My name is Evgeny, alias Ap3x0. I'm 19, a full-stack developer with ~4 years in production. Full cycle: idea → design system → front/back → payments → deploy → security audit.",
      "I'm genuinely passionate about technology — from infrastructure and backend systems to sleek, thoughtful design. I love the scale of it all, the complexity, the possibility of creating something that impacts real people. Automating away the mundane and building systems that just work — that's beauty.",
      "I love the whole journey from idea to production: watching a concept become a real, breathing product — design coming to life, backend handling real traffic, security and infrastructure in harmony. It's not just about the work; it's about witnessing the vision become reality.",
      "I enjoy leading and working alongside talented people. Great teams elevate everything — code quality, morale, the final product. What matters most is being surrounded by people who genuinely care — about the craft, about technology itself.",
      "Always learning. Always shipping. Always grinding.",
      "💬 Languages: Русский (Native) · English (Fluent) · Tech stack speaks for itself",
    ],
    currentlyLabel: "CURRENTLY WORKING ON",
    currently: [
      {
        group: "Production",
        items: [
          {
            name: "ASCEND.HUB",
            note: "Competitive matchmaking platform (GTA 5 RP) — the SkinHub, with partner",
          },
          {
            name: "Xrayebator",
            note: "Actively maintained — weekly and daily updates, real users in production",
          },
          { name: "TrumpVPN", note: "VPN sales service + admin panel, in operation" },
          { name: "Bio Platform", note: "Bio-link hub with own monetization stack" },
        ],
      },
      {
        group: "In Development",
        items: [
          {
            name: "TGTWITCHAPP",
            note: "Twitch activity marketplace — MVP ready, backend in progress",
          },
          {
            name: "Xrayebator",
            note: "Constantly evolving — new features and releases rolling out",
          },
        ],
      },
      {
        group: "Open Source",
        items: [
          { name: "nekocli / NekoFree", note: "Local-first fork of an agent CLI, 98+ commits, MIT" },
          {
            name: "Xrayebator",
            note: "117 stars, #1 contributor above the author — flagship after ASCEND.HUB; in production and still in development",
          },
          { name: "Open Design", note: "Contributor — accepted commits upstream" },
          { name: "Ripple-Voice", note: "Offline dictation for Windows, MIT, public releases" },
        ],
      },
      {
        group: "Own Infrastructure",
        items: [
          { name: "OmniRoute Gateway", note: "One endpoint for all local models" },
          { name: "DSH + engram", note: "Agent harness with hooks and a memory palace" },
        ],
      },
    ],
    journeyLabel: "JOURNEY: FROM FIRST SCRIPTS TO SHIPPED PRODUCTS",
    journey: [
      {
        year: "2020",
        title: "First Code",
        text: "The very first code — scripts and the start of the path. Curiosity about how things work under the hood never left.",
      },
      {
        year: "2021–2023",
        title: "Math School",
        text: "Math school at VMK MSU: two years of console development, algorithms, matrix math. Reverse-engineering spirit — and a C# piano among the first builds.",
      },
      {
        year: "2024",
        title: "School 21 & University",
        text: "School 21 by Sber: own projects (kept off GitHub), grants for participation and completion. Same year — ЕГЭ and admission to Plekhanov University (REU), Information Security.",
      },
      {
        year: "2025",
        title: "First Products in Production",
        text: "TrumpVPN and Bio Platform go live. Release deploys, migrations, monetization flows — services that survive real users.",
      },
      {
        year: "2026",
        title: "Programming, Learning & Automation",
        text: "Paired and solo coding with agents: own DSH harness with hooks and memory, personal OmniRoute gateway, own skills plus server and deployment automation. Development becomes part of free time — building Xrayebator and ASCEND.HUB, pushing to Open Design, and continuing work on TrumpVPN.",
      },
      {
        year: "2026",
        title: "Flagships",
        text: "Xrayebator — one of the main projects after ASCEND.HUB: 117 stars, #1 contributor above the author; still in development, already in production. A contributor to Open Design.",
      },
    ],
    approachLabel: "APPROACH: NOT AN EXECUTOR, A PARTNER",
    approach: [
      {
        title: "1. Identify the real task",
        text: "Often the client doesn't need a marketplace in six months — they need a landing page in a week to test a hypothesis.",
      },
      {
        title: "2. Suggest the optimal path",
        text: "My job is to save the business money and time, not to rack up development hours.",
      },
      {
        title: "3. Own the outcome",
        text: "Meetings, architecture, the final result — all on me. No hiding behind anyone, no pushing the problem further: I make the call, I live with it.",
      },
      {
        title: "4. Think like a product owner",
        text: "Sometimes the best developer advice is: \"don't do this now\".",
      },
    ],
    stackLabel: "STACK",
    stack: [
      { area: "Languages", techs: "TypeScript, JavaScript, Python, C++, C#, SQL" },
      {
        area: "Frontend",
        techs: "React 19, Next.js 16, Vite, Tailwind CSS 4, Framer Motion, shadcn/Radix, TanStack Query, zustand",
      },
      {
        area: "Backend",
        techs: "Node (Fastify/Express), FastAPI, Prisma, PostgreSQL (+RLS), SQLite, Redis, Supabase, BullMQ, Socket.io",
      },
      {
        area: "Telegram",
        techs: "Mini Apps (Telegram Stars, WebApp SDK), Grammy, aiogram, initData auth",
      },
      {
        area: "Monetization",
        techs: "Telegram Stars, Robokassa, YooKassa, Cryptomus — subscriptions & pay-per-use",
      },
      {
        area: "Infra",
        techs: "Docker/compose, systemd, zero-downtime deploy (releases+symlink), Railway, Vercel, GitLab CI",
      },
      {
        area: "AI engineering",
        techs: "Claude Code forks, own skills/hooks, local models via own gateway, agent memory (engram), DSH harness",
      },
    ],
    metricsLabel: "METRICS",
    metrics: [
      { value: "4 yrs", label: "in production at 19" },
      { value: "60–80k", label: "lines across 3 flagships" },
      { value: "117★", label: "Xrayebator — #1 contributor" },
      { value: "4", label: "products in production" },
    ],
    workLabel: "HOW I WORK",
    work: [
      "Agent pairing as a discipline: a year of development with Kiro, nekofree/Claude Code, DSH — skills, hooks and memory between sessions.",
      "Evidence, not promises: \"verify it\" before \"done\", QA registries, self-written audits, checklists before push.",
      "Privacy by default: personal data stripped before publishing, telemetry in forks set to zero, local models instead of clouds.",
      "Formats: solo, in a pair with another developer (ASCEND.HUB, TrumpVPN are partner projects), and in a team.",
    ],
    philosophyLabel: "PHILOSOPHY",
    philosophy: [
      {
        title: "AI is a lever, not a crutch",
        text: "70% of routine code can be delegated to AI. Architecture, critical thinking and business context stay with humans.",
      },
      {
        title: "Quality is a trade-off",
        text: "Adaptability, performance and security come first. Everything else is negotiable against real goals and budgets.",
      },
    ],
    ctaTelegram: {
      label: "[ TELEGRAM ]",
      title: "Want to discuss a project?",
      text: "Write me on Telegram — let's find the optimal solution.",
      link: "https://t.me/Ap3x0",
    },
    ctaGithub: {
      label: "[ GITHUB ]",
      title: "Code, forks, open source",
      text: "Repositories, upstream contributions and experiments.",
      link: "https://github.com/Ap3x0s",
    },
  },
  ru: {
    statement: {
      line1: "Большинство пишет код.",
      line2: "Я строю системы.",
    },
    intro: [
      "Я full-stack разработчик, который создаёт безупречные продукты, решающие реальные задачи. Узнавать и понимать что-то новое — вот что меня двигает. Рост — не опция, а всё.",
      "Меня зовут Евгений, ник Ap3x0. Мне 19, full-stack разработчик, ~4 года в проде. Полный цикл: идея → дизайн-система → фронт/бэк → платежи → деплой → аудит безопасности.",
      "Я по-настоящему увлечён технологиями — от инфраструктуры и бэкенд-систем до лаконичного, продуманного дизайна. Люблю масштаб всего этого, сложность и возможность создавать то, что влияет на реальных людей. Автоматизация рутины и системы, которые просто работают, — в этом есть красота.",
      "Люблю весь путь от идеи до продакшна: как концепция превращается в живой продукт — оживает дизайн, бэкенд держит реальный трафик, безопасность и инфраструктура работают в гармонии. Дело не только в работе — а в том, как замысел становится реальностью.",
      "Мне нравится вести за собой и работать рядом с талантливыми людьми. Сильная команда поднимает всё: качество кода, настроение, финальный продукт. Главное — быть среди тех, кому не всё равно: до ремесла, до технологий.",
      "Всегда учусь. Всегда вывожу в прод. Всегда в деле.",
      "💬 Языки: Русский (Native) · English (Fluent) · Стек говорит сам за себя",
    ],
    currentlyLabel: "СЕЙЧАС РАБОТАЮ НАД",
    currently: [
      {
        group: "Продакшн",
        items: [
          {
            name: "ASCEND.HUB",
            note: "Киберспортивная платформа матчмейкинга (GTA 5 RP) — «скинхаб», с партнёром",
          },
          {
            name: "Xrayebator",
            note: "Еженедельные, а то и ежедневные обновления — работает, люди пользуются",
          },
          { name: "TrumpVPN", note: "Сервис продажи VPN + админ-панель, в эксплуатации" },
          { name: "Bio Platform", note: "Bio-link хаб со своей стекой монетизации" },
        ],
      },
      {
        group: "В разработке",
        items: [
          {
            name: "TGTWITCHAPP",
            note: "Маркетплейс Twitch-активности — MVP готов, бэкенд в процессе",
          },
          {
            name: "Xrayebator",
            note: "Постоянно в работе — новые фичи и релизы",
          },
        ],
      },
      {
        group: "Open Source",
        items: [
          { name: "nekocli / NekoFree", note: "Локально-фёрст форк агентского CLI, 98+ коммитов, MIT" },
          {
            name: "Xrayebator",
            note: "117 звёзд, #1 контрибьютор — выше автора; флагман после ASCEND.HUB, в проде и в разработке",
          },
          { name: "Open Design", note: "Контрибьютор — принятые коммиты в апстриме" },
          { name: "Ripple-Voice", note: "Офлайн-диктовка для Windows, MIT, публичные релизы" },
        ],
      },
      {
        group: "Своя инфраструктура",
        items: [
          { name: "OmniRoute Gateway", note: "Одна точка для всех локальных моделей" },
          { name: "DSH + engram", note: "Агентский харнес с хуками и дворцом памяти" },
        ],
      },
    ],
    journeyLabel: "ПУТЬ: ОТ ПЕРВЫХ СКРИПТОВ К ПРОДУКТАМ В ПРОДЕ",
    journey: [
      {
        year: "2020",
        title: "Первый код",
        text: "Самый первый код — скрипты и начало пути. Любопытство «как это устроено под капотом» не оставило меня с тех пор.",
      },
      {
        year: "2021–2023",
        title: "ВМШ",
        text: "Высшая математическая школа при ВМК МГУ: два года консольной разработки, алгоритмы, матричные вычисления. Дух реверс-инженерии — и C#-пианино среди первых построек.",
      },
      {
        year: "2024",
        title: "Школа 21 и поступление",
        text: "Школа 21 от Сбера: собственные проекты (вне GitHub), гранты за участие и прохождение. В том же году — ЕГЭ и поступление в РЭУ им. Г.В. Плеханова на информационную безопасность.",
      },
      {
        year: "2025",
        title: "Первые продукты в проде",
        text: "TrumpVPN и Bio Platform выходят в прод. Релиз-деплои, миграции, платёжные флоу — сервисы, которые переживают реальных пользователей.",
      },
      {
        year: "2026",
        title: "Программирование, изучение технологий и автоматизации",
        text: "Совместный и самостоятельный кодинг с агентами: свой харнес DSH с хуками и памятью, личный гейтвей OmniRoute, свои скиллы и автоматизации серверов и развёртки. Разработка становится частью свободного времени: создание Xrayebator и ASCEND.HUB, пуш в Open Design и продолжение работы над TrumpVPN.",
      },
      {
        year: "2026",
        title: "Флагманы",
        text: "Xrayebator — один из главных проектов после ASCEND.HUB: 117 звёзд, #1 контрибьютор — выше автора; всё ещё в разработке, но уже в продакшене. И контрибьютор Open Design.",
      },
    ],
    approachLabel: "ПОДХОД: НЕ ИСПОЛНИТЕЛЬ, А ПАРТНЁР",
    approach: [
      {
        title: "1. Увидеть настоящую задачу",
        text: "Часто клиенту нужен не маркетплейс через полгода, а лендинг за неделю для проверки гипотезы.",
      },
      {
        title: "2. Предложить оптимальный путь",
        text: "Моя задача — сэкономить бизнесу деньги и время, а не наполнять часами разработки.",
      },
      {
        title: "3. Ответственность без «это не я»",
        text: "Встречи, архитектура, итог — всё на мне. Не прячусь за другими и не перекидываю проблемы дальше: принял решение — живу с ним.",
      },
      {
        title: "4. Мыслить как продукт-овнер",
        text: "Иногда лучший совет разработчика: «сейчас этого не делайте».",
      },
    ],
    stackLabel: "СТЕК",
    stack: [
      { area: "Языки", techs: "TypeScript, JavaScript, Python, C++, C#, SQL" },
      {
        area: "Фронт",
        techs: "React 19, Next.js 16, Vite, Tailwind CSS 4, Framer Motion, shadcn/Radix, TanStack Query, zustand",
      },
      {
        area: "Бэк",
        techs: "Node (Fastify/Express), FastAPI, Prisma, PostgreSQL (+RLS), SQLite, Redis, Supabase, BullMQ, Socket.io",
      },
      {
        area: "Telegram",
        techs: "Mini Apps (Telegram Stars, WebApp SDK), Grammy, aiogram, initData-авторизация",
      },
      {
        area: "Монетизация",
        techs: "Telegram Stars, Robokassa, YooKassa, Cryptomus — подписки и pay-per-use",
      },
      {
        area: "Инфра",
        techs: "Docker/compose, systemd, zero-downtime deploy (releases+symlink), Railway, Vercel, GitLab CI",
      },
      {
        area: "AI-инженерия",
        techs: "Форки Claude Code, свои скиллы/хуки, локальные модели через свой гейтвей, агентская память (engram), DSH-харнес",
      },
    ],
    metricsLabel: "МЕТРИКИ",
    metrics: [
      { value: "4 года", label: "в проде в 19 лет" },
      { value: "60–80k", label: "строк в трёх флагманах" },
      { value: "117★", label: "Xrayebator — #1 контрибьютор" },
      { value: "4", label: "продукта в эксплуатации" },
    ],
    workLabel: "КАК Я РАБОТАЮ",
    work: [
      "Агент-пейринг как дисциплина: год разработки в связке с Kiro, nekofree/Claude Code, DSH — со скиллами, хуками и памятью между сессиями.",
      "Требую доказательств, а не обещаний: «проверь работу» перед «готово», QA-реестры, самописные аудиты, чек-листы перед push.",
      "Приватность по умолчанию: при публикации реп вырезаю личные данные; телеметрия в форках — на ноль; локальные модели вместо облаков.",
      "Форматы работы: один, в паре с другим разработчиком (ASCEND.HUB, TrumpVPN — партнёрские) и в группе разработчиков.",
    ],
    philosophyLabel: "ФИЛОСОФИЯ",
    philosophy: [
      {
        title: "AI — рычаг, а не костыль",
        text: "70% рутины можно делегировать ИИ. Архитектура, критическое мышление и понимание бизнес-контекста остаются с людьми.",
      },
      {
        title: "Качество — это компромисс",
        text: "Адаптивность, производительность и безопасность — главные приоритеты. Всё остальное торгуется под реальные цели и бюджеты.",
      },
    ],
    ctaTelegram: {
      label: "[ TELEGRAM ]",
      title: "Обсудить проект?",
      text: "Напиши мне в Telegram — найдём оптимальное решение.",
      link: "https://t.me/Ap3x0",
    },
    ctaGithub: {
      label: "[ GITHUB ]",
      title: "Код, форки, open source",
      text: "Репозитории, апстрим-контрибуции и эксперименты.",
      link: "https://github.com/Ap3x0s",
    },
  },
};

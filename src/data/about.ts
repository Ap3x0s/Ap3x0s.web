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
      "The task is never \"build a website\". It's testing a hypothesis, shipping an MVP, wiring payments, automating what eats the team's time. Code is just the tool.",
      "My name is Evgeny, alias Ap3x0. I'm 19, full-stack developer with ~4 years in production. I studied at the math school at VMK MSU (vector calculators, matrix math, algorithmic problems), then went full-cycle: idea → design system → front/back → payments → deploy → security audit.",
      "I'm local-first: self-host and offline wherever possible — own Docker, Gitea, local models, offline speech recognition.",
    ],
    currentlyLabel: "CURRENTLY WORKING ON",
    currently: [
      {
        group: "Production",
        items: [
          {
            name: "ASCEND.HUB",
            note: "Competitive matchmaking platform (GTA 5 RP), with partner",
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
        ],
      },
      {
        group: "Open Source",
        items: [
          { name: "nekocli / NekoFree", note: "Local-first fork of an agent CLI, 98+ commits, MIT" },
          { name: "Xrayebator", note: "152 commits merged upstream, 2nd contributor" },
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
    journeyLabel: "JOURNEY: FROM MATH SCHOOL TO PRODUCT THINKING",
    journey: [
      {
        year: "2021–2022",
        title: "First Code",
        text: "Math school at VMK MSU: vector calculators, matrix math, algorithmic problems. Reverse engineering spirit — and a C# piano among the first builds.",
      },
      {
        year: "2023",
        title: "Web Entry",
        text: "Full-stack from idea to production: Telegram Mini Apps, real payments, backend architecture — not just markup.",
      },
      {
        year: "2024",
        title: "Products in Production",
        text: "TrumpVPN and Bio Platform go live. Release deploys, migrations, monetization flows — services that survive real users.",
      },
      {
        year: "2025",
        title: "Agent-First",
        text: "Forked my own agent CLI, built OmniRoute, DSH with hooks and memory. Development becomes a pairing discipline with agents.",
      },
      {
        year: "2026",
        title: "Platform Scale",
        text: "ASCEND.HUB in production (RBAC/RLS, realtime), TGTWITCHAPP MVP, open-source upstream merges. ~60–80k lines across flagships.",
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
        title: "3. Take responsibility",
        text: "I'm at the meeting myself. I make architectural decisions myself. I'm responsible for the result.",
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
      { value: "15", label: "GitHub repositories" },
      { value: "2", label: "live production services" },
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
      "Задача никогда не «сделать сайт». Это проверка гипотезы, запуск MVP, подключение платежей, автоматизация того, что съедает время команды. Код — просто инструмент.",
      "Меня зовут Евгений, ник Ap3x0. Мне 19, full-stack разработчик, ~4 года в проде. Учился в матшколе при ВМК МГУ (векторные калькуляторы, матричные вычисления, алгоритмические задачи), затем — полный цикл: идея → дизайн-система → фронт/бэк → платежи → деплой → аудит безопасности.",
      "Локально-фёрст: где возможно — self-host и офлайн (свой Docker, Gitea, локальные модели, офлайн-распознавание речи).",
    ],
    currentlyLabel: "СЕЙЧАС РАБОТАЮ НАД",
    currently: [
      {
        group: "Продакшн",
        items: [
          {
            name: "ASCEND.HUB",
            note: "Киберспортивная платформа матчмейкинга (GTA 5 RP), с партнёром",
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
        ],
      },
      {
        group: "Open Source",
        items: [
          { name: "nekocli / NekoFree", note: "Локально-фёрст форк агентского CLI, 98+ коммитов, MIT" },
          { name: "Xrayebator", note: "152 коммита в апстриме, второй контрибьютор" },
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
    journeyLabel: "ПУТЬ: ОТ МАТШКОЛЫ К ПРОДУКТОВОМУ МЫШЛЕНИЮ",
    journey: [
      {
        year: "2021–2022",
        title: "Первый код",
        text: "Матшкола при ВМК МГУ: векторные калькуляторы, матричные вычисления, алгоритмы. Дух реверс-инженерии — и C#-пианино среди первых построек.",
      },
      {
        year: "2023",
        title: "Вход в веб",
        text: "Фуллстек «от идеи до продакшна»: Telegram Mini Apps, реальные платежи, архитектура бэкенда — не просто вёрстка.",
      },
      {
        year: "2024",
        title: "Продукты в проде",
        text: "TrumpVPN и Bio Platform выходят в прод. Релиз-деплои, миграции, платёжные флоу — сервисы, которые переживают реальных пользователей.",
      },
      {
        year: "2025",
        title: "Agent-first",
        text: "Свой форк агентского CLI, OmniRoute, DSH с хуками и памятью. Разработка становится дисциплиной пейринга с агентами.",
      },
      {
        year: "2026",
        title: "Масштаб платформ",
        text: "ASCEND.HUB в проде (RBAC/RLS, realtime), MVP TGTWITCHAPP, мержи в open-source апстримы. ~60–80k строк в трёх флагманах.",
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
        title: "3. Взять ответственность",
        text: "На митинге — сам. Архитектурные решения — сам. Отвечаю за результат.",
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
      { value: "15", label: "репозиториев на GitHub" },
      { value: "2", label: "прод-сервиса в эксплуатации" },
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

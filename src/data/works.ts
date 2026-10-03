export interface Work {
  slug: string;
  status: "production" | "mvp" | "oss" | "wip";
  tags: string[];
  repo?: string;
  title: { en: string; ru: string };
  subtitle: { en: string; ru: string };
  problem: { en: string; ru: string };
  solution: { en: string; ru: string };
  achievement: { en: string; ru: string };
  stack: string[];
}

export const works: Work[] = [
  {
    slug: "tgtwitchapp",
    status: "mvp",
    tags: ["Telegram", "Payments", "Highload"],
    title: { en: "TGTWITCHAPP", ru: "TGTWITCHAPP" },
    subtitle: {
      en: "Smart Twitch Bots — Telegram Mini App",
      ru: "Smart Twitch Bots — Telegram Mini App",
    },
    problem: {
      en: "Sell Twitch activity (viewers/chat) with real money inside Telegram without losing orders on crashes.",
      ru: "Продажа Twitch-активности (зрители/чат) за реальные деньги внутри Telegram без потери заказов при сбоях.",
    },
    solution: {
      en: "Monorepo: Vite+React (12 screens, ~48 shadcn components), Fastify (12 modules, ~49 endpoints), Grammy bot, PostgreSQL/Prisma (18 models, 10-stage order status), 4 BullMQ queues, Socket.io live stats. Idempotent payment webhooks with timingSafeEqual.",
      ru: "Монорепо: Vite+React (12 экранов, ~48 shadcn-компонентов), Fastify (12 модулей, ~49 эндпоинтов), Grammy-бот, PostgreSQL/Prisma (18 моделей, 10-стадийный ордер-статус), 4 BullMQ-очереди, Socket.io live-статистика. Идемпотентные платёжные вебхуки с timingSafeEqual.",
    },
    achievement: {
      en: "40+ endpoints, own CSO/qa audit passed (SQLi, SSRF, JWT leaks, auth bypass), release 2.99 with race-condition fixes (advisory locks).",
      ru: "40+ эндпоинтов, пройден собственный CSO/qa-аудит (SQLi, SSRF, JWT-утечки, auth bypass), релиз 2.99 с фиксами race-condition (advisory locks).",
    },
    stack: ["React", "Fastify", "PostgreSQL", "Prisma", "BullMQ", "Telegram Stars"],
  },
  {
    slug: "ascend-hub",
    status: "production",
    tags: ["Next.js", "Realtime", "RBAC"],
    title: { en: "ASCEND.HUB", ru: "ASCEND.HUB" },
    subtitle: {
      en: "Competitive matchmaking platform",
      ru: "Киберспортивная платформа матчмейкинга",
    },
    problem: {
      en: "GTA RP community needs \"FACEIT for RP\": duels, ranked matches, tournaments with prize pools, fair moderation.",
      ru: "GTA RP-сообществу нужен «FACEIT для RP»: дуэли, рейтинговые матчи, турниры с призовыми, честная модерация.",
    },
    solution: {
      en: "Next.js 16 App Router + React 19 + Framer Motion, Prisma 6 + PostgreSQL, Redis, custom Socket.IO realtime server (redis-adapter), admin panel with 5 sections, RBAC on 5 roles with server guards + RLS (\"double lock\"), Turnstile, CSP/HSTS, audit logs.",
      ru: "Next.js 16 App Router + React 19 + Framer Motion, Prisma 6 + PostgreSQL, Redis, кастомный Socket.IO realtime-сервер (redis-adapter), админка на 5 секций, RBAC на 5 ролей с серверными guards + RLS («двойной замок»), Turnstile, CSP/HSTS, аудит-логи.",
    },
    achievement: {
      en: "Production-ready with partner: 23k+ lines, 5 design iterations, WCAG 2.1 AA, i18n en/ru, Docker standalone.",
      ru: "Production-ready с партнёром: 23k+ строк, 5 дизайн-итераций, WCAG 2.1 AA, i18n en/ru, Docker standalone.",
    },
    stack: ["Next.js", "React 19", "Socket.IO", "Redis", "PostgreSQL", "RBAC"],
  },
  {
    slug: "ripple-voice",
    status: "production",
    tags: ["Python", "Whisper", "Desktop"],
    title: { en: "Ripple-Voice", ru: "Ripple-Voice" },
    subtitle: {
      en: "Offline dictation for Windows",
      ru: "Офлайн-диктовка для Windows",
    },
    problem: {
      en: "Win+H is cloud-only, slow and dead without internet. Dictation should work offline, anywhere, instantly.",
      ru: "Win+H работает только в облаке, медленно и умирает без интернета. Диктовка должна работать офлайн, везде, мгновенно.",
    },
    solution: {
      en: "Whisper + CUDA acceleration (10x+), Right Ctrl hotkey → text into any focused field, animated HUD, VK-based configurable hotkeys, history and stats. Pure local pipeline, MIT.",
      ru: "Whisper + CUDA-ускорение (10x+), хоткей Right Ctrl → текст в любое активное поле, анимированный HUD, конфигурируемые хоткеи (VK-based), история и статистика. Полностью локальный пайплайн, MIT.",
    },
    achievement: {
      en: "10x+ faster than cloud dictation, works with zero connectivity, public releases on GitHub.",
      ru: "В 10x+ быстрее облачной диктовки, работает без сети, публичные релизы на GitHub.",
    },
    stack: ["Python", "Whisper", "CUDA", "MIT"],
    repo: "https://github.com/Ap3x0s/Ripple-Voice",
  },
  {
    slug: "trumpvpn",
    status: "production",
    tags: ["FastAPI", "DevOps", "Bot"],
    title: { en: "TrumpVPN", ru: "TrumpVPN" },
    subtitle: {
      en: "VPN sales service + admin panel",
      ru: "Сервис продажи VPN + админ-панель",
    },
    problem: {
      en: "Sell VPN subscriptions with bot-driven onboarding and zero manual server ops.",
      ru: "Продавать VPN-подписки с онбордингом через бота и без ручных операций на серверах.",
    },
    solution: {
      en: "One-file architecture (FastAPI + aiogram + admin API + SQLite), release deploy with symlink current and auto-migrations, Paramiko/SSH automation, separate FSD admin frontend (servers, audit, payments, promos, subscriptions).",
      ru: "Архитектура «один файл» (FastAPI + aiogram + admin API + SQLite), release-деплой с symlink current и авто-миграциями, Paramiko/SSH-автоматизация, отдельный FSD-фронт админки (серверы, аудит, платежи, промо, подписки).",
    },
    achievement: {
      en: "In production with partner: self-healing deploys, encrypted storage outside release folders.",
      ru: "В эксплуатации с партнёром: самоисцеляемые деплои, шифрованное хранилище вне релизных папок.",
    },
    stack: ["FastAPI", "aiogram", "SQLite", "Docker", "SSH"],
  },
  {
    slug: "bio-platform",
    status: "production",
    tags: ["React", "PWA", "Payments"],
    title: { en: "Bio Platform", ru: "Bio Platform" },
    subtitle: {
      en: "Hyper-customizable bio-link hub",
      ru: "Гипер-кастомизируемый bio-link хаб",
    },
    problem: {
      en: "Linktree clones are generic. Need cyberpunk aesthetics, live presence, and own monetization stack.",
      ru: "Клоны Linktree — проходные. Нужен киберпанк-эстетик, live-присутствие и своя стека монетизации.",
    },
    solution: {
      en: "React 19 + Vite + Tailwind 4 + Framer Motion, Discord presence via Lanyard, Web Audio API visualizer, Markdown bio, i18n, PWA offline; Express 5 + Prisma 6 + PostgreSQL, JWT HttpOnly + GitHub/Discord OAuth.",
      ru: "React 19 + Vite + Tailwind 4 + Framer Motion, Discord presence через Lanyard, Web Audio API визуализатор, Markdown-био, i18n, PWA offline; Express 5 + Prisma 6 + PostgreSQL, JWT HttpOnly + GitHub/Discord OAuth.",
    },
    achievement: {
      en: "Stacked monetization: Premium / OG lifetime via Robokassa, YooKassa, Cryptomus.",
      ru: "Стековая монетизация: Premium / OG lifetime через Robokassa, YooKassa, Cryptomus.",
    },
    stack: ["React 19", "Vite", "Express", "PostgreSQL", "OAuth", "PWA"],
  },
  {
    slug: "nekocli",
    status: "oss",
    tags: ["CLI", "AI", "Fork"],
    title: { en: "nekocli / NekoFree", ru: "nekocli / NekoFree" },
    subtitle: {
      en: "Own agent CLI, forked & rebuilt",
      ru: "Свой агентский CLI, форк и перестройка",
    },
    problem: {
      en: "Claude Code ships telemetry, cloud lock-in and bloated output. Wanted a local-first agent runner.",
      ru: "Claude Code поставляет телеметрию, облако-лок и раздутый вывод. Нужен локально-фёрст агентский раннер.",
    },
    solution: {
      en: "Local models via own OmniRoute gateway, telemetry and guardrails stripped, token economy (read-once cache, Terse style −40-50% output, diff mode), model/thinking/context pickers with RU layout support, reactive UI layer.",
      ru: "Локальные модели через свой OmniRoute-гейтвей, телеметрия и guardrails вырезаны, экономия токенов (read-once кеш, Terse-стиль −40-50% вывода, diff mode), пикеры моделей/thinking/context с поддержкой русской раскладки, реактивный UI-слой.",
    },
    achievement: {
      en: "98+ commits, MIT, daily driver — agent pairing as engineering discipline.",
      ru: "98+ коммитов, MIT, ежедневный инструмент — агент-пейринг как инженерная дисциплина.",
    },
    stack: ["TypeScript", "CLI", "LLM", "MIT"],
    repo: "https://github.com/Ap3x0s/nekocli",
  },
  {
    slug: "xrayebator",
    status: "oss",
    tags: ["Open Source", "Qt", "Python"],
    title: { en: "Xrayebator", ru: "Xrayebator" },
    subtitle: {
      en: "152 commits upstream contribution",
      ru: "Вклад в апстрим: 152 коммита",
    },
    problem: {
      en: "Personal Xray config wrapper needed a real product UX — the upstream had a bare script.",
      ru: "Личный враппер Xray-конфигов заслуживал нормального UX — в апстриме был голый скрипт.",
    },
    solution: {
      en: "Qt-GUI with Fingerprint/SNI/Port dialogs and QR modal, own animation system (neon arc busy state, GPU transforms), CLI commands fp/sni/port-change, CI fixes (Qt libs for offscreen pytest), docs sync.",
      ru: "Qt-GUI с диалогами Fingerprint/SNI/Port и QR-модалкой, авторская система анимаций (неоновая дуга busy, GPU-трансформы), CLI-команды fp/sni/port-change, починка CI (Qt-библиотеки для offscreen-pytest), синхронизация документации.",
    },
    achievement: {
      en: "Second contributor after the author (~237 total), ★100 upstream, merged PRs with partner howdeploy.",
      ru: "Второй контрибьютор после автора (~237 всего), ★100 апстрим, замерженные PR с партнёром howdeploy.",
    },
    stack: ["Python", "Qt", "CLI", "CI"],
    repo: "https://github.com/Ap3x0s/Xrayebator",
  },
  {
    slug: "omniroute",
    status: "production",
    tags: ["AI", "Docker", "Gateway"],
    title: { en: "OmniRoute Gateway", ru: "OmniRoute Gateway" },
    subtitle: {
      en: "Single point for all models",
      ru: "Единая точка всех моделей",
    },
    problem: {
      en: "Five agents, five different API formats, five keys and configs to babysit.",
      ru: "Пять агентов, пять разных API-форматов, пять ключей и конфигов под присмотром.",
    },
    solution: {
      en: "Docker service at localhost:20128/v1 emulating Kiro/Anthropic API — Sonnet 4.5/5, Haiku for Kiro, nekocli, opencode, OpenDesign. DB backups and maintenance scripts included.",
      ru: "Docker-сервис на localhost:20128/v1 с эмуляцией Kiro/Anthropic API — Sonnet 4.5/5, Haiku для Kiro, nekocli, opencode, OpenDesign. Бэкапы БД и скрипты обслуживания в комплекте.",
    },
    achievement: {
      en: "One endpoint, zero vendor lock-in, feeds the whole local agent stack.",
      ru: "Одна точка, ноль вендор-лока, кормит весь локальный агентский стек.",
    },
    stack: ["Docker", "API Gateway", "AI", "Local-first"],
  },
];

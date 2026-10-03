export type SkillCategory =
  | "agents"
  | "hooks"
  | "memory"
  | "design"
  | "tools"
  | "workflow";

export interface Skill {
  slug: string;
  version: string;
  category: SkillCategory;
  title: string;
  stack: string;
  description: { en: string; ru: string };
}

export const skillCategories: SkillCategory[] = [
  "agents",
  "hooks",
  "memory",
  "design",
  "tools",
  "workflow",
];

export const skills: Skill[] = [
  {
    slug: "dsh-harness",
    version: "2.0",
    category: "agents",
    title: "DSH — DeepSeek Harness",
    stack: "Python",
    description: {
      en: "Own agent harness build: custom plugins, hooks and session history — the base layer of my agent pairing pipeline.",
      ru: "Своя сборка агентского харнеса: плагины, хуки и история сессий — базовый слой моего пайплайна агент-пейринга.",
    },
  },
  {
    slug: "engram-palace",
    version: "2.0",
    category: "memory",
    title: "engram — Memory Palace",
    stack: "Python / DSH",
    description: {
      en: "Memory palace between agent sessions: decisions, dossiers and project facts survive context resets.",
      ru: "Дворец памяти между сессиями агентов: решения, досье и факты проекта переживают сброс контекста.",
    },
  },
  {
    slug: "read-once",
    version: "1.0",
    category: "hooks",
    title: "read-once Cache",
    stack: "Hooks",
    description: {
      en: "File content costs its tokens once per session — the hook bans redundant re-reads from the context window.",
      ru: "Файл стоит своих токенов один раз за сессию — хук запрещает повторные чтения в контекст-окно.",
    },
  },
  {
    slug: "git-safe",
    version: "1.0",
    category: "hooks",
    title: "git-safe Hook",
    stack: "Hooks / Git",
    description: {
      en: "Pre-push guard: blocks force-push to protected branches, secret leaks and history rewrites.",
      ru: "Pre-push охранник: блокирует force-push в защищённые ветки, утечки секретов и переписывание истории.",
    },
  },
  {
    slug: "terse-output",
    version: "1.0",
    category: "agents",
    title: "Terse Output Style",
    stack: "nekocli",
    description: {
      en: "−40–50% output tokens: no filler, no restating the question — answers straight to the point.",
      ru: "−40–50% токенов вывода: без воды и пересказа вопроса — ответы сразу по делу.",
    },
  },
  {
    slug: "diff-mode",
    version: "1.0",
    category: "agents",
    title: "Diff Mode",
    stack: "nekocli",
    description: {
      en: "Ship only the patch: the agent answers with a reviewable diff instead of rewriting whole files.",
      ru: "Отправляем только патч: агент отвечает диффом для ревью, а не переписывает файлы целиком.",
    },
  },
  {
    slug: "ru-pickers",
    version: "1.0",
    category: "agents",
    title: "RU Layout Pickers",
    stack: "nekocli / TypeScript",
    description: {
      en: "Model / thinking / context switchers that don't break when CapsLock is Cyrillic.",
      ru: "Пикеры модели / thinking / context, которые не ломаются на кириллице при CapsLock.",
    },
  },
  {
    slug: "vtracer-svg",
    version: "1.0",
    category: "design",
    title: "vtracer image → SVG",
    stack: "Python / vtracer",
    description: {
      en: "PNG/JPG/BMP to SVG conversion preserving color and quality — logos and assets for my design showcases.",
      ru: "Конвертация PNG/JPG/BMP в SVG с сохранением цвета и качества — логотипы и ассеты для дизайн-витрин.",
    },
  },
  {
    slug: "phosphor-icons",
    version: "1.0",
    category: "design",
    title: "phosphor icon Skill",
    stack: "SVG / Design",
    description: {
      en: "Icon set generation in a consistent style: grid, strokes, export pipeline.",
      ru: "Генерация набора иконок в едином стиле: сетка, штрихи, пайплайн экспорта.",
    },
  },
  {
    slug: "design-arsenal",
    version: "3.0",
    category: "design",
    title: "Kiro Design Arsenal",
    stack: "fal / figma / gsap / remotion",
    description: {
      en: "~130 design skills: fal image generation, Figma flows, GSAP motion, Remotion video and pitch-deck templates.",
      ru: "~130 дизайн-скиллов: генерация картинок fal, флоу Figma, GSAP-анимации, Remotion-видео и шаблоны дек.",
    },
  },
  {
    slug: "cso-audit",
    version: "1.0",
    category: "workflow",
    title: "Self CSO Audit",
    stack: "Checklist / OWASP",
    description: {
      en: "Security audit against my own diff before release: ISSUE registry, OWASP top 10, repro steps required.",
      ru: "Аудит безопасности против собственного диффа перед релизом: реестр ISSUE, OWASP top 10, обязательные шаги воспроизведения.",
    },
  },
  {
    slug: "qa-registry",
    version: "1.0",
    category: "workflow",
    title: "QA Registry",
    stack: "Process",
    description: {
      en: "Every bug written down with repro steps and status — evidence before assertions, \"verify\" before \"done\".",
      ru: "Каждый баг записан с шагами воспроизведения и статусом — доказательства до утверждений, «проверь» до «готово».",
    },
  },
  {
    slug: "release-symlink",
    version: "1.0",
    category: "workflow",
    title: "Zero-Downtime Release",
    stack: "Bash / systemd",
    description: {
      en: "Releases + symlink current deploy: atomic switch, auto-migrations, instant rollback.",
      ru: "Релизы + symlink current: атомарный свитч, авто-миграции, мгновенный откат.",
    },
  },
  {
    slug: "omniroute",
    version: "1.0",
    category: "tools",
    title: "OmniRoute Gateway",
    stack: "Docker / API",
    description: {
      en: "localhost:20128 — Kiro/Anthropic API emulation for all local agents: one URL, one secret, model aliases.",
      ru: "localhost:20128 — эмуляция Kiro/Anthropic API для всех локальных агентов: один URL, один секрет, алиасы моделей.",
    },
  },
  {
    slug: "opencode-plugins",
    version: "1.0",
    category: "tools",
    title: "opencode Experiments",
    stack: "TypeScript",
    description: {
      en: "Custom plugins and skills for the opencode ecosystem, wired through the same local gateway.",
      ru: "Свои плагины и скиллы для экосистемы opencode, подключённые через тот же локальный гейтвей.",
    },
  },
];

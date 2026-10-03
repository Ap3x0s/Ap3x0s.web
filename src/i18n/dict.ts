export type Lang = "en" | "ru";

export const dict = {
  en: {
    site: {
      name: "Ap3x0",
      titleSuffix: "| AP3X0_WEB",
      description:
        "Full-stack products under key. Local-first infrastructure, agent-driven engineering.",
    },
    nav: {
      root: "ROOT",
      works: "WORKS",
      about: "ABOUT",
      log: "LOG",
      skills: "SKILLS",
    },
    menu: {
      label: "MENU",
      close: "CLOSE",
      systemStatus: "SYSTEM STATUS",
      online: "ONLINE",
      build: "BUILD",
    },
    hero: {
      lines: ["BUILD", "SHIP", "OWN THE", "STACK"],
      tagline:
        "Full-stack products under key. Local-first infrastructure & agent-driven engineering.",
      ctaPrimary: "READ LATEST",
      ctaSecondary: "VIEW WORKS",
    },
    homeAbout: {
      label: "// ABOUT ME",
      title1: "Most developers write code.",
      title2: "I build systems.",
      p1: "The task is never \"build a website\". It's testing a hypothesis, shipping an MVP, wiring payments, automating what eats the team's time.",
      p2: "My name is Evgeny (Ap3x0). Full-stack developer, ~4 years in production: from first scripts in 2020 and math school at VMK MSU to matchmaking platforms with RBAC/RLS.",
      link: "[READ MANIFESTO]",
    },
    signal: {
      title: "INCOMING\nSIGNAL",
      link: "[DATA ARCHIVE]",
    },
    footer: {
      copyright: "© 2026 AP3X0_WEB_SYSTEM",
      engineered: "ENGINEERED WITH ASTRO",
      github: "[GITHUB]",
      telegram: "[TELEGRAM]",
      rss: "[RSS]",
    },
    telemetry: {
      offset: "OFFSET",
      ret: "[ ▲ RETURN ]",
    },
    works: {
      title: "Works",
      label: "// SELECTED PROJECTS",
      intro:
        "Problems with an asterisk — the ones Stack Overflow doesn't answer.",
      back: "[ ← ALL WORKS ]",
      problem: "// PROBLEM",
      solution: "// SOLUTION",
      achievement: "KEY ACHIEVEMENT",
      stack: "TECH STACK",
      view: "OPEN CASE",
      status: {
        production: "PRODUCTION",
        mvp: "MVP",
        oss: "OPEN SOURCE",
        wip: "WIP",
      },
    },
    blog: {
      title: "Log.",
      label: "// DATA ARCHIVE",
      back: "[ ← ALL ENTRIES ]",
      published: "PUBLISHED",
      tags: "TAGS",
      readTime: "READ",
      minutes: "MIN",
      related: "// MORE SIGNAL",
    },
    skills: {
      title: "Skills.",
      label: "// AGENT ARSENAL",
      intro:
        "Custom skills, hooks and tooling that power my development pipeline.",
      all: "ALL",
      items: "MODULES",
      version: "VER",
      lang: "STACK",
      empty: "NO MODULES IN THIS CATEGORY",
    },
    aboutPage: {
      label: "// MANIFESTO",
      back: "[ ← ROOT ]",
    },
  },
  ru: {
    site: {
      name: "Ap3x0",
      titleSuffix: "| AP3X0_WEB",
      description:
        "Полноценные продукты под ключ. Локально-фёрст инфраструктура и агентская разработка.",
    },
    nav: {
      root: "ROOT",
      works: "WORKS",
      about: "ABOUT",
      log: "LOG",
      skills: "SKILLS",
    },
    menu: {
      label: "MENU",
      close: "ЗАКРЫТЬ",
      systemStatus: "СТАТУС СИСТЕМЫ",
      online: "ONLINE",
      build: "BUILD",
    },
    hero: {
      lines: ["BUILD", "SHIP", "OWN THE", "STACK"],
      tagline:
        "Полноценные продукты под ключ. Локально-фёрст инфраструктура и агентская разработка.",
      ctaPrimary: "ЧИТАТЬ ЛОГ",
      ctaSecondary: "СМОТРЕТЬ WORKS",
    },
    homeAbout: {
      label: "// О СЕБЕ",
      title1: "Большинство пишет код.",
      title2: "Я строю системы.",
      p1: "Задача никогда не «сделать сайт». Это проверка гипотезы, запуск MVP, подключение платежей, автоматизация того, что съедает время команды.",
      p2: "Меня зовут Евгений (Ap3x0). Full-stack разработчик, ~4 года в проде: от первых скриптов 2020-го и матшколы при ВМК МГУ до матчмейкинг-платформ с RBAC/RLS.",
      link: "[ЧИТАТЬ МАНИФЕСТ]",
    },
    signal: {
      title: "ВХОДЯЩИЙ\nСИГНАЛ",
      link: "[АРХИВ ДАННЫХ]",
    },
    footer: {
      copyright: "© 2026 AP3X0_WEB_SYSTEM",
      engineered: "ENGINEERED WITH ASTRO",
      github: "[GITHUB]",
      telegram: "[TELEGRAM]",
      rss: "[RSS]",
    },
    telemetry: {
      offset: "OFFSET",
      ret: "[ ▲ RETURN ]",
    },
    works: {
      title: "Работы",
      label: "// ИЗБРАННЫЕ ПРОЕКТЫ",
      intro: "Задачи со звёздочкой — на которые нет ответа на Stack Overflow.",
      back: "[ ← ВСЕ РАБОТЫ ]",
      problem: "// ЗАДАЧА",
      solution: "// РЕШЕНИЕ",
      achievement: "КЛЮЧЕВОЙ РЕЗУЛЬТАТ",
      stack: "СТЕК",
      view: "ОТКРЫТЬ КЕЙС",
      status: {
        production: "PRODUCTION",
        mvp: "MVP",
        oss: "OPEN SOURCE",
        wip: "В РАБОТЕ",
      },
    },
    blog: {
      title: "Лог.",
      label: "// АРХИВ ДАННЫХ",
      back: "[ ← ВСЕ ЗАПИСИ ]",
      published: "ОПУБЛИКОВАНО",
      tags: "ТЕГИ",
      readTime: "ЧТЕНИЕ",
      minutes: "МИН",
      related: "// БОЛЬШЕ СИГНАЛА",
    },
    skills: {
      title: "Скиллы.",
      label: "// АРСЕНАЛ АГЕНТА",
      intro: "Свои скиллы, хуки и тулзы, которые кормят мой пайплайн разработки.",
      all: "ALL",
      items: "МОДУЛИ",
      version: "VER",
      lang: "СТЕК",
      empty: "В ЭТОЙ КАТЕГОРИИ ПУСТО",
    },
    aboutPage: {
      label: "// МАНИФЕСТ",
      back: "[ ← НА ГЛАВНУЮ ]",
    },
  },
} as const;

export type Dict = (typeof dict)["en"];

/** Swap /ru prefix between locales: '/ru/works' <-> '/works' */
export function localizePath(pathname: string, target: Lang): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const isRu = clean === "/ru" || clean.startsWith("/ru/");
  const base = isRu ? clean.slice(3) || "/" : clean;

  if (target === "ru") {
    return base === "/" ? "/ru" : `/ru${base}`;
  }
  return base;
}

export function langFromPath(pathname: string): Lang {
  const clean = pathname.replace(/\/+$/, "");
  return clean === "/ru" || clean.startsWith("/ru/") ? "ru" : "en";
}

/** Strip locale prefix: '/ru/works' -> '/works' */
export function basePath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/ru") return "/";
  if (clean.startsWith("/ru/")) return clean.slice(3);
  return clean;
}

export function withLang(base: string, lang: Lang): string {
  if (lang === "ru") return base === "/" ? "/ru" : `/ru${base}`;
  return base;
}

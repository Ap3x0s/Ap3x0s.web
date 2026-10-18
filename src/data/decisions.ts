import type { Lang } from "../i18n/dict";

export interface Decision {
  id: string;
  title: string;
  status: string;
  context: string;
  decision: string;
  consequences: string;
}

export interface DecisionsContent {
  intro: string;
  contextLabel: string;
  decisionLabel: string;
  consequencesLabel: string;
  items: Decision[];
}

export const decisions: Record<Lang, DecisionsContent> = {
  en: {
    intro:
      "Every architectural choice here traces back to a written decision. These five define how I build.",
    contextLabel: "CONTEXT",
    decisionLabel: "DECISION",
    consequencesLabel: "CONSEQUENCES",
    items: [
      {
        id: "ADR-001",
        title: "Local-first over cloud",
        status: "ACCEPTED",
        context:
          "Cloud-first tools die without the network and stream every keystroke to someone else's server. Latency, cost and privacy all point the same way.",
        decision:
          "Core features run on the machine they touch — dictation, agent CLI, model routing. The cloud is a layer, never a dependency.",
        consequences:
          "Works offline, data stays with its owner. Sync becomes a real engineering problem — accepted.",
      },
      {
        id: "ADR-002",
        title: "Zero telemetry",
        status: "ACCEPTED",
        context:
          "Analytics and telemetry are the default price of modern software: silent, opaque, permanent.",
        decision:
          "No trackers, no third-party scripts, no cookie banner — there is nothing to consent to. Forked tools ship with telemetry stripped to zero.",
        consequences:
          "No vanity metrics, no growth-hacking surface. Trust is a feature, shipped by default.",
      },
      {
        id: "ADR-003",
        title: "Brutalism as the UI system",
        status: "ACCEPTED",
        context:
          "Rounded corners, soft shadows and gradient glass all signal the same thing: nothing.",
        decision:
          "Raw borders, sharp edges, two colors, zero radius. The interface states its function instead of decorating it.",
        consequences:
          "Polarizing by design. Cheap to load and impossible to mistake for a template.",
      },
      {
        id: "ADR-004",
        title: "Open source by default",
        status: "ACCEPTED",
        context:
          "Closed code hides competence. Open code exposes it — to users, to reviewers, to upstream.",
        decision:
          "Ship in public where possible: Ripple-Voice, nekocli, the Xrayebator contribution. Personal data is stripped from every release.",
        consequences:
          "Public scrutiny and a real support load — paid for in stars and merged upstream PRs.",
      },
      {
        id: "ADR-005",
        title: "Static-first",
        status: "ACCEPTED",
        context:
          "This site. A portfolio needs no database, and every running server is an attack surface.",
        decision:
          "Static HTML with islands of JS only where interaction earns its weight.",
        consequences:
          "Millisecond loads, zero-cost hosting, nothing to breach at runtime.",
      },
    ],
  },
  ru: {
    intro:
      "За каждым архитектурным выбором здесь стоит записанное решение. Вот пять, которые определяют, как я строю.",
    contextLabel: "КОНТЕКСТ",
    decisionLabel: "РЕШЕНИЕ",
    consequencesLabel: "ПОСЛЕДСТВИЯ",
    items: [
      {
        id: "ADR-001",
        title: "Локально-фёрст вместо облака",
        status: "ПРИНЯТО",
        context:
          "Облачные инструменты умирают без сети и стримят каждое нажатие на чужой сервер. Латентность, цена и приватность указывают в одну сторону.",
        decision:
          "Ключевые функции работают на машине, к которой относятся — диктовка, агентский CLI, маршрутизация моделей. Облако — слой, а не зависимость.",
        consequences:
          "Работает офлайн, данные остаются у владельца. Синхронизация становится полноценной инженерной задачей — принято.",
      },
      {
        id: "ADR-002",
        title: "Ноль телеметрии",
        status: "ПРИНЯТО",
        context:
          "Аналитика и телеметрия — дефолтная цена современного софта: молчаливая, непрозрачная, вечная.",
        decision:
          "Никаких трекеров, сторонних скриптов и баннеров о cookie — соглашаться не с чем. Форки поставляются с вырезанной до нуля телеметрией.",
        consequences:
          "Ноль vanity-метрик и поля для growth-хакинга. Доверие — это фича, включённая по умолчанию.",
      },
      {
        id: "ADR-003",
        title: "Брутализм как UI-система",
        status: "ПРИНЯТО",
        context:
          "Скругления, мягкие тени и стеклянные градиенты сигнализируют одно: ничего.",
        decision:
          "Грубые границы, резкие углы, два цвета, нулевой радиус. Интерфейс заявляет функцию вместо украшения.",
        consequences:
          "Полярность — осознанный выбор. Грузится дёшево и исключает путаницу с шаблоном.",
      },
      {
        id: "ADR-004",
        title: "Открытый код по умолчанию",
        status: "ПРИНЯТО",
        context:
          "Закрытый код прячет компетенцию. Открытый — выставляет её на обозрение: пользователям, ревьюерам, апстриму.",
        decision:
          "Публиковать в открытую где возможно: Ripple-Voice, nekocli, вклад в Xrayebator. Личные данные вырезаются из каждого релиза.",
        consequences:
          "Публичная критика и реальная нагрузка поддержки — оплачено звёздами и замерженными PR в апстрим.",
      },
      {
        id: "ADR-005",
        title: "Static-first",
        status: "ПРИНЯТО",
        context:
          "Этот сайт. Портфолио не нужна база данных, а каждый живой сервер — поверхность атаки.",
        decision:
          "Статичный HTML с островами JS только там, где интерактив оправдывает свой вес.",
        consequences:
          "Загрузка за миллисекунды, хостинг за ноль, во время исполнения ломать нечего.",
      },
    ],
  },
};

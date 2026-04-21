export interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  desc: string;
  current?: boolean;
}

export interface TechItem {
  name: string;
  years: string;
  glyph: string;
}

const experienceEn: ExperienceEntry[] = [
  {
    date: "Aug 2021 — Present",
    role: "Senior Frontend Developer",
    company: "Codemotion",
    desc: "Set up the project foundation, selected libraries and architecture, built authorization and account settings, shipped the admin area with advanced tables and filters, and integrated Stripe and Helpscout.",
    current: true,
  },
  {
    date: "Apr 2021 — May 2022",
    role: "Middle Frontend Developer",
    company: "EPAM",
    desc: "Worked on an e-commerce product, delivered new features, improved existing flows, performed code review, wrote Jest and React Testing Library tests, and coordinated closely with QA, design, BA, and management.",
  },
  {
    date: "May 2020 — Apr 2021",
    role: "Software Developer",
    company: "Avengers",
    desc: "Deployed a React Native mobile app, implemented authorization, delivered core post creation and interaction flows, and handled refactoring and app optimization.",
  },
  {
    date: "Aug 2019 — May 2020",
    role: "Software Developer",
    company: "Rocket Firm",
    desc: "Built a construction company website end-to-end, owned UI implementation, debugging, and testing, and collaborated tightly with backend, design, product, and QA.",
  },
  {
    date: "Oct 2018 — Aug 2019",
    role: "Frontend Developer",
    company: "Sibers Group Ltd.",
    desc: "Developed task management features, built contest winner selection logic, improved image rendering and comments, and fixed bugs to improve stability and retention.",
  },
];

const experienceRu: ExperienceEntry[] = [
  {
    date: "Авг 2021 — по настоящее время",
    role: "Senior Frontend Developer",
    company: "Codemotion",
    desc: "Участвовал в запуске проекта, выборе библиотек и архитектуры, реализовал авторизацию и настройки личного кабинета, административный раздел с таблицами и фильтрами, а также интеграции Stripe и Helpscout.",
    current: true,
  },
  {
    date: "Апр 2021 — Май 2022",
    role: "Middle Frontend Developer",
    company: "EPAM",
    desc: "Работал над e-commerce продуктом: развивал новую функциональность, улучшал существующие сценарии, делал code review, писал тесты на Jest и React Testing Library и тесно взаимодействовал с QA, дизайном, BA и менеджментом.",
  },
  {
    date: "Май 2020 — Апр 2021",
    role: "Software Developer",
    company: "Avengers",
    desc: "Развернул мобильное приложение на React Native, реализовал систему авторизации, базовые сценарии создания и взаимодействия с постами, занимался рефакторингом и оптимизацией приложения.",
  },
  {
    date: "Авг 2019 — Май 2020",
    role: "Software Developer",
    company: "Rocket Firm",
    desc: "Разрабатывал сайт строительной компании от проектирования до тестирования, отвечал за UI, отладку и качество продукта, взаимодействовал с backend, дизайном, product и QA.",
  },
  {
    date: "Окт 2018 — Авг 2019",
    role: "Frontend Developer",
    company: "Sibers Group Ltd.",
    desc: "Разрабатывал функционал управления задачами, логику выбора победителей конкурсов, улучшал отображение изображений и комментариев и активно исправлял баги для повышения стабильности системы.",
  },
];

const techStackEn: Record<string, TechItem[]> = {
  "AI Fluency": [
    { name: "Claude Code", years: "", glyph: "◈" },
    { name: "Cursor", years: "", glyph: "↗" },
    { name: "GitHub Copilot", years: "", glyph: "◎" },
    { name: "Anthropic API", years: "", glyph: "◈" },
    { name: "OpenAI API", years: "", glyph: "◎" },
    { name: "ChatGPT", years: "", glyph: "◎" },
  ],
  Frontend: [
    { name: "JavaScript", years: "7y", glyph: "JS" },
    { name: "React", years: "7y", glyph: "⚛" },
    { name: "TypeScript", years: "5y", glyph: "TS" },
    { name: "Redux Toolkit", years: "4y", glyph: "RTK" },
    { name: "Next.js", years: "3y", glyph: "N" },
    { name: "HTML/CSS", years: "7y", glyph: "</>" },
    { name: "MUI", years: "4y", glyph: "UI" },
    { name: "React Native", years: "1y", glyph: "RN" },
  ],
  Data: [
    { name: "Apollo GraphQL", years: "3y", glyph: "GQL" },
    { name: "MySQL", years: "2y", glyph: "SQL" },
    { name: "PostgreSQL", years: "2y", glyph: "PG" },
    { name: "MongoDB", years: "1y", glyph: "MDB" },
    { name: "Node.js", years: "3y", glyph: "Node" },
  ],
  Tooling: [
    { name: "Git", years: "7y", glyph: "⎇" },
    { name: "Webpack", years: "4y", glyph: "W" },
    { name: "Jest", years: "3y", glyph: "J" },
  ],
};

const techStackRu: Record<string, TechItem[]> = {
  Фронтенд: [
    { name: "JavaScript", years: "7л", glyph: "JS" },
    { name: "React", years: "7л", glyph: "⚛" },
    { name: "TypeScript", years: "5л", glyph: "TS" },
    { name: "Redux Toolkit", years: "4л", glyph: "RTK" },
    { name: "Next.js", years: "3л", glyph: "N" },
    { name: "HTML/CSS", years: "7л", glyph: "</>" },
    { name: "MUI", years: "4л", glyph: "UI" },
    { name: "React Native", years: "1г", glyph: "RN" },
  ],
  Данные: [
    { name: "Apollo GraphQL", years: "3л", glyph: "GQL" },
    { name: "MySQL", years: "2г", glyph: "SQL" },
    { name: "PostgreSQL", years: "2г", glyph: "PG" },
    { name: "MongoDB", years: "1г", glyph: "MDB" },
    { name: "Node.js", years: "3г", glyph: "Node" },
  ],
  Инструменты: [
    { name: "Git", years: "7л", glyph: "⎇" },
    { name: "Webpack", years: "4г", glyph: "W" },
    { name: "Jest", years: "3г", glyph: "J" },
  ],
  "AI Fluency": [
    { name: "Claude Code", years: "", glyph: "◈" },
    { name: "Cursor", years: "", glyph: "↗" },
    { name: "GitHub Copilot", years: "", glyph: "◎" },
    { name: "Anthropic API", years: "", glyph: "◈" },
    { name: "OpenAI API", years: "", glyph: "◎" },
    { name: "ChatGPT", years: "", glyph: "◎" },
  ],
};

export function getExperience(locale: string): ExperienceEntry[] {
  return locale === "ru" ? experienceRu : experienceEn;
}

export function getTechStack(locale: string): Record<string, TechItem[]> {
  return locale === "ru" ? techStackRu : techStackEn;
}

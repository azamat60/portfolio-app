export interface Project {
  id: string
  name: string
  initials: string
  desc: string
  descRu?: string
  longDesc?: string
  longDescRu?: string
  stack: string[]
  type: 'pet' | 'commercial'
  year: string
  role: string
  status: string
  colors: [string, string]
  features?: string[]
  featuresRu?: string[]
  demoUrl?: string
  sourceUrl?: string | null
  image?: string
}

export const projects: Project[] = [
  // ── Commercial ────────────────────────────────────────────────────────────
  {
    id: 'schoolbus-manager',
    name: 'Schoolbus Manager',
    initials: 'SM',
    desc: 'Web platform for school bus routing, fleet management, and real-time driver and attendance tracking for K-12 districts.',
    descRu: 'Веб-платформа для маршрутизации школьных автобусов, управления автопарком и отслеживания водителей и посещаемости в реальном времени для K-12 округов.',
    longDesc: 'Schoolbus Manager is a SaaS platform used by school transportation departments to plan and optimize bus routes, manage drivers, and track daily ridership. The system handles route comparison, turn-by-turn directions, CSV/XLSX data import, and live status updates — reducing administrative overhead for districts managing dozens of buses and thousands of students.',
    longDescRu: 'Schoolbus Manager — SaaS-платформа для школьных транспортных отделов: планирование и оптимизация маршрутов, управление водителями и отслеживание посещаемости. Система поддерживает сравнение маршрутов, пошаговую навигацию, импорт CSV/XLSX и обновления статуса в реальном времени, снижая административную нагрузку для округов с десятками автобусов и тысячами учеников.',
    stack: ['React', 'TypeScript', 'Redux', 'Styled-Components', 'Material UI'],
    type: 'commercial',
    year: '2021–Present',
    role: 'Senior Fullstack Developer',
    status: 'Production',
    colors: ['#2e1f00', '#3d2e0a'],
    image: '/projects/schoolbus.png',
    demoUrl: 'https://schoolbusmanager.com/',
    features: [
      'Route planning with turn-by-turn directions and stop sequencing',
      'Fleet and driver management with scheduling',
      'Daily ridership tracking and attendance reports',
      'CSV/XLSX import for bulk route and student data',
      'Route comparison tools to identify inefficiencies',
    ],
    featuresRu: [
      'Планирование маршрутов с пошаговой навигацией и очерёдностью остановок',
      'Управление автопарком и водителями с расписанием',
      'Ежедневный учёт поездок и отчёты о посещаемости',
      'Импорт CSV/XLSX для массовой загрузки маршрутов и данных учеников',
      'Инструменты сравнения маршрутов для выявления неэффективности',
    ],
    sourceUrl: null,
  },
  {
    id: 'bidsheet',
    name: 'Bidsheet',
    initials: 'BS',
    desc: 'B2B live auction marketplace for wholesale used electronics — laptops, servers, phones. Reserve prices, auto-increments, real-time bidding.',
    descRu: 'B2B-маркетплейс живых аукционов для оптовой продажи б/у электроники — ноутбуки, серверы, телефоны. Резервные цены, автоинкременты, торги в реальном времени.',
    longDesc: 'Bidsheet.io is a wholesale B2B auction platform for resellers of used and refurbished electronics. Buyers place real-time bids on lots of laptops, desktops, servers, and mobile devices. The platform features automatic bid increments, reserve prices, 5-minute auction extensions on late bids, and account verification gating. Built for professional resellers who need speed and precision during live auction windows.',
    longDescRu: 'Bidsheet.io — оптовая B2B-аукционная площадка для реселлеров б/у и восстановленной электроники. Покупатели делают ставки в реальном времени на лоты ноутбуков, десктопов, серверов и мобильных устройств. Платформа поддерживает автоматические инкременты ставок, резервные цены, 5-минутное продление аукциона при поздних ставках и верификацию аккаунтов. Создана для профессиональных реселлеров, которым нужна скорость и точность в ходе live-торгов.',
    stack: ['React', 'TypeScript', 'Next.js', 'Styled-Components', 'Material UI', 'React Hook Form'],
    type: 'commercial',
    year: '2023–2024',
    role: 'Senior Fullstack Developer',
    status: 'Production',
    colors: ['#0a1530', '#1a253f'],
    image: '/projects/bidsheet.png',
    features: [
      'Real-time bidding engine with WebSocket updates',
      'Automatic bid increments and reserve price logic',
      '5-minute auction extension on bids near closing time',
      'Lot catalogue with filtering by category, condition, and quantity',
      'Business account verification and access control',
    ],
    featuresRu: [
      'Движок ставок в реальном времени с WebSocket-обновлениями',
      'Автоматические инкременты ставок и логика резервных цен',
      'Продление аукциона на 5 минут при ставке у закрытия',
      'Каталог лотов с фильтрами по категории, состоянию и количеству',
      'Верификация бизнес-аккаунтов и контроль доступа',
    ],
    demoUrl: 'https://bidsheet.io/auctions',
    sourceUrl: null,
  },
  {
    id: 'tvh',
    name: 'TVH',
    initials: 'TVH',
    desc: 'B2B spare parts portal for a global leader in forklift and material handling equipment. 44M+ part references, 180+ countries.',
    descRu: 'B2B-портал запчастей для мирового лидера в области погрузчиков и складского оборудования. 44M+ артикулов, 180+ стран.',
    longDesc: 'TVH is a Belgian enterprise founded in 1969 and the world\'s largest independent supplier of spare parts for forklifts and material handling equipment. With 44 million known references and 930,000 parts in stock, it serves 75,000+ customers across 180+ countries. I worked on the customer-facing B2B portal — complex catalogue search, ordering flows, account management, and multi-language support across 55 languages.',
    longDescRu: 'TVH — бельгийское предприятие, основанное в 1969 году, крупнейший в мире независимый поставщик запчастей для погрузчиков и складского оборудования. 44 миллиона известных артикулов, 930 000 позиций на складе, 75 000+ клиентов в 180+ странах. Я работал над клиентским B2B-порталом: сложный поиск по каталогу, процессы оформления заказов, управление аккаунтами и поддержка 55 языков.',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Styled-Components'],
    type: 'commercial',
    year: '2021–2022',
    role: 'Middle Frontend Developer',
    status: 'Production',
    colors: ['#1a0a0a', '#2e1010'],
    image: '/projects/TVH.png',
    demoUrl: 'https://www.tvh.com/',
    features: [
      'Large-scale catalogue search across 44M+ part references',
      'Complex B2B ordering flows with bulk add and quote requests',
      'Account dashboard with order history, invoices, and favourites',
      'Multi-language interface supporting 55 languages',
      'Integration with internal ERP and inventory systems',
    ],
    featuresRu: [
      'Масштабный поиск по каталогу из 44M+ артикулов',
      'Сложные B2B-процессы заказа с массовым добавлением и запросами на КП',
      'Личный кабинет с историей заказов, счетами и избранным',
      'Мультиязычный интерфейс с поддержкой 55 языков',
      'Интеграция с внутренними ERP и складскими системами',
    ],
    sourceUrl: null,
  },
  {
    id: 'handyday',
    name: 'HandyDay',
    initials: 'HD',
    desc: 'B2B procurement and bidding platform for the Swedish construction industry. Supplier vetting, live procurements, and e-signatures.',
    descRu: 'B2B-платформа закупок и тендеров для шведской строительной отрасли. Оценка поставщиков, живые тендеры и электронная подпись.',
    longDesc: 'HandyDay is the leading procurement SaaS for the Swedish construction and property sector. It streamlines the full procurement cycle — supplier evaluation (Supplier Checkup), live bid management (Procurements Live), and digital signing (HandySign). The platform serves 3,300+ registered companies across 300+ active procurements, reducing admin overhead for both buyers and suppliers.',
    longDescRu: 'HandyDay — ведущая SaaS-платформа закупок для шведского строительного и имущественного сектора. Охватывает полный цикл закупок: оценка поставщиков (Supplier Checkup), управление живыми тендерами (Procurements Live) и электронная подпись (HandySign). Платформа обслуживает 3 300+ зарегистрированных компаний в рамках 300+ активных закупок, снижая административную нагрузку для покупателей и поставщиков.',
    stack: ['React Native', 'React', 'TypeScript', 'MobX', 'Formik'],
    type: 'commercial',
    year: '2020–2021',
    role: 'Software Developer',
    status: 'Production',
    colors: ['#0a2030', '#1a3040'],
    image: '/projects/handyday.png',
    demoUrl: 'https://www.handyday.com/en',
    features: [
      'Supplier Checkup — structured supplier evaluation and vetting',
      'Procurements Live — real-time bid submission and monitoring',
      'HandySign — integrated electronic signature flow',
      'Supplier and buyer portals with separate access levels',
      'Mobile app for on-site procurement management',
    ],
    featuresRu: [
      'Supplier Checkup — структурированная оценка и проверка поставщиков',
      'Procurements Live — подача ставок и мониторинг в реальном времени',
      'HandySign — встроенный процесс электронной подписи',
      'Порталы для поставщиков и покупателей с раздельным доступом',
      'Мобильное приложение для управления закупками на объекте',
    ],
    sourceUrl: null,
  },
  {
    id: '52frames',
    name: '52Frames',
    initials: '52',
    desc: 'Community platform for weekly photo challenges — 52 weeks, one photo each. Peer feedback, galleries, and photowalks.',
    descRu: 'Сообщество для еженедельных фотоконкурсов — 52 недели, один снимок в неделю. Обратная связь, галереи и фотопрогулки.',
    longDesc: '52Frames is a free global photography community built around a simple discipline: submit one photo every week for a year. The platform provides weekly prompts, peer critique, curated galleries, tutorials, and screencasts. It serves tens of thousands of amateur and professional photographers who use it to sharpen their eye and stay consistent.',
    longDescRu: '52Frames — бесплатное глобальное фотосообщество на простом принципе: один снимок в неделю на протяжении года. Платформа предлагает еженедельные темы, рецензии участников, кураторские галереи, уроки и скринкасты. Ею пользуются десятки тысяч фотографов-любителей и профессионалов для развития навыков и поддержания дисциплины.',
    stack: ['AngularJS', 'Bootstrap', 'MomentJS', 'Lodash'],
    type: 'commercial',
    year: '2019–2020',
    role: 'Frontend Developer',
    status: 'Production',
    colors: ['#0a1a2e', '#1a2a40'],
    image: '/projects/52frames.png',
    demoUrl: 'https://52frames.com',
    features: [
      'Weekly photo submission flow with prompt reveal and deadline countdown',
      'Peer feedback system with structured critique prompts',
      'Curated community galleries with tagging and filtering',
      'User profiles with full 52-week submission history',
      'Photowalk event listings and registration',
    ],
    featuresRu: [
      'Еженедельная подача работ с раскрытием темы и обратным отсчётом',
      'Система рецензирования со структурированными подсказками',
      'Кураторские галереи сообщества с тегами и фильтрами',
      'Профили с полной историей 52 недель работ',
      'Анонсы фотопрогулок и регистрация на них',
    ],
    sourceUrl: null,
  },

  // ── Pet ───────────────────────────────────────────────────────────────────
  {
    id: 'taskflow',
    name: 'TaskFlow',
    initials: 'TF',
    desc: 'Drag-and-drop Kanban board with nested subtasks, keyboard shortcuts, and local-first sync.',
    descRu: 'Канбан-доска с drag-and-drop, вложенными подзадачами, горячими клавишами и local-first синхронизацией.',
    longDesc: 'A full-featured task management application built for developers who live in the keyboard. TaskFlow combines the speed of local-first architecture with the flexibility of a Kanban board, offering nested subtasks, custom labels, and rich keyboard shortcuts inspired by tools like Linear and Things.',
    longDescRu: 'Полнофункциональное приложение для управления задачами для тех, кто живёт в клавиатуре. Сочетает скорость local-first архитектуры с гибкостью канбан-доски — вложенные подзадачи, пользовательские метки, горячие клавиши в духе Linear и Things.',
    stack: ['React', 'TypeScript', 'Zustand', 'Tailwind', 'Vite'],
    type: 'pet',
    year: '2025',
    role: 'Solo',
    status: 'Shipped',
    colors: ['#0f3d2e', '#1a4f3e'],
    features: [
      'Drag-and-drop columns and cards with react-dnd',
      'Command palette with fuzzy search (⌘K)',
      'Offline-first with IndexedDB persistence',
      'Nested subtasks up to 3 levels deep',
      'Custom labels, due dates, and priority flags',
    ],
    featuresRu: [
      'Drag-and-drop колонок и карточек через react-dnd',
      'Командная палитра с нечётким поиском (⌘K)',
      'Offline-first с хранением в IndexedDB',
      'Вложенные подзадачи до 3 уровней',
      'Метки, дедлайны и флаги приоритета',
    ],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'devpulse',
    name: 'DevPulse',
    initials: 'DP',
    desc: 'Analytics dashboard for tracking commits, PRs, and dev productivity across repos.',
    descRu: 'Аналитический дашборд для отслеживания коммитов, PR и продуктивности команды по репозиториям.',
    longDesc: 'A unified analytics dashboard that aggregates data from GitHub, GitLab, and Linear to give engineering teams real insight into their velocity and health. Built with D3.js for rich interactive visualizations.',
    longDescRu: 'Единый аналитический дашборд, агрегирующий данные из GitHub, GitLab и Linear для реального понимания скорости и здоровья команды. Построен на D3.js с богатыми интерактивными визуализациями.',
    stack: ['Next.js', 'D3.js', 'Tailwind', 'tRPC', 'Postgres'],
    type: 'pet',
    year: '2025',
    role: 'Solo',
    status: 'Beta',
    colors: ['#1a2a4a', '#0a1f3e'],
    features: [
      'Real-time commit activity heatmaps',
      'PR lifecycle and review time analytics',
      'Custom dashboards per team or repo',
      'GitHub / GitLab / Linear integrations',
    ],
    featuresRu: [
      'Тепловые карты активности коммитов в реальном времени',
      'Аналитика жизненного цикла PR и времени ревью',
      'Кастомные дашборды на команду или репозиторий',
      'Интеграции GitHub / GitLab / Linear',
    ],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'chatnest',
    name: 'ChatNest',
    initials: 'CN',
    desc: 'Real-time messenger with end-to-end encryption, rooms, and typing indicators.',
    descRu: 'Мессенджер в реальном времени с E2E-шифрованием, комнатами и индикаторами набора текста.',
    stack: ['React', 'Socket.io', 'Node.js', 'Redis'],
    type: 'pet',
    year: '2024',
    role: 'Solo',
    status: 'Shipped',
    colors: ['#3a1a4a', '#2a0f3e'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'formforge',
    name: 'FormForge',
    initials: 'FF',
    desc: 'Dynamic form builder with validation, conditional logic, and JSON schema export.',
    descRu: 'Конструктор динамических форм с валидацией, условной логикой и экспортом JSON-схемы.',
    stack: ['Vue 3', 'Pinia', 'TypeScript', 'Zod'],
    type: 'pet',
    year: '2024',
    role: 'Solo',
    status: 'Shipped',
    colors: ['#4a2a1a', '#3e1f0f'],
    demoUrl: '#',
    sourceUrl: '#',
  },
  {
    id: 'pixelmood',
    name: 'PixelMood',
    initials: 'PM',
    desc: 'AI-powered mood board generator. Type a vibe, get a curated visual palette.',
    descRu: 'AI-генератор мудбордов. Опишите настроение — получите подборку визуального стиля.',
    stack: ['Next.js', 'OpenAI API', 'Tailwind', 'Vercel AI'],
    type: 'pet',
    year: '2024',
    role: 'Solo',
    status: 'Shipped',
    colors: ['#4a1a3a', '#2a0f2e'],
    demoUrl: '#',
    sourceUrl: '#',
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getLocalizedProject(project: Project, locale: string): Project {
  if (locale !== 'ru') return project
  return {
    ...project,
    desc: project.descRu ?? project.desc,
    longDesc: project.longDescRu ?? project.longDesc,
    features: project.featuresRu ?? project.features,
  }
}

export function getLocalizedProjects(locale: string): Project[] {
  return projects.map((p) => getLocalizedProject(p, locale))
}

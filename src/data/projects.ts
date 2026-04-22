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
    id: 'audio-trimmer',
    name: 'Silence-Aware Audio Trimmer',
    initials: 'AT',
    desc: 'Privacy-first web tool for trimming speech recordings by signal analysis only. Works fully in the browser, detects silence via RMS amplitude, and exports WAV.',
    descRu: 'Приватный браузерный инструмент для обрезки речевых записей по RMS-анализу — без загрузки на сервер.',
    longDesc: 'A client-side audio processor focused on improving speech flow by reducing pauses while keeping the result natural. This is not a transcription or AI speech-to-text product: it decodes local audio in the browser, computes RMS over short windows, classifies segments as speech, silence, or soft-silence, then rebuilds the output timeline with pause compression rules. All processing happens locally and the final audio exports as WAV.',
    longDescRu: 'Клиентский аудиопроцессор для улучшения темпа речи путём сокращения пауз с сохранением естественности звучания. Декодирует аудио прямо в браузере, вычисляет RMS по коротким окнам, классифицирует сегменты как речь, тишину или мягкую тишину, затем перестраивает временну́ю линию с настраиваемыми правилами сжатия. Экспортирует результат как WAV без обращения к серверу.',
    stack: ['React', 'TypeScript', 'Vite', 'Web Audio API'],
    type: 'pet',
    year: '2025',
    role: 'Solo',
    status: 'Shipped',
    colors: ['#0a2030', '#061828'],
    image: '/projects/audio-trimmer.png',
    features: [
      'Fully client-side — no uploads, no backend, no data leaves the browser',
      'WAV and MP3 input with AudioContext decoding',
      'RMS-based amplitude analysis over 15 ms windows',
      'Segment classification: speech, silence, soft-silence',
      'Configurable pause compression: long/medium silence → target pause length',
      'A/B playback to compare original vs processed audio',
      'Clickable waveform with highlighted removed and compressed regions',
      'Client-side WAV export via OfflineAudioContext',
    ],
    featuresRu: [
      'Полностью клиентская обработка — данные не покидают браузер',
      'Поддержка WAV и MP3 через AudioContext',
      'RMS-анализ амплитуды по окнам 15 мс',
      'Классификация сегментов: речь, тишина, мягкая тишина',
      'Настраиваемое сжатие пауз: длинная/средняя тишина → целевая длина паузы',
      'A/B воспроизведение: оригинал vs обработанное',
      'Кликабельная форма волны с подсветкой удалённых и сжатых участков',
      'Экспорт WAV через OfflineAudioContext',
    ],
    demoUrl: 'https://www.azamatdev.com/audio-trimmer',
    sourceUrl: null,
  },
  {
    id: 'decision-simulator',
    name: 'Decision Simulator - What If? Engine',
    initials: 'DS',
    desc: 'Frontend-only micro-SaaS style app for scenario modeling. Tweak assumptions and instantly compare outcomes across timelines, charts, and side-by-side views.',
    descRu: 'Движок сценарного моделирования. Меняйте параметры и мгновенно смотрите результаты по нескольким временным горизонтам с симуляцией Монте-Карло и тепловыми картами чувствительности.',
    longDesc: 'A frontend-only decision exploration tool built around the idea that most calculators give a single answer while real decisions need scenario space. The app supports baseline, conservative, and optimistic layers, timeline events for shocks and parameter shifts, target milestones, confidence signals, Monte Carlo uncertainty simulation, current-vs-candidate comparisons, and sensitivity heatmaps. Two modules cover savings and investment growth plus productivity time ROI. All state persists in localStorage; no backend required.',
    longDescRu: 'Фронтендовый инструмент для исследования решений: большинство калькуляторов дают один ответ — этот даёт пространство возможностей. Два модуля (рост сбережений и ROI продуктивности) с общей архитектурой: слои сценариев, события на временной шкале, контрольные точки, сравнение текущего и альтернативного вариантов. Данные хранятся в localStorage, бэкенд не нужен.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Recharts'],
    type: 'pet',
    year: '2025',
    role: 'Solo',
    status: 'Shipped',
    colors: ['#12103a', '#0c0a28'],
    image: '/projects/decision-simulator.png',
    features: [
      'Scenario layers: baseline vs conservative vs optimistic with ±2% / ±5% deltas',
      'Monte Carlo simulation with P10/P50/P90 percentile bands and success probability',
      'Timeline events: contribution changes, market shocks, return-rate regime shifts',
      'Sensitivity heatmap to visualize which levers move the outcome most',
      'Current vs candidate comparison cards for fast trade-off decisions',
      'Productivity time ROI module: models how daily habits compound into saved hours',
      'Saved views with JSON export/import and custom presets',
      'Fully client-side — all state in localStorage, no backend',
    ],
    featuresRu: [
      'Слои сценариев: базовый / консервативный / оптимистичный с дельтами ±2% / ±5%',
      'Симуляция Монте-Карло с перцентилями P10/P50/P90 и вероятностью успеха',
      'События на временной шкале: изменение взносов, рыночные шоки, смена режима доходности',
      'Тепловая карта чувствительности — видно, какие параметры влияют больше всего',
      'Сравнение текущего и альтернативного вариантов',
      'Модуль ROI продуктивности: как ежедневные привычки накапливаются в сэкономленные часы',
      'Сохранённые сценарии с JSON-экспортом и пользовательскими пресетами',
      'Полностью клиентское приложение — данные в localStorage, бэкенд не нужен',
    ],
    demoUrl: 'https://www.azamatdev.com/decision-simulator',
    sourceUrl: null,
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

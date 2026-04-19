# azamat.dev — Personal Portfolio

Portfolio site for Azamat Altymyshev, Senior Fullstack Developer. Built with Next.js 16 App Router, next-intl (EN/RU), and plain CSS with custom properties. No UI framework, no Tailwind.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2 (App Router, React 19) |
| i18n | next-intl 4 — `/en` and `/ru` routes |
| Styling | Global CSS + CSS custom properties |
| Fonts | Geist Sans + JetBrains Mono via `next/font` |
| Icons | `simple-icons` (brand SVGs) |
| Email | Nodemailer + Gmail SMTP (App Password) |
| Language | TypeScript strict |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout (fonts)
│   ├── api/contact/route.ts        # Contact form email endpoint
│   └── [locale]/
│       ├── layout.tsx              # Header + Footer
│       ├── page.tsx                # Home
│       ├── projects/page.tsx       # Projects grid + filter
│       ├── projects/[slug]/page.tsx# Project detail
│       ├── about/page.tsx          # About + experience + stack
│       └── contact/page.tsx        # Contact links + form
├── components/
│   ├── Header/                     # Nav + locale switcher + mobile menu
│   ├── Footer/                     # Footer with socials
│   ├── Terminal/                   # Typewriter terminal animation (client)
│   ├── ProjectCard/                # Full + compact card variants
│   ├── ContactForm/                # Contact form (client, hits /api/contact)
│   └── TechIcon/                   # Brand SVG icons from simple-icons
├── data/
│   ├── projects.ts                 # Project list with EN/RU content
│   ├── experience.ts               # Timeline + tech stack with EN/RU
│   └── site.ts                     # Contact links, footer socials
├── i18n/
│   ├── routing.ts                  # next-intl locales config
│   └── messages/en.json|ru.json    # All UI translations
├── styles/globals.css              # Single CSS file — vars, layout, components
└── middleware.ts                   # next-intl locale detection + redirect
```

## Getting Started

```bash
npm install
```

Create `.env.local`:

```env
SMTP_USER=your@gmail.com
SMTP_PASS=your-gmail-app-password
```

> Gmail App Password: Google Account → Security → 2-Step Verification → App passwords

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en` by default.

## Available Routes

| Route | Description |
|---|---|
| `/en` / `/ru` | Home — terminal animation, featured projects, about teaser |
| `/en/projects` | All projects with type filter (Commercial / Pet) |
| `/en/projects/[slug]` | Project detail page |
| `/en/about` | Bio, work experience timeline, tech stack |
| `/en/contact` | Contact cards + contact form |

## i18n

All user-facing strings live in `src/i18n/messages/en.json` and `ru.json`. Project descriptions, features, and long descriptions also have `descRu`/`featuresRu` fields in `src/data/projects.ts`. The `getLocalizedProjects(locale)` helper handles merging.

Locale is detected from the URL prefix. Default locale is `en` (no redirect). Russian is at `/ru/...`.

## Adding a Project

In `src/data/projects.ts`, add an entry to the `projects` array:

```ts
{
  id: 'my-project',          // used as URL slug for detail page
  name: 'My Project',
  initials: 'MP',
  desc: 'Short description (EN)',
  descRu: 'Short description (RU)',
  stack: ['React', 'TypeScript'],
  type: 'commercial',        // 'pet' | 'commercial'
  year: '2024',
  role: 'Senior Frontend Developer',
  status: 'Production',
  colors: ['#1a1a2e', '#2a1a3e'], // gradient for card header
  image: '/projects/my-project.png', // place in public/projects/
  demoUrl: 'https://example.com',    // external → card links here
  sourceUrl: null,
}
```

If `demoUrl` is a real URL (not `'#'`), clicking the card opens it in a new tab. Otherwise it links to the detail page.

## Contact Form

POST to `/api/contact` with `{ name, email, message }`. Sends an email via Gmail SMTP to the address in `SMTP_USER`. Uses `replyTo` set to the sender's email.

## Build

```bash
npm run build
npm start
```

TypeScript check:

```bash
npx tsc --noEmit
```

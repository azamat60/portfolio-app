export type Locale = 'en' | 'ru'

export type ProjectTag = 'commercial' | 'pet'

export interface Project {
  slug: string
  tag: ProjectTag
  initials: string
  gradient: [string, string]
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  title: { en: string; ru: string }
  description: { en: string; ru: string }
  longDescription: { en: string; ru: string }
}

export interface ExperienceEntry {
  company: string
  role: { en: string; ru: string }
  period: { start: string; end: string | null }
  description: { en: string; ru: string }
  tech: string[]
}

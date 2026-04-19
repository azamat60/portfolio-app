'use client'

import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { getLocalizedProjects } from '@/data/projects'

type Filter = 'all' | 'pet' | 'commercial'

export default function ProjectsPage() {
  const t = useTranslations('projects')
  const locale = useLocale()
  const [filter, setFilter] = useState<Filter>('all')

  const allProjects = getLocalizedProjects(locale)

  const counts = {
    all: allProjects.length,
    pet: allProjects.filter((p) => p.type === 'pet').length,
    commercial: allProjects.filter((p) => p.type === 'commercial').length,
  }

  const filtered = filter === 'all' ? allProjects : allProjects.filter((p) => p.type === filter)

  return (
    <div className="page">
      <section className="page-title">
        <div className="container">
          <div className="mono-prefix"><span className="accent">$</span> ls ./projects</div>
          <h1>{t('title')}</h1>
          <p>{t('intro')}</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section-head projects-head">
            <div>
              <div className="eyebrow">/filter</div>
              <h2>{t('title')}</h2>
              <p>{t('filterSub')}</p>
            </div>
          </div>
          <div className="filters" style={{ marginBottom: 32 }}>
            {(['all', 'pet', 'commercial'] as Filter[]).map((key) => (
              <button
                key={key}
                className={`filter-btn${filter === key ? ' active' : ''}`}
                onClick={() => setFilter(key)}
              >
                {t(key)} <span className="filter-count">{counts[key]}</span>
              </button>
            ))}
          </div>
          <div className="grid grid-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} locale={locale} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

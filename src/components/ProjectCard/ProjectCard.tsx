'use client'

import Link from 'next/link'
import type { Project } from '@/data/projects'
import GitHubButton from '@/components/GitHubButton/GitHubButton'

interface Props {
  project: Project
  locale: string
  delay?: number
  compact?: boolean
}

function cardHref(project: Project, locale: string): string {
  if (project.demoUrl && project.demoUrl !== '#') return project.demoUrl
  return `/${locale}/projects/${project.id}`
}

export default function ProjectCard({ project, locale, delay = 0, compact = false }: Props) {
  const href = cardHref(project, locale)
  const isExternal = href.startsWith('http')

  if (compact) {
    return (
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="card project-card-compact reveal"
        style={{ '--c1': project.colors[0], '--c2': project.colors[1], animationDelay: `${delay}ms` } as React.CSSProperties}
      >
        <div
          className="pcc-preview"
          style={project.image ? {
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          } : undefined}
        >
          <span className="pcc-initials">{project.initials}</span>
          <div className="pcc-preview-meta">
            <span className={`project-tag ${project.type}`}>
              {project.type === 'pet' ? 'Pet' : 'Commercial'}
            </span>
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="pcc-body">
          <h3 className="pcc-name">{project.name}</h3>
          <p className="pcc-desc">{project.desc}</p>
          <div className="pcc-pills">
            {project.stack.slice(0, 3).map((s) => (
              <span key={s} className="pcc-pill">{s}</span>
            ))}
            {project.stack.length > 3 && (
              <span className="pcc-pill">+{project.stack.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <article
      className="card project-card reveal"
      style={{ '--c1': project.colors[0], '--c2': project.colors[1], animationDelay: `${delay}ms` } as React.CSSProperties}
    >
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="project-card-main"
      >
      <div
        className={`project-thumb${project.image ? ' has-image' : ''}`}
        style={project.image ? {
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        } : undefined}
        >
          <span className={`project-tag ${project.type}`}>
            {project.type === 'pet' ? 'Pet' : 'Commercial'}
          </span>
          <span className="project-initials">{project.initials}</span>
        </div>
      <div className="project-body">
        <div className="project-title">
          <h3 className="project-main-link">{project.name}</h3>
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="project-desc">{project.desc}</p>
        <div className="project-pills">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="pill">{s}</span>
          ))}
          {project.stack.length > 4 && (
            <span className="pill">+{project.stack.length - 4}</span>
          )}
        </div>
      </div>
      </Link>
      {project.sourceUrl && (
        <GitHubButton href={project.sourceUrl} variant="card" />
      )}
    </article>
  )
}

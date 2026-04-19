import { setRequestLocale, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects, getProjectById, getLocalizedProject } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export default async function ProjectDetailPage(
  props: PageProps<'/[locale]/projects/[slug]'>
) {
  const { locale, slug } = await props.params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'projects' })
  const raw = getProjectById(slug)

  if (!raw) notFound()

  const project = getLocalizedProject(raw, locale)

  const desc = project.longDesc || project.desc
  const features = project.features || [
    'Clean component architecture with reusable primitives',
    'Full TypeScript coverage with strict mode',
    'Responsive layout tested across devices',
    'Accessible by default — keyboard nav and semantic markup',
  ]

  const nextProject = projects[(projects.findIndex((p) => p.id === raw.id) + 1) % projects.length]

  return (
    <div className="page">
      <div className="container" style={{ paddingTop: 48 }}>
        <div className="breadcrumb">
          <Link href={`/${locale}/projects`}>{t('backToProjects')}</Link>
          <span className="sep">/</span>
          <span className="current">{project.name.toLowerCase()}</span>
        </div>

        <div className="project-hero">
          <div>
            <span className={`project-tag ${project.type}`} style={{ position: 'static', display: 'inline-block', marginBottom: 16, whiteSpace: 'nowrap' }}>
              {project.type === 'pet' ? 'Pet' : 'Commercial'}
            </span>
            <h1>{project.name}</h1>
            <p className="lead">{desc}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {project.demoUrl && (
                <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                  {t('viewLiveDemo')}
                </a>
              )}
              {project.sourceUrl && (
                <a className="btn btn-secondary" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>
                  {t('source')}
                </a>
              )}
            </div>
          </div>
          <div className="proj-meta-card">
            <div className="meta-row"><span className="k">Year</span><span className="v">{project.year}</span></div>
            <div className="meta-row"><span className="k">Role</span><span className="v">{project.role}</span></div>
            <div className="meta-row"><span className="k">Status</span><span className="v" style={{ color: 'var(--accent)' }}>● {project.status}</span></div>
            <div className="meta-row"><span className="k">Type</span><span className="v">{project.type === 'pet' ? 'Pet' : 'Commercial'}</span></div>
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.stack.map((s) => <span key={s} className="pill">{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="screenshots" style={{ '--c1': project.colors[0], '--c2': project.colors[1] } as React.CSSProperties}>
          {project.image ? (
            <div className="shot tall" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center top', padding: 0 }}>
              <span className="shot-label" style={{ position: 'absolute', bottom: 12, left: 12 }}>{project.name}</span>
            </div>
          ) : (
            <div className="shot tall">
              <span className="shot-label">{project.name} · main view</span>
            </div>
          )}
          <div className="shot"><span className="shot-label">Detail view</span></div>
          <div className="shot"><span className="shot-label">Empty state</span></div>
        </div>

        <div className="content-grid">
          <div className="prose">
            <h3>{t('overview')}</h3>
            <p>{desc}</p>
            <p>{t('overviewBody')}</p>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--mono)', fontSize: 18, color: 'var(--accent)', fontWeight: 500, marginBottom: 12 }}>{t('features')}</h3>
            <ul className="feature-list">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 64, padding: 32, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div className="eyebrow">{t('next')}</div>
            <h3 style={{ fontSize: 22, marginBottom: 4 }}>{t('nextProject')}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>{t('keepBrowsing')}</p>
          </div>
          <Link href={`/${locale}/projects/${nextProject.id}`} className="btn btn-secondary">
            {t('viewNextProject')}
          </Link>
        </div>
      </div>
    </div>
  )
}

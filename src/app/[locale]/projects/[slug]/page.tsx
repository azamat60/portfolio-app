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

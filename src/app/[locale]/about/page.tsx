import { setRequestLocale, getTranslations } from 'next-intl/server'
import { getExperience, getTechStack } from '@/data/experience'
import TechIcon from '@/components/TechIcon/TechIcon'

export default async function AboutPage(props: PageProps<'/[locale]/about'>) {
  const { locale } = await props.params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'about' })
  const experience = getExperience(locale)
  const techStack = getTechStack(locale)

  return (
    <div className="page">
      <section className="page-title">
        <div className="container">
          <div className="mono-prefix"><span className="accent">$</span> cat about.md</div>
          <h1>{t('title')}</h1>
          <p>{t('intro')}</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 48, alignItems: 'start' }}>
            <div className="avatar-block" style={{ maxWidth: 280 }}>
              <span className="initials">AZ</span>
            </div>
            <div>
              <div className="eyebrow">/bio</div>
              <h2 style={{ marginBottom: 20 }}>{t('bioHeading')}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, marginBottom: 16, lineHeight: 1.7 }}>
                {t('bio0')}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, marginBottom: 16, lineHeight: 1.7 }}>
                {t('bio1')}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.7 }}>
                {t('bio2')}
              </p>

              <div style={{ display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{t('basedIn')}</div>
                  <div style={{ fontSize: 15, color: 'var(--text-strong)' }}>{t('basedInValue')}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{t('experience')}</div>
                  <div style={{ fontSize: 15, color: 'var(--text-strong)' }}>{t('experienceValue')}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{t('languages')}</div>
                  <div style={{ fontSize: 15, color: 'var(--text-strong)' }}>{t('languagesValue')}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{t('availability')}</div>
                  <div style={{ fontSize: 15, color: 'var(--accent)' }}>● {t('availabilityValue')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <div>
              <div className="eyebrow">/experience</div>
              <h2>{t('experienceTitle')}</h2>
            </div>
          </div>
          <div className="timeline">
            {experience.map((e, i) => (
              <div key={i} className={`tl-entry${e.current ? ' current' : ''}`}>
                <div className="tl-date">
                  {e.date}
                  {e.current && <div className="tl-current">current</div>}
                </div>
                <div className="tl-role">
                  <h3>{e.role}</h3>
                  <div className="tl-company">@ {e.company}</div>
                  <p className="tl-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <div>
              <div className="eyebrow">/stack</div>
              <h2>{t('techStack')}</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: 8 }}>{t('techStackSub')}</p>
            </div>
          </div>
          {Object.entries(techStack).map(([group, items]) => (
            <div key={group} className="tech-group">
              <div className="tech-group-label">{group}</div>
              <div className="tech-grid">
                {items.map((item) => (
                  <div key={item.name} className="tech-item">
                    <span className="tech-glyph">
                      <TechIcon name={item.name} size={20} />
                    </span>
                    <span className="tech-name">{item.name}</span>
                    {item.years && <span className="tech-years">{item.years}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

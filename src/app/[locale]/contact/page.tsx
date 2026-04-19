import { setRequestLocale, getTranslations } from 'next-intl/server'
import ContactForm from '@/components/ContactForm/ContactForm'
import { contactLinks } from '@/data/site'

function ContactIcon({ label }: { label: string }) {
  switch (label) {
    case 'LinkedIn':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.46v6.28zM5.34 7.43a2.07 2.07 0 0 1-2.07-2.07 2.07 2.07 0 1 1 2.07 2.07zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      )
    case 'Phone':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.06 21 3 13.94 3 5a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
        </svg>
      )
    case 'Location':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Zm0-8.5A3.5 3.5 0 1 1 12 6a3.5 3.5 0 0 1 0 7.5Z" />
        </svg>
      )
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 4h20v16H2V4zm2 2v.01L12 13l8-6.99V6H4zm16 2.24-8 7-8-7V18h16V8.24z" />
        </svg>
      )
  }
}

export default async function ContactPage(props: PageProps<'/[locale]/contact'>) {
  const { locale } = await props.params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <div className="page">
      <section className="page-title">
        <div className="container">
          <div className="mono-prefix"><span className="accent">$</span> echo $CONTACT</div>
          <h1>{t('title')}</h1>
          <p>{t('intro')}</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="contact-layout">
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>/direct</div>
              <div className="contact-cards">
                {contactLinks.map((contact) => {
                  const external = !contact.href.startsWith('tel:')
                  const labelKey = `card${contact.label}` as 'cardEmail' | 'cardPhone' | 'cardLinkedIn' | 'cardLocation'

                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="contact-card"
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                    >
                      <div className="contact-icon"><ContactIcon label={contact.label} /></div>
                      <div className="contact-info">
                        <div className="contact-label">{t(labelKey)}</div>
                        <div className="contact-value">{contact.value}</div>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )
                })}
              </div>

              <div style={{ marginTop: 32, padding: 20, background: 'var(--surface)', border: '1px dashed var(--border)', borderRadius: 'var(--radius)', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                <div style={{ color: 'var(--accent)', marginBottom: 6 }}>{'// status.txt'}</div>
                {t('statusNote').split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < 2 && <br />}
                  </span>
                ))}
              </div>
            </div>

            <ContactForm
              sendMessage={t('sendMessage')}
              sent={t('sent')}
              namePlaceholder={t('namePlaceholder')}
              emailPlaceholder={t('emailPlaceholder')}
              messagePlaceholder={t('messagePlaceholder')}
              sendBtn={t('sendBtn')}
              sending={t('sending')}
              error={t('error')}
              nameLabel={t('nameLabel')}
              emailLabel={t('emailLabel')}
              messageLabel={t('messageLabel')}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

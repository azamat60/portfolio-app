import { getTranslations } from 'next-intl/server'
import { footerSocials } from '@/data/site'

const ICONS = {
  LinkedIn: { icon: <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.46v6.28zM5.34 7.43a2.07 2.07 0 0 1-2.07-2.07 2.07 2.07 0 1 1 2.07 2.07zM7.12 20.45H3.56V9h3.56v11.45z" />, fill: true },
  Email: { icon: <path d="M2 4h20v16H2V4zm2 2v.01L12 13l8-6.99V6H4zm16 2.24-8 7-8-7V18h16V8.24z" />, fill: true },
  Phone: { icon: <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.06 21 3 13.94 3 5a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />, fill: true },
}

export default async function Footer() {
  const t = await getTranslations('footer')

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>{t('copy')}</div>
        <div className="footer-socials">
          {footerSocials.map(({ label, href }) => {
            const external = !href.startsWith('tel:')
            const iconData = ICONS[label as keyof typeof ICONS]

            return (
              <a
                key={label}
                className="social-btn"
                href={href}
                aria-label={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={iconData.fill ? 'currentColor' : 'none'}>
                  {iconData.icon}
                </svg>
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

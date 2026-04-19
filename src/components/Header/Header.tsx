'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

interface Props {
  locale: string
}

export default function Header({ locale }: Props) {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: `/${locale}`, id: 'home', label: t('home') },
    { href: `/${locale}/projects`, id: 'projects', label: t('projects') },
    { href: `/${locale}/about`, id: 'about', label: t('about') },
    { href: `/${locale}/contact`, id: 'contact', label: t('contact') },
  ]

  function isActive(href: string, id: string) {
    if (id === 'home') return pathname === `/${locale}` || pathname === `/${locale}/`
    return pathname.startsWith(href)
  }

  function switchLocale(lang: string) {
    setMenuOpen(false)
    const newPath = pathname.replace(`/${locale}`, `/${lang}`)
    router.push(newPath)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href={`/${locale}`} className="logo">
          <span className="logo-dot" />
          <span>azamat.dev</span>
        </Link>

        <nav className="nav">
          {navLinks.map(({ href, id, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${isActive(href, id) ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-right">
          <div className="lang-toggle">
            <button
              className={locale === 'en' ? 'active' : ''}
              onClick={() => switchLocale('en')}
            >
              EN
            </button>
            <button
              className={locale === 'ru' ? 'active' : ''}
              onClick={() => switchLocale('ru')}
            >
              RU
            </button>
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Menu" aria-expanded={menuOpen}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="container mobile-nav">
          {navLinks.map(({ href, id, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${isActive(href, id) ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

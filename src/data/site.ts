export interface ContactLink {
  label: 'Email' | 'Phone' | 'LinkedIn' | 'Location'
  value: string
  href: string
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'aza.alt.com@gmail.com',
    href: 'mailto:aza.alt.com@gmail.com',
  },
  {
    label: 'Phone',
    value: '+996 559 773 283',
    href: 'tel:+996559773283',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/altymyshev',
    href: 'https://www.linkedin.com/in/altymyshev/',
  },
  {
    label: 'Location',
    value: 'Kyrgyzstan',
    href: 'https://www.google.com/maps/place/Kyrgyzstan',
  },
]

export const footerSocials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/altymyshev/' },
  { label: 'Email', href: 'mailto:aza.alt.com@gmail.com' },
  { label: 'Phone', href: 'tel:+996559773283' },
]

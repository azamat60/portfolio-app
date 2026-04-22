import { siGithub } from 'simple-icons'

interface Props {
  href: string
  label?: string
  variant?: 'default' | 'card'
}

export default function GitHubButton({ href, label = 'GitHub', variant = 'default' }: Props) {
  return (
    <a className={`github-button${variant === 'card' ? ' github-button-card' : ''}`} href={href} target="_blank" rel="noopener noreferrer">
      <svg className="github-button-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d={siGithub.path} />
      </svg>
      <span>{label}</span>
    </a>
  )
}

import {
  siJavascript, siReact, siTypescript, siRedux, siNextdotjs, siHtml5,
  siMui, siApollographql, siMysql, siPostgresql, siMongodb, siNodedotjs,
  siGit, siWebpack, siJest, siAnthropic, siGithubcopilot, siCursor,
} from 'simple-icons'

// OpenAI not yet in simple-icons — inline path
const siOpenaiCustom = {
  hex: '412991',
  path: 'M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.24 14.404A4.5 4.5 0 0 1 2.34 7.896zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.578 2.64a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.395-.716zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.576-2.635a4.5 4.5 0 0 1 6.682 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z',
}

const ICON_MAP: Record<string, { hex: string; path: string }> = {
  JavaScript:      { hex: siJavascript.hex,    path: siJavascript.path },
  React:           { hex: siReact.hex,          path: siReact.path },
  'React Native':  { hex: siReact.hex,          path: siReact.path },
  TypeScript:      { hex: siTypescript.hex,     path: siTypescript.path },
  'Redux Toolkit': { hex: siRedux.hex,          path: siRedux.path },
  'Next.js':       { hex: 'ffffff',             path: siNextdotjs.path },
  'HTML/CSS':      { hex: siHtml5.hex,          path: siHtml5.path },
  MUI:             { hex: siMui.hex,            path: siMui.path },
  'Apollo GraphQL':{ hex: siApollographql.hex,  path: siApollographql.path },
  MySQL:           { hex: siMysql.hex,          path: siMysql.path },
  PostgreSQL:      { hex: siPostgresql.hex,     path: siPostgresql.path },
  MongoDB:         { hex: siMongodb.hex,        path: siMongodb.path },
  'Node.js':       { hex: siNodedotjs.hex,      path: siNodedotjs.path },
  Git:             { hex: siGit.hex,            path: siGit.path },
  Webpack:         { hex: siWebpack.hex,        path: siWebpack.path },
  Jest:            { hex: siJest.hex,           path: siJest.path },
  // AI section
  'Claude Code':   { hex: siAnthropic.hex,      path: siAnthropic.path },
  'Anthropic API': { hex: siAnthropic.hex,      path: siAnthropic.path },
  Cursor:          { hex: '000000',             path: siCursor.path },
  'GitHub Copilot':{ hex: siGithubcopilot.hex,  path: siGithubcopilot.path },
  'OpenAI API':    { hex: siOpenaiCustom.hex,   path: siOpenaiCustom.path },
  ChatGPT:         { hex: siOpenaiCustom.hex,   path: siOpenaiCustom.path },
}

interface Props {
  name: string
  size?: number
}

export default function TechIcon({ name, size = 24 }: Props) {
  const icon = ICON_MAP[name]
  if (!icon) return null

  const color = `#${icon.hex}`
  const isDark = icon.hex === '000000' || icon.hex === '191919'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isDark ? 'currentColor' : color}
      style={{ flexShrink: 0 }}
      aria-label={name}
      role="img"
    >
      <path d={icon.path} />
    </svg>
  )
}

import type { ReactNode } from 'react'

export interface PageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
}

/**
 * Shared page shell: renders a title and optional subtitle, then stacks the
 * page content (plots, cards, …) vertically beneath them.
 */
export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <main className="page">
      <header className="page-header">
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </header>
      {children}
    </main>
  )
}

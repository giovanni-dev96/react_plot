import type { ReactNode } from 'react'

export interface CardGridProps {
  children: ReactNode
}

/** Flex-wrap container that lays out any number of Cards responsively. */
export default function CardGrid({ children }: CardGridProps) {
  return <div className="card-grid">{children}</div>
}

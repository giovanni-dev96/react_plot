import type { ReactNode } from 'react'
import OverviewPage from './pages/OverviewPage'
import CorrelationsPage from './pages/CorrelationsPage'
import StatisticsPage from './pages/StatisticsPage'

export interface PageDef {
  path: string
  label: string
  element: ReactNode
}

/**
 * Single source of truth for pages. Add a page here and both the navbar and the
 * router pick it up automatically.
 */
export const pages: PageDef[] = [
  { path: '/', label: 'Overview', element: <OverviewPage /> },
  { path: '/correlations', label: 'Correlations', element: <CorrelationsPage /> },
  { path: '/statistics', label: 'Statistics', element: <StatisticsPage /> },
]

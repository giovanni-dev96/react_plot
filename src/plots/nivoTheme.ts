import { useEffect, useState } from 'react'
import type { PartialTheme } from '@nivo/theming'

/** Read a CSS custom property from :root, with a fallback. */
function cssVar(name: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
  return value || fallback
}

/** Build a Nivo theme from the template's CSS variables (src/index.css). */
function buildTheme(): PartialTheme {
  const text = cssVar('--text', '#6b6375')
  const textStrong = cssVar('--text-h', '#08060d')
  const border = cssVar('--border', '#e5e4e7')
  const bg = cssVar('--bg', '#ffffff')

  return {
    text: { fill: text, fontFamily: cssVar('--sans', 'system-ui, sans-serif') },
    axis: {
      domain: { line: { stroke: border } },
      ticks: {
        line: { stroke: border },
        text: { fill: text, fontSize: 14 },
      },
      legend: { text: { fill: textStrong, fontSize: 14, fontWeight: 600 } },
    },
    grid: { line: { stroke: border, strokeDasharray: '3 4' } },
    legends: { text: { fill: text, fontSize: 12 } },
    labels: { text: { fill: textStrong, fontSize: 12 } },
    tooltip: {
      container: {
        background: bg,
        color: textStrong,
        border: `1px solid ${border}`,
        borderRadius: 8,
        fontSize: 14,
      },
    },
  }
}

/**
 * Returns a Nivo theme derived from the template's CSS variables and keeps it
 * in sync with the OS light/dark preference so chart colors follow the page.
 */
export function useNivoTheme(): PartialTheme {
  const [theme, setTheme] = useState<PartialTheme>(buildTheme)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const update = () => setTheme(buildTheme())
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return theme
}

import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import type { ScatterPlotRawSerie, ScatterPlotDatum } from '@nivo/scatterplot'
import type { CartesianMarkerProps } from '@nivo/core'
import { useNivoTheme, usePrefersDark } from '../../plots/nivoTheme'

export interface ScatterPlotChartProps {
  /** Series of points. Each serie has an `id` and a list of `{ x, y }` points. */
  data: Array<ScatterPlotRawSerie<ScatterPlotDatum>>
  /** Optional color override; falls back to the chart's internal palette. */
  colors?: string[]
  /** Optional axis legend text shown on the bottom. */
  axisBottomLegend?: string
  /** Optional axis legend text shown on the left. */
  axisLeftLegend?: string
  /** Draws a vertical dotted threshold line at this x value. */
  xThreshold?: number
  /** Draws a horizontal dotted threshold line at this y value. */
  yThreshold?: number
  /** Color of the threshold lines. Defaults to the theme accent. */
  thresholdColor?: string
}

// Dotted threshold line in the given color; kept dashed for a "reference" feel.
const thresholdLineStyle = (color: string): React.CSSProperties => ({
  stroke: color,
  strokeWidth: 2,
  strokeDasharray: '4 6',
})

/**
 * Example data for the `data` prop. Two study cohorts plotting hours studied
 * (x) against exam score (y) — swap this out for your own series on the page.
 */
export const scatterPlotExampleData: Array<
  ScatterPlotRawSerie<ScatterPlotDatum>
> = [
  {
    id: 'Cohort A',
    data: [
      { x: 1, y: 42 },
      { x: 2, y: 55 },
      { x: 3, y: 58 },
      { x: 4, y: 66 },
      { x: 5, y: 71 },
      { x: 6, y: 78 },
      { x: 7, y: 83 },
      { x: 8, y: 88 },
    ],
  },
  {
    id: 'Cohort B',
    data: [
      { x: 1, y: 38 },
      { x: 2, y: 44 },
      { x: 3, y: 51 },
      { x: 4, y: 54 },
      { x: 5, y: 63 },
      { x: 6, y: 69 },
      { x: 7, y: 72 },
      { x: 8, y: 80 },
    ],
  },
]

export default function ScatterPlotChart({
  data,
  colors,
  axisBottomLegend,
  axisLeftLegend,
  xThreshold,
  yThreshold,
  thresholdColor = 'var(--accent)',
}: ScatterPlotChartProps) {
  const theme = useNivoTheme()
  // 'multiply' shows overlap density on light backgrounds but darkens points to
  // near-black on a dark background, so fall back to 'normal' in dark mode.
  const prefersDark = usePrefersDark()

  // A vertical line at `xThreshold` and a horizontal one at `yThreshold`
  // split the plot into four quadrants. Each is optional.
  const lineStyle = thresholdLineStyle(thresholdColor)
  const markers: CartesianMarkerProps[] = [
    ...(xThreshold != null
      ? [{ axis: 'x' as const, value: xThreshold, lineStyle }]
      : []),
    ...(yThreshold != null
      ? [{ axis: 'y' as const, value: yThreshold, lineStyle }]
      : []),
  ]

  return (
    <ResponsiveScatterPlot
      data={data}
      margin={{ top: 24, right: 140, bottom: 60, left: 64 }}
      xScale={{ type: 'linear', min: 'auto', max: 'auto' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
      colors={colors}
      nodeSize={10}
      blendMode={prefersDark ? 'normal' : 'multiply'}
      theme={theme}
      markers={markers}
      axisBottom={{
        legend: axisBottomLegend,
        legendPosition: 'middle',
        legendOffset: 46,
      }}
      axisLeft={{
        legend: axisLeftLegend,
        legendPosition: 'middle',
        legendOffset: -52,
      }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 128,
          itemWidth: 100,
          itemHeight: 22,
          symbolSize: 14,
          symbolShape: 'circle',
        },
      ]}
      role="img"
      ariaLabel="Scatter plot of exam score against hours studied by cohort"
    />
  )
}

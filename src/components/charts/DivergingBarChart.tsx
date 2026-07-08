import { ResponsiveBar } from '@nivo/bar'
import type { ComputedDatum } from '@nivo/bar'
import { useNivoTheme } from '../../plots/nivoTheme'

export interface DivergingBarChartProps {
  /** Rows of data. Each row holds the index field plus a numeric `value`. */
  data: Array<Record<string, string | number>>
  /** The field each row is indexed by, e.g. 'metric'. */
  indexBy: string
  /** The numeric field to plot. Defaults to 'value'. */
  valueKey?: string
  /** Color for negative bars (drawn to the left of zero). */
  negativeColor?: string
  /** Color for positive bars (drawn to the right of zero). */
  positiveColor?: string
  /** Optional axis legend text shown below. */
  axisBottomLegend?: string
}

// Styling lives with the chart; data is supplied by the page that uses it.
const defaultNegativeColor = '#ef4444' // red — negative, points left
const defaultPositiveColor = '#3b82f6' // blue — positive, points right

/**
 * Compute a symmetric-friendly value range from the data so the axis always
 * spans the true minimum and maximum, includes zero, and leaves a little
 * breathing room. Returns whole-number bounds that update as the data changes.
 */
function valueRange(
  data: DivergingBarChartProps['data'],
  valueKey: string,
): { min: number; max: number } {
  const values = data.map((row) => Number(row[valueKey]) || 0)
  // Always keep zero in view so negative and positive bars share a baseline.
  const rawMin = Math.min(0, ...values)
  const rawMax = Math.max(0, ...values)
  // ~8% padding on the widest side keeps the longest bar off the edge.
  const pad = Math.max(Math.abs(rawMin), Math.abs(rawMax)) * 0.08 || 1
  return {
    min: Math.floor(rawMin - (rawMin < 0 ? pad : 0)),
    max: Math.ceil(rawMax + (rawMax > 0 ? pad : 0)),
  }
}

export default function DivergingBarChart({
  data,
  indexBy,
  valueKey = 'value',
  negativeColor = defaultNegativeColor,
  positiveColor = defaultPositiveColor,
  axisBottomLegend,
}: DivergingBarChartProps) {
  const theme = useNivoTheme()
  const { min, max } = valueRange(data, valueKey)

  return (
    <ResponsiveBar
      data={data}
      keys={[valueKey]}
      indexBy={indexBy}
      layout="horizontal"
      // Dynamic range: axis spans the data's min/max (with zero always in view).
      valueScale={{ type: 'linear', min, max }}
      margin={{ top: 24, right: 32, bottom: 60, left: 120 }}
      padding={0.32}
      colors={(bar: ComputedDatum<Record<string, string | number>>) =>
        Number(bar.value) < 0 ? negativeColor : positiveColor
      }
      borderRadius={4}
      theme={theme}
      axisBottom={{
        legend: axisBottomLegend,
        legendPosition: 'middle',
        legendOffset: 44,
      }}
      axisLeft={{ tickSize: 0, tickPadding: 12 }}
      enableLabel={false}
      enableGridX
      enableGridY={false}
      // Emphasize the zero baseline that separates negative from positive.
      markers={[
        {
          axis: 'x',
          value: 0,
          lineStyle: { stroke: 'var(--text)', strokeWidth: 1 },
        },
      ]}
      role="img"
      ariaLabel="Diverging horizontal bar chart of correlation values"
    />
  )
}

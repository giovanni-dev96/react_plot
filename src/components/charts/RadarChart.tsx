import { ResponsiveRadar } from '@nivo/radar'
import { useNivoTheme } from '../../plots/nivoTheme'

export interface RadarChartProps {
  /** Rows of data. Each row holds the index field plus one value per key. */
  data: Array<Record<string, string | number>>
  /** The series to draw, e.g. ['Current', 'Target']. */
  keys: string[]
  /** The field each spoke is indexed by, e.g. 'metric'. */
  indexBy: string
  /** Optional color override; falls back to the chart's internal palette. */
  colors?: string[]
}

export default function RadarChart({
  data,
  keys,
  indexBy,
  colors,
}: RadarChartProps) {
  const theme = useNivoTheme()

  return (
    <ResponsiveRadar
      data={data}
      keys={keys}
      indexBy={indexBy}
      // Values are in the 0–1 range, so pin the outer ring to 1.
      maxValue={1}
      valueFormat=">-.2f"
      margin={{ top: 56, right: 96, bottom: 56, left: 96 }}
      gridShape="circular"
      gridLabelOffset={20}
      colors={colors}
      borderWidth={2}
      fillOpacity={0.18}
      blendMode="multiply"
      dotSize={8}
      dotBorderWidth={2}
      theme={theme}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 80,
          translateY: -8,
          itemWidth: 80,
          itemHeight: 22,
          symbolSize: 14,
          symbolShape: 'circle',
        },
      ]}
      role="img"
      ariaLabel="Radar chart of statistics across metrics"
    />
  )
}

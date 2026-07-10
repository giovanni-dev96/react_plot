import { ResponsiveHeatMap } from '@nivo/heatmap'
import type { HeatMapSerie } from '@nivo/heatmap'
import type { ColorInterpolatorId } from '@nivo/colors'
import { useNivoTheme } from '../../plots/nivoTheme'

/** One cell in a row: a column label `x` and its numeric value `y`. */
export type HeatMapCell = { x: string; y: number | null }

export interface HeatMapChartProps {
  /** Rows of data. Each row has an `id` (the row label) and one cell per column. */
  data: Array<HeatMapSerie<HeatMapCell, Record<string, unknown>>>
  /** Sequential color scheme used to shade cells. Defaults to 'blues'. */
  scheme?: ColorInterpolatorId
  /** Cell value display format, e.g. '>-.2f'. */
  valueFormat?: string
  /** Optional axis legend text shown on the left. */
  axisLeftLegend?: string
}

export default function HeatMapChart({
  data,
  scheme = 'blues',
  valueFormat = '>-.2f',
  axisLeftLegend,
}: HeatMapChartProps) {
  const theme = useNivoTheme()

  return (
    <ResponsiveHeatMap
      data={data}
      margin={{ top: 72, right: 96, bottom: 24, left: 120 }}
      valueFormat={valueFormat}
      colors={{ type: 'sequential', scheme }}
      // Faint borders keep adjacent cells legible without competing with the fill.
      borderColor="var(--border)"
      borderWidth={1}
      theme={theme}
      axisTop={{ tickSize: 0, tickPadding: 12, tickRotation: -45 }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 12,
        legend: axisLeftLegend,
        legendPosition: 'middle',
        legendOffset: -100,
      }}
      labelTextColor={{ from: 'color', modifiers: [['darker', 2.4]] }}
      legends={[
        {
          anchor: 'right',
          translateX: 40,
          length: 200,
          thickness: 10,
          direction: 'column',
          tickSize: 4,
          tickSpacing: 4,
        },
      ]}
      role="img"
      ariaLabel="Heatmap of values across rows and columns"
    />
  )
}

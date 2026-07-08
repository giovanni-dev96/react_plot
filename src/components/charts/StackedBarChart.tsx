import { ResponsiveBar } from '@nivo/bar'
import { useNivoTheme } from '../../plots/nivoTheme'

export interface StackedBarChartProps {
  /** Rows of data. Each row holds the index field plus one numeric value per key. */
  data: Array<Record<string, string | number>>
  /** The stacked series, e.g. ['Hardware', 'Software', 'Services']. */
  keys: string[]
  /** The field each row is indexed by, e.g. 'quarter'. */
  indexBy: string
  /** Optional color override; falls back to the chart's internal palette. */
  colors?: string[]
  /** Optional axis legend text shown on the left. */
  axisLeftLegend?: string
}

export default function StackedBarChart({
  data,
  keys,
  indexBy,
  colors,
  axisLeftLegend,
}: StackedBarChartProps) {
  const theme = useNivoTheme()

  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      groupMode="stacked"
      layout="horizontal"
      margin={{ top: 24, right: 140, bottom: 60, left: 64 }}
      padding={0.32}
      colors={colors}
      borderRadius={4}
      theme={{
        ...theme,
        labels: { text: { ...theme.labels?.text, fontSize: 14, fontWeight: 700 } },
      }}
      axisBottom={null}
      axisLeft={{
        legend: axisLeftLegend,
        legendPosition: 'middle',
        legendOffset: -52,
      }}
      enableLabel={false}
      enableGridX
      legends={[
        {
          dataFrom: 'keys',
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
      ariaLabel="Stacked bar chart of quarterly revenue by product category"
    />
  )
}

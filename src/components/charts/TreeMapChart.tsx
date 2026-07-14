import { ResponsiveTreeMap } from '@nivo/treemap'
import type { ColorSchemeId } from '@nivo/colors'
import { useNivoTheme } from '../../plots/nivoTheme'

/** A node in the treemap hierarchy: a labelled `id`, an optional `value` for
 *  leaves, and optional `children` for branches. */
export interface TreeMapNode {
  id: string
  value?: number
  children?: TreeMapNode[]
}

export interface TreeMapChartProps {
  /** Root node of the hierarchy. Leaves carry the `value` that sizes each tile. */
  data: TreeMapNode
  /** Tile value display format, e.g. '.02s'. */
  valueFormat?: string
  /** Categorical color scheme used to fill branches. Defaults to 'nivo'. */
  scheme?: ColorSchemeId
}

export default function TreeMapChart({
  data,
  valueFormat = '.02s',
  scheme = 'red_yellow_green',
}: TreeMapChartProps) {
  const theme = useNivoTheme()
  // Render the tile ids bold in the project's sans font; color is set to white
  // via the label color props below.
  const labelTheme = {
    ...theme,
    labels: {
      text: {
        fontFamily: 'var(--sans)',
        fontWeight: 700,
      },
    },
  }

  return (
    <ResponsiveTreeMap
      data={data}
      identity="id"
      value="value"
      valueFormat={valueFormat}
      margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
      labelSkipSize={12}
      label="id"
      colors={{ scheme }}
      theme={labelTheme}
      // Thin borders in the page background color separate tiles cleanly in
      // both light and dark mode.
      borderColor="var(--bg)"
      borderWidth={2}
      labelTextColor="#ffffff"
      parentLabelTextColor="#ffffff"
      role="img"
      ariaLabel="Treemap of values across a nested hierarchy"
    />
  )
}

/** Example data: a small nested hierarchy for previewing the chart. ---------- */
// export const exampleTreeMapData: TreeMapNode = {
//   id: 'traffic',
//   children: [
//     {
//       id: 'organic',
//       children: [
//         { id: 'search', value: 4200 },
//         { id: 'direct', value: 2100 },
//         { id: 'referral', value: 1350 },
//       ],
//     },
//     {
//       id: 'paid',
//       children: [
//         { id: 'display', value: 1800 },
//         { id: 'social', value: 2600 },
//         { id: 'video', value: 900 },
//       ],
//     },
//     {
//       id: 'email',
//       children: [
//         { id: 'newsletter', value: 1200 },
//         { id: 'lifecycle', value: 700 },
//       ],
//     },
//   ],
// }

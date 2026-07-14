import PageLayout from '../components/layout/PageLayout'
import StackedBarChart from '../components/charts/StackedBarChart'
import CardGrid from '../components/cards/CardGrid'
import Card from '../components/cards/Card'
import { data } from '../../data.json'
import ScatterPlotChart from '../components/charts/ScatterPlotChart'
import TreeMapChart from '../components/charts/TreeMapChart'

const dataIndex = 0;
const info = data[dataIndex];

const scatter = [
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

const exampleTreeMapData = {
  id: 'steps',
  children: [
    {
      id: 'seg',
      children: [
        { id: 'U_330', value: 1600 },
        { id: 'U_331', value: 2100 },
        { id: 'U_332', value: 1350 },
      ],
    },
    {
      id: 'ter',
      children: [
        { id: 'U_330', value: 1800 },
        { id: 'U_331', value: 2600 },
        { id: 'U_332', value: 900 },
      ],
    },
    {
      id: 'qua',
      children: [
        { id: 'U_330', value: 1200 },
        { id: 'U_331', value: 700 },
        { id: 'U_332', value: 500 },
      ],
    },
    {
      id: 'qui',
      children: [
        { id: 'U_330', value: 1800 },
        { id: 'U_331', value: 900 },
        { id: 'U_332', value: 700 },
      ],
    },
    {
      id: 'sex',
      children: [
        { id: 'U_330', value: 1800 },
        { id: 'U_331', value: 900 },
        { id: 'U_332', value: 300 },
      ],
    },
    {
      id: 'sab',
      children: [
        { id: 'U_330', value: 1800 },
        { id: 'U_331', value: 900 },
        { id: 'U_332', value: 900 },
      ],
    },        
  ],
}

export default function OverviewPage() {
  return (
    <PageLayout
      title={info.title || ""}
      subtitle={info.subtitle}
    >
      <section className="chart-panel">
        <StackedBarChart
          data={info.data || []}
          keys={info.keys || []}
          colors={info.colors}
          indexBy="quarter"
          axisLeftLegend="Quarter (FY26)"
        />
      </section>

      {/* <section className="chart-panel">
        <ScatterPlotChart
          data={scatter}
          colors={['#00ff9d', '#ff2233']}
          xThreshold={4}
          yThreshold={55}
        />
      </section> */}

      <section className="chart-panel">
        <TreeMapChart
          data={exampleTreeMapData}
        />
      </section>      

      {/* Fill these card props manually as needed. */}
      <CardGrid>
        <Card title="The best quarter" positive value="Q4" />
        <Card title="The worst quarter" positive={false} value="Q1" />
        <Card title="Top category" positive value="Hardware" />
      </CardGrid>
    </PageLayout>
  )
}

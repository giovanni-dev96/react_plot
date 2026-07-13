import PageLayout from '../components/layout/PageLayout'
import StackedBarChart from '../components/charts/StackedBarChart'
import CardGrid from '../components/cards/CardGrid'
import Card from '../components/cards/Card'
import { data } from '../../data.json'
import ScatterPlotChart from '../components/charts/ScatterPlotChart'

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

      <section className="chart-panel">
        <ScatterPlotChart
          data={scatter}
          colors={['#00ff9d', '#ff2233']}
          xThreshold={4}
          yThreshold={55}
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

import PageLayout from '../components/layout/PageLayout'
import StackedBarChart from '../components/charts/StackedBarChart'
import CardGrid from '../components/cards/CardGrid'
import Card from '../components/cards/Card'
import { data } from '../../data.json'

const dataIndex = 0;
const info = data[dataIndex];

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

      {/* Fill these card props manually as needed. */}
      <CardGrid>
        <Card title="The best quarter" positive value="Q4" />
        <Card title="The worst quarter" positive={false} value="Q1" />
        <Card title="Top category" positive value="Hardware" />
      </CardGrid>
    </PageLayout>
  )
}

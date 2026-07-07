import PageLayout from '../components/layout/PageLayout'
import StackedBarChart from '../components/charts/StackedBarChart'
import CardGrid from '../components/cards/CardGrid'
import Card from '../components/cards/Card'

// --- Data lives with the page, not the chart, so charts stay reusable. ------
const keys = ['Hardware', 'Software', 'Services']

const data = [
  { quarter: 'Q1', Hardware: 118, Software: 72, Services: 44 },
  { quarter: 'Q2', Hardware: 134, Software: 96, Services: 58 },
  { quarter: 'Q3', Hardware: 127, Software: 110, Services: 71 },
  { quarter: 'Q4', Hardware: 152, Software: 128, Services: 89 },
]

export default function OverviewPage() {
  return (
    <PageLayout
      title="Revenue Overview"
      subtitle="Quarterly totals across product lines, FY26"
    >
      <section className="chart-panel">
        <StackedBarChart
          data={data}
          keys={keys}
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

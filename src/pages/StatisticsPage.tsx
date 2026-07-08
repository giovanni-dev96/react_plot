import PageLayout from '../components/layout/PageLayout'
import RadarChart from '../components/charts/RadarChart'
import { data } from '../../data.json'

const dataIndex = 2;
const info = data[dataIndex];
// --- Data lives with the page, not the chart, so charts stay reusable. ------
// Each metric is scored 0–1. 'Current' is where we are, 'Target' is the goal.

export default function StatisticsPage() {
  return (
    <PageLayout
      title="Statistics"
      subtitle="Model performance vs. target across metrics, FY26"
    >
      <section className="chart-panel">
        <RadarChart
          data={info.data || []} 
          keys={info.keys || []} 
          indexBy="metric" 
          colors={info.colors || []}/>
      </section>
    </PageLayout>
  )
}

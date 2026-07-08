import PageLayout from '../components/layout/PageLayout'
import DivergingBarChart from '../components/charts/DivergingBarChart'
import { data } from '../../data.json'

const dataIndex = 1;
const info = data[dataIndex];

export default function CorrelationsPage() {
  return (
    <PageLayout
      title={info.title || ""}
      subtitle={info.subtitle || ""}
    >
      <section className="chart-panel">
        <DivergingBarChart
          data={info.data || []}
          indexBy="metric"
          axisBottomLegend="Correlation coefficient"
        />
      </section>
    </PageLayout>
  )
}

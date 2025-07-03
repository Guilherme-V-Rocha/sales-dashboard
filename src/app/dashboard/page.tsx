import { RevenueChart } from './revenue-chart'
import { Sales } from './sales/sales'
import { SubHeader } from './sub-header/sub-header'
import { TransactionHistory } from './transaction-history'

export default function Dashboard() {
  return (
    <div className="flex gap-10 flex-col ml-20 mt-10 w-max">
      <SubHeader />
      <div className="flex gap-8">
        <RevenueChart />
        <TransactionHistory />
      </div>
      <Sales />
      <div className="rounded-[0.75rem] p-10 bg-white">
        <p>Histórico de compradores</p>
      </div>
    </div>
  )
}

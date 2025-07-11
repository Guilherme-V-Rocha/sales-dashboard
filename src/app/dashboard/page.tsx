import { BueyerHistory } from './buyer-history'
import { RevenueChart } from './revenue-chart'
import { Sales } from './sales/sales'
import { SubHeader } from './sub-header/sub-header'
import { TransactionHistory } from './transaction-history'

export default function Dashboard() {
  return (
    <div className="flex flex-col my-10 ml-20 gap-10 item w-max ">
      <SubHeader />
      <div className="flex gap-10 flex-col overflow-auto mb-">
        <div className="flex gap-8">
          <RevenueChart />
          <TransactionHistory />
        </div>
        <Sales />
        <BueyerHistory />
      </div>
    </div>
  )
}

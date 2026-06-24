import { BueyerHistory } from '@/components/dashboard/buyer-history'
import { RevenueChart } from '@/components/dashboard/revenue-chart'
import { Sales } from '@/components/dashboard/sales'
import { Header } from '@/components/dashboard/sub-header'
import { TransactionHistory } from '@/components/dashboard/transaction-history'

export default function Dashboard() {
  return (
    <div className="grid mt-10 mb-10 mr-6 ml-6 w-full lg:flex lg:flex-col lg:my-10 lg:ml-20 lg:gap-10 lg:h-[91dvh] lg:w-[68.4%]">
      <Header />
      <div className="flex gap-10 flex-col lg:overflow-y-scroll">
        <div className="grid grid-cols-1 lg:flex lg:gap-8">
          <RevenueChart />
          <TransactionHistory />
        </div>
        <Sales />
        <BueyerHistory />
      </div>
    </div>
  )
}

import { BueyerHistory } from '@/components/dashboard/buyer-history'
import { RevenueChart } from '@/components/dashboard/revenue-chart'
import { Sales } from '@/components/dashboard/sales'
import { Header } from '@/components/dashboard/sub-header'
import { TransactionHistory } from '@/components/dashboard/transaction-history'

export default function Dashboard() {
  return (
    <div className="grid mt-10 mb-10 mx-6 w-full lg:flex lg:flex-col lg:my-10 lg:ml-20 lg:mr-0 lg:gap-10 lg:h-fit lg:w-[68.4%]">
      <Header />
      <div className="flex gap-10 flex-col">
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

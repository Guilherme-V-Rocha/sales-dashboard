import { SalesMobile } from '../mobile/sales'
import { SubHeaderMobile } from '../mobile/sub-header'
import { BueyerHistory } from './buyer-history'
import { RevenueChart } from './revenue-chart'
import { Sales } from './sales'
import { SubHeader } from './sub-header'
import { TransactionHistory } from './transaction-history'

export default function Dashboard() {
  return (
    <>
      <div className="lg:hidden grid mt-10 mb-10 mr-6 ml-6 w-full">
        <SubHeaderMobile />
        <div className="flex gap-10 flex-col overflow-auto">
          <div className="lg:hidden grid grid-cols-1 gap-8">
            <RevenueChart />
            <TransactionHistory />
          </div>
          <SalesMobile />
          <BueyerHistory />
        </div>
      </div>
      <div className="hidden lg:flex flex-col my-10 ml-20 gap-10 h-[91dvh] w-[68.4%]">
        <SubHeader />
        <div className="flex gap-10 flex-col overflow-y-scroll">
          <div className="flex gap-8">
            <RevenueChart />
            <TransactionHistory />
          </div>
          <Sales />
          <BueyerHistory />
        </div>
      </div>
    </>
  )
}

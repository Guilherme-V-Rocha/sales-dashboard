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
      <div className="md:hidden grid mt-10 mb-10 mr-6 ml-6">
        <SubHeaderMobile />
        <div className="flex gap-10 flex-col overflow-auto">
          <div className="md:hidden grid grid-cols-1 gap-8">
            <RevenueChart />
            <TransactionHistory />
          </div>
          <SalesMobile />
          <BueyerHistory />
        </div>
      </div>
      <div className="hidden md:block flex-col my-10 ml-20 mb-10 gap-10 w-max">
        <SubHeader />
        <div className="flex gap-10 flex-col overflow-auto">
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

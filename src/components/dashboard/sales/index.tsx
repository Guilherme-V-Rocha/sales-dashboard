import { salesData } from '@/data/sales'

export function Sales() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:gap-8 lg:h-full">
      {salesData.map((sale) => {
        const Icon = sale.icon
        return (
          <div
            key={sale.id}
            className="flex flex-col rounded-[0.75rem] p-5 bg-white gap-3 lg:flex-1"
          >
            <p className="text-base">{sale.title}</p>
            <p className="text-2xl font-semibold">{sale.value}</p>
            <div
              className={`flex items-center gap-1.5 rounded-[3.125rem] font-semibold text-sm pt-1.5 pb-1.5 pl-3 pr-3 w-fit`}
              style={{
                backgroundColor: sale.iconBackgroundColor,
                color: sale.iconTextColor,
              }}
            >
              <Icon />
              <span>{sale.percentage}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

import { salesData } from '@/data/sales'

export function Sales() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:gap-8 lg:h-full">
      {salesData.map((sale) => (
        <div
          key={sale.id}
          className="flex flex-col rounded-[0.75rem] p-5 bg-white gap-3 lg:w-80 lg:h-full h-fit"
        >
          <p className="text-base">{sale.title}</p>
          <p className="text-2xl font-semibold">{sale.value}</p>
          <div
            className={`flex items-center gap-1.5 bg-[${sale.iconBackgroundColor}] rounded-[3.125rem] text-[${sale.iconTextColor}] font-semibold text-sm pt-1.5 pb-1.5 pl-3 pr-3 w-fit`}
          >
            <sale.icon />
            <span>{sale.percentage}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

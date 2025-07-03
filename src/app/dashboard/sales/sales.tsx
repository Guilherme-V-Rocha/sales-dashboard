import NegativeIcon from '@/icons/negativeIcon.svg'
import PositiveIcon from '@/icons/positiveIcon.svg'

export function Sales() {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col rounded-[0.75rem] p-5 bg-white gap-3 w-80 h-fit">
        <p className="text-base">Total de vendas</p>
        <p className="text-2xl font-semibold">R$ 3.265,21</p>
        <div className="flex items-center gap-1.5 bg-[#0BB07B0F] rounded-[3.125rem] text-[#0BB07B] font-semibold text-sm pt-1.5 pb-1.5 pl-3 pr-3 w-fit">
          <PositiveIcon />
          +11%
        </div>
      </div>
      <div className="flex flex-col rounded-[0.75rem] p-5 bg-white gap-3  w-80 h-fit">
        <p className="text-base">Total líquido</p>
        <p className="text-2xl font-semibold">R$ 2.825,58</p>
        <div className="flex items-center gap-1.5 bg-[#0BB07B0F] rounded-[3.125rem] text-[#0BB07B] font-semibold text-sm pt-1.5 pb-1.5 pl-3 pr-3 w-fit">
          <PositiveIcon />
          +15%
        </div>
      </div>
      <div className="flex flex-col rounded-[0.75rem] p-5 bg-white gap-3  w-80 h-fit">
        <p className="text-base">Compras cancelados</p>
        <p className="text-2xl font-semibold">R$ 130,00</p>
        <div className="flex items-center gap-1.5 bg-[#F03D3D0F] rounded-[3.125rem] text-[#F03D3D] font-semibold text-sm pt-1.5 pb-1.5 pl-3 pr-3 w-fit">
          <NegativeIcon />
          -80%
        </div>
      </div>
      <div className="flex flex-col rounded-[0.75rem] p-5 bg-white gap-3  w-80 h-fit">
        <p className="text-base">Reembolsos</p>
        <p className="text-2xl font-semibold">R$ 345,00</p>
        <div className="flex items-center gap-1.5 bg-[#F03D3D0F] rounded-[3.125rem] text-[#F03D3D] font-semibold text-sm pt-1.5 pb-1.5 pl-3 pr-3 w-fit">
          <NegativeIcon />
          -78%
        </div>
      </div>
    </div>
  )
}

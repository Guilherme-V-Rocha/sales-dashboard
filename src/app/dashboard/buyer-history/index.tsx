import { Table } from './table'

export function BueyerHistory() {
  return (
    <div className="rounded-[0.75rem] py-10 ps-8 pr-8 bg-white">
      <p className="font-medium text-xl text-dark05">
        Histórico de compradores
      </p>
      <div className="hidden md:block">
        <Table />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        <div className="bg-white space-x-3 p-4 shadow rounded-lg">
          <div className="flex items-center space-x-2 text-sm">
            <div className="text-gray10 font-semibold">#12345</div>
            <div className="text-gray10 font-medium">02/08/2023</div>
            <div className="text-gray10 font-medium text-sm"> Aprovado</div>
          </div>
          <div className="text-gray10 font-medium">Roberto Santos</div>
          <div className="text-gray10 font-medium text-sm">
            Rio Grande do Sul
          </div>
          <div className="text-gray10 font-medium text-sm">R$ 15,00</div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="flex space-x-2 text-sm">
            <div className="text-gray10 font-semibold">#67890</div>
            <div className="text-gray10 font-medium">03/08/2023</div>
            <div className="text-gray10 font-medium">Em análise</div>
          </div>
          <div className="text-gray10 font-medium text-sm">
            Beatriz Rodrigues
          </div>
          <div className="text-gray10 font-medium text-sm">Salvador</div>
          <div className="text-gray10 font-medium text-sm">R$ 15,00</div>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="flex space-x-2 text-sm">
            <div className="text-gray10 font-semibold">#67890</div>
            <div className="text-gray10 font-medium">03/08/2023</div>
            <div className="text-gray10 font-medium">Em análise</div>
          </div>
          <div className="text-gray10 font-medium text-sm">
            Beatriz Rodrigues
          </div>
          <div className="text-gray10 font-medium text-sm">Salvador</div>
          <div className="text-gray10 font-medium text-sm">R$ 15,00</div>
        </div>
      </div>
    </div>
  )
}

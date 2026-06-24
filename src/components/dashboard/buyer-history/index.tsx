import { Card } from './card'
import { Table } from './table'

export function BueyerHistory() {
  return (
    <div className="rounded-[0.75rem] py-10 ps-8 pr-8 bg-white">
      <p className="font-medium text-xl text-dark05">
        Histórico de compradores
      </p>
      <div className="hidden lg:block">
        <Table />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        <Card />
      </div>
    </div>
  )
}

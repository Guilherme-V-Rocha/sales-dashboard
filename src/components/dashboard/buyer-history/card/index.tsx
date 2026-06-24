import { buyerHistoryData } from '@/data/buyer-history'

export function Card() {
  return buyerHistoryData.map((card) => (
    <div key={card.id} className="bg-white space-x-3 p-4 shadow rounded-lg">
      <div className="sm:flex lg:flex-col space-x-2 text-sm">
        <div className="text-gray10 font-semibold">{card.id}</div>
        <div className="text-gray10 font-medium">{card.data}</div>
        <div className="text-gray10 font-medium text-sm">{card.situation}</div>
      </div>
      <div className="text-gray10 font-medium">{card.name}</div>
      <div className="text-gray10 font-medium text-sm">{card.location}</div>
      <div className="text-gray10 font-medium text-sm">{card.value}</div>
    </div>
  ))
}

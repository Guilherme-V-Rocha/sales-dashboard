import { buyerHistoryData } from '@/data/buyer-history'

export function Table() {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-4 text-base font-medium tracking-wide text-left">
            ID
          </th>
          <th className="py-4 text-base font-medium tracking-wide text-left">
            Data
          </th>
          <th className="py-4 text-base font-medium tracking-wide text-left">
            Nome
          </th>
          <th className="py-4 text-base font-medium tracking-wide text-left">
            Localização
          </th>
          <th className="py-4 text-base font-medium tracking-wide text-left">
            Valor
          </th>
          <th className="py-4 text-base font-medium tracking-wide text-left">
            Situação
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {buyerHistoryData.map((row) => (
          <tr key={row.id}>
            <td className="py-5 text-gray10 font-semibold text-sm whitespace-nowrap">
              {row.id}
            </td>
            <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
              {row.data}
            </td>
            <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
              {row.name}
            </td>
            <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
              {row.location}
            </td>
            <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
              {row.value}
            </td>
            <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
              <div className="flex items-center gap-1.5">
                <div
                  className="w-2.5 h-2.5 rounded"
                  style={{ backgroundColor: row.situationColor }}
                />
                {row.situation}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

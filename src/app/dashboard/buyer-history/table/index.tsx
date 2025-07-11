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
        <tr>
          <td className="py-5 text-gray10 font-semibold text-sm whitespace-nowrap">
            #12345
          </td>
          <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
            02/08/2023
          </td>
          <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
            Roberto Santos
          </td>
          <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
            Rio Grande do Sul
          </td>
          <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
            R$ 15,00
          </td>
          <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
            Aprovado
          </td>
        </tr>
        <tr>
          <td className="py-5 text-gray10 font-semibold text-sm whitespace-nowrap">
            #67890
          </td>
          <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
            03/08/2023
          </td>
          <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
            Beatriz Rodrigues
          </td>
          <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
            Salvador
          </td>
          <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
            R$ 15,00
          </td>
          <td className="py-5 text-gray10 font-medium text-sm whitespace-nowrap">
            Em análise
          </td>
        </tr>
      </tbody>
    </table>
  )
}

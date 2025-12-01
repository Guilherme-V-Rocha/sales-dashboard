export function Card() {
  return (
    <>
      <div className="bg-white space-x-3 p-4 shadow rounded-lg">
        <div className="sm:flex lg:flex-col space-x-2 text-sm">
          <div className="text-gray10 font-semibold">#12345</div>
          <div className="text-gray10 font-medium">02/08/2023</div>
          <div className="text-gray10 font-medium text-sm"> Aprovado</div>
        </div>
        <div className="text-gray10 font-medium">Roberto Santos</div>
        <div className="text-gray10 font-medium text-sm">Rio Grande do Sul</div>
        <div className="text-gray10 font-medium text-sm">R$ 15,00</div>
      </div>
      <div className="bg-white p-4 shadow rounded-lg">
        <div className="sm:flex lg:flex-col space-x-2 text-sm">
          <div className="text-gray10 font-semibold">#67890</div>
          <div className="text-gray10 font-medium">03/08/2023</div>
          <div className="text-gray10 font-medium">Em análise</div>
        </div>
        <div className="text-gray10 font-medium text-sm">Beatriz Rodrigues</div>
        <div className="text-gray10 font-medium text-sm">Salvador</div>
        <div className="text-gray10 font-medium text-sm">R$ 15,00</div>
      </div>
      <div className="bg-white p-4 shadow rounded-lg">
        <div className="sm:flex lg:flex-col space-x-2 text-sm">
          <div className="text-gray10 font-semibold">#67890</div>
          <div className="text-gray10 font-medium">03/08/2023</div>
          <div className="text-gray10 font-medium">Em análise</div>
        </div>
        <div className="text-gray10 font-medium text-sm">Beatriz Rodrigues</div>
        <div className="text-gray10 font-medium text-sm">Salvador</div>
        <div className="text-gray10 font-medium text-sm">R$ 15,00</div>
      </div>
    </>
  )
}

const graphData = [
  { month: 'Jan', value: 1500 },
  { month: 'Fev', value: 500 },
  { month: 'Mar', value: 600 },
  { month: 'Abr', value: 20 },
  { month: 'Mai', value: 100 },
  { month: 'Jun', value: 430 },
  { month: 'Jul', value: 130 },
  { month: 'Ago', value: 300 },
  { month: 'Set', value: 503 },
  { month: 'Out', value: 15 },
  { month: 'Nov', value: 1000 },
  { month: 'Dez', value: 2000 },
]

export function RevenueChart() {
  const dataProcess = graphData.map((item) => ({
    ...item,
    percentual: ((item.value / 2000) * 100).toFixed(1) + '%',
  }))

  return (
    <div className="rounded-[0.75rem] p-10 w-full bg-white ">
      <p className="text-xl">Gráfico de receitas</p>

      <div className="flex gap-6 mt-6 h-[84%]">
        <div className="text-gray10 flex flex-col gap-6">
          <p>2000</p>
          <p>1000</p>
          <p>500</p>
          <p>250</p>
          <p>0</p>
        </div>

        <div className="flex text-gray10 gap-3 justify-between w-full h-auto">
          {dataProcess.map(({ month, percentual }) => (
            <div
              key={month}
              className="flex flex-col h-full justify-end-safe items-center-safe w-[8.4%] gap-3"
            >
              <div
                className={`h-[${percentual}] bg-brandColor rounded-md w-full}`}
              />
              <p>{month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

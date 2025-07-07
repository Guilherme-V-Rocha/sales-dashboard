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

const params = [2000, 1000, 500, 250, 0]

export function RevenueChart() {
  const dataProcess = graphData.map((item) => ({
    ...item,
    percentual:
      (item.value / Math.max(...graphData.map((a) => a.value))) * 100 + '%',
  }))

  return (
    <div className="rounded-[0.75rem] p-10 w-full overflow-hidden bg-white ">
      <p className="text-xl">Gráfico de receitas</p>

      <div className="flex gap-7 mt-6 h-full">
        <div className="text-gray10 flex flex-col justify-between h-[79.5%]">
          {params.map((value) => (
            <p key={value.toString()}>{value}</p>
          ))}
        </div>

        <div className="flex text-gray10 gap-4 w-full overflow-x-auto h-[89.5%]">
          {dataProcess.map(({ month, percentual }) => (
            <div
              key={month}
              className="flex flex-col h-full justify-end-safe items-center-safe w-[8.4%] gap-3"
            >
              <div
                style={{ height: percentual }}
                className="bg-brandColor rounded-md w-full"
              />
              <p>{month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

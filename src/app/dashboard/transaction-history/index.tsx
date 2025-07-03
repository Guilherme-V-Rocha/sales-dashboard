export function TransactionHistory() {
  return (
    <div className="flex flex-col rounded-[0.75rem] p-10 pb-[4.75rem] w-full bg-white gap-6">
      <p>Histórico de transações</p>
      <div className="flex w-auto bg-purple10 rounded-[0.375rem] p-3.5 text-brandColor justify-between">
        <p>Ontem</p>
        <p className="font-semibold text-lg">R$ -540,32</p>
      </div>
      <div className="flex w-auto bg-purple10 rounded-[0.375rem] p-3.5 text-brandColor justify-between">
        <p>Quinta-feira</p>
        <p className="font-semibold">R$ -273,90</p>
      </div>
      <div className="flex w-auto bg-purple10 rounded-[0.375rem] p-3.5 text-brandColor justify-between">
        <p>Segunda-feira</p>
        <p className="font-semibold">R$ -1.456,20</p>
      </div>
    </div>
  )
}

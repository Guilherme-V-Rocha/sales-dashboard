import { transactionHistoryData } from '@/data/transaction-history'

export function TransactionHistory() {
  return (
    <div className="flex flex-col rounded-[0.75rem] p-10 pb-[4.75rem] w-full bg-white gap-6">
      <p>Histórico de transações</p>
      {transactionHistoryData.map((transaction) => (
        <div
          key={transaction.id}
          className="sm:flex w-auto bg-purple10 rounded-[0.375rem] p-3.5 text-brandColor justify-between"
        >
          <p>{transaction.Weekname}</p>
          <p className="font-semibold text-lg">{transaction.value}</p>
        </div>
      ))}
    </div>
  )
}

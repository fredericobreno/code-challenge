import { useEffect, useState } from 'react'
import { PaymentTransactionsTableRow } from './PaymentTransactionsTableRow'

export const PaymentTransactionsTable = ({ paymentTransactions = [] }) => {
  const [sortedTransactions, setSortedTransactions] = useState(paymentTransactions)

  const handleHeaderClick = (property) => {
    const sortedList = paymentTransactions.sort((a, b) => {
      return a[property] < b[property] ? 1 : -1
    })

    console.log(sortedList)

    setSortedTransactions([...sortedList])
  }

  useEffect(() => {
    setSortedTransactions(paymentTransactions)
  }, [paymentTransactions])

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleHeaderClick('id')}>Transaction ID</th>
          <th onClick={() => handleHeaderClick('date')}>Date</th>
          <th onClick={() => handleHeaderClick('description')}>Description</th>
          <th onClick={() => handleHeaderClick('amount')}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map(paymentTransaction => {
          return <PaymentTransactionsTableRow key={paymentTransaction.id} paymentTransaction={paymentTransaction} />
        })}
      </tbody>
    </table>
  )
}


import { useEffect, useState } from 'react';
import { PaymentTransactionsTable, DateFilter } from './components'
import { PaymentService } from './services/api'

function App() {
  const [dateFilter, setDateFilter] = useState({
    from: null,
    to: null
  })
  const [paymentTransactions, setPaymentTransactions] = useState([])

  useEffect(() => {
    (async () => {
      const data = await PaymentService.getTransactions({ dateFilter })

      setPaymentTransactions(data)
    })()
  }, [dateFilter])

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      gap: '8px',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1>Payment Transactions</h1>
      <DateFilter setDateFilter={setDateFilter} />
      <PaymentTransactionsTable paymentTransactions={paymentTransactions} />
    </div>
  );
}

export default App;

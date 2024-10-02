export const PaymentService = {
  getTransactions: ({ dateFilter }) => new Promise((resolve, reject) => {
    const data = [
      {
        id: '1',
        date: new Date('2024-09-05T00:00:00'),
        description: 'Transaction 1',
        amount: 1000,
      },
      {
        id: '2',
        date: new Date('2024-08-01T00:00:00'),
        description: 'Transaction 2',
        amount: 2000,
      },
      {
        id: '3',
        date: new Date('2024-10-02T00:00:00'),
        description: 'Transaction 3',
        amount: 3000,
      },
      {
        id: '4',
        date: new Date('2024-10-01T00:00:00'),
        description: 'Transaction 4',
        amount: 4000,
      },
      {
        id: '5',
        date: new Date('2024-05-02T00:00:00'),
        description: 'Transaction 4',
        amount: 4000,
      },
    ]

    setTimeout(() => {
      resolve(
        data.filter(transaction => transaction.date.getTime() > dateFilter.from)
      )
    }, 500)
  })
}
export const PaymentTransactionsTableRow = ({ paymentTransaction }) => {
  return (
    <tr>
      <td>{paymentTransaction.id}</td>
      <td>{paymentTransaction.date.toLocaleDateString('pt')}</td>
      <td>{paymentTransaction.description}</td>
      <td>{
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
          paymentTransaction.amount / 100,
        )
      }</td>
    </tr>
  );
}


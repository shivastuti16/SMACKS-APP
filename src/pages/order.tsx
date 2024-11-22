import { useState } from 'react';

const Order = () => {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const placeOrder = () => {
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart, paymentMethod }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Order placed successfully! Order ID: ' + data.id);
        setCart([]);
      })
      .catch(() => alert('Failed to place the order.'));
  };

  return (
    <>
      <h1>Place Your Order</h1>
      <div>
        <label>Payment Method:</label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="Cash">Cash</option>
          <option value="Card">Card</option>
        </select>
      </div>
      <button onClick={placeOrder}>Place Order</button>
    </>
  );
};

export default Order;

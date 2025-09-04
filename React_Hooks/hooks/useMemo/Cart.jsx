import React, { useState, useMemo } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 1233 },
    { id: 3, name: "Charger", price: 4323 },
  ]);

  const [discount, setDiscount] = useState(0);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => {
    //   console.log('calculating total price...');
      total + item.price;
    }, 0);
  }, [cart]);
  
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <p key={item.id}>
          {item.name} = {item.price}
        </p>
      ))}
      <button onClick={() => setDiscount(discount + 10)}>
        Increase Discount {discount}
      </button>
    </div>
  );
};

export default Cart;

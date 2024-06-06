// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {totalItems === 0 ? <p>The cart is empty.</p> : (
        <>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                {item.title} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Cart;

import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }

    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order Summary: </h3>
      <h5>Items Order: {totalQuantity}</h5>
      <h5>Total: {total.toFixed(2)}</h5>
      <h5>Shipping: {shipping.toFixed(2)}</h5>
      <h5>Grand Total:{grandTotal.toFixed(2)} </h5>
    </div>
  );
};

export default Cart;

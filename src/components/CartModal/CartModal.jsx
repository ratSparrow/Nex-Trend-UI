import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CartModal = (props) => {
  const dollarSign = <FontAwesomeIcon icon={faDollarSign} />;
  let total = 0;
  let totalQuantity = 0;
  for (const product of props.cart) {
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
    <div className="mx-8 sticky top-0">
      <input type="checkbox" id="cart-modal" className="modal-toggle" />
      <label htmlFor="cart-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-center text-teal-800 font-semibold text-xl my-4 border-b-2 border-teal-800">
            Order Summary
          </h3>

          <h5 className="text-sky-900 font-semibold mb-2">
            Order : {totalQuantity}
          </h5>

          <h5 className="text-orange-700 font-semibold mb-2">
            Amount : {total.toFixed(2)} {dollarSign}
          </h5>
          <h5 className="text-orange-700 font-semibold mb-2">
            Shipping : {shipping.toFixed(2)} {dollarSign}
          </h5>
          <h5 className="text-orange-700 font-semibold mb-2">
            Total : {grandTotal.toFixed(2)} {dollarSign}
          </h5>
          {props.children}
        </label>
      </label>
    </div>
  );
};

export default CartModal;

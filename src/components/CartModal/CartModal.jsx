import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CartModal = ({ cart, children }) => {
  const dollarSign = <FontAwesomeIcon icon={faDollarSign} />;
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
    <div className="mx-8 sticky top-0">
      <input type="checkbox" id="cart-modal" className="modal-toggle" />
      <label htmlFor="cart-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="cart-modal">
          <h3 className="text-center text-teal-800 font-semibold text-xl my-4 border-b-2 border-teal-800">
            Order Summary
          </h3>
          {cart.map((p) => (
            <div className="card w-full  bg-base-200 shadow-xl mb-7">
              <div className="card-body">
                <h2 className="">{p.name.slice(0, 20)}</h2>
              </div>
            </div>
          ))}
          {children}
        </label>
      </label>
    </div>
  );
};

export default CartModal;

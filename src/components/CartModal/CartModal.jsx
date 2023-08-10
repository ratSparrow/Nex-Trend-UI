import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const dollarSign = <FontAwesomeIcon icon={faDollarSign} />;

const CartModal = ({ children, handleRemove, cart }) => {
  const { products } = useSelector((state) => state.cart);
  let total = 0;
  let grandTotal = 0;
  for (const product of cart) {
    total = total + product.price;
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.1;
    grandTotal = total + shipping + tax;
  }

  return (
    <React.Fragment>
      <input type="checkbox" id="cart-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="cart-modal"
            className="btn btn-sm btn-circle border-none hover:bg-white bg-white text-red-500 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className=" text-amber-600 font-semibold text-2xl mb-4 ">
            Shopping Cart
          </h3>

          <Cart products={products} />
          <h2 className="text-sm font-semibold">Sub Total</h2>
          <h2 className="text-sm mb-5 font-semibold text-blue-500">
            {grandTotal.toFixed(2)} {dollarSign} [USD]
          </h2>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartModal;

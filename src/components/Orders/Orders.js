import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";

import CartModal from "../CartModal/CartModal";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  console.log(cart);

  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };

  return (
    <div className="">
      {cart.length > 0 ? (
        <div className="product-container">
          {cart.map((product) => (
            <ReviewItem
              product={product}
              key={product._id}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      ) : (
        <div>
          <h3 className="font-semibold text-xl text-slate-800 m-5 p-2">
            No Product added to the cart
          </h3>
        </div>
      )}
      <div className="">
        <CartModal key={cart._id} cart={cart}>
          <Link to="/orders">
            <button className="btn-regular">Proceed payment</button>
          </Link>
        </CartModal>
      </div>
    </div>
  );
};

export default Orders;

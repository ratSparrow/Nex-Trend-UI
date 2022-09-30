import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";

import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };

  return (
    <div className="shop-container">
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
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/shipping">
            <button className="rounded w-full text-white text-black-500 mx-auto px-1 bg-green-500 p-1  hover:bg-green-700 m-3 cursor-pointer">
              Proceed Shipping
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;

import React from "react";
import { Link } from "react-router-dom";
import CartModal from "../CartModal/CartModal";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useDispatch, useSelector } from "react-redux";
import { removeOneFromCart } from "../../redux/features/cart/cartSlice";
import orderImg from "../../assets/no-order.png";

const Orders = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeOneFromCart(product));
  };

  return (
    <div className="  max-w-[1200px] mx-auto">
      {products.length > 0 ? (
        <div className="">
          {products.map((product) => (
            <ReviewItem
              product={product}
              key={product._id}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h3 className="font-bold text-3xl text-teal-800 m-5 p-2">
            NO ORDER FOUND
          </h3>
          <img src={orderImg} alt="" />
        </div>
      )}
      <div className="">
        <CartModal key={products._id} cart={products}>
          <Link to="/payment">
            <button className="btn-regular">Proceed payment</button>
          </Link>
        </CartModal>
      </div>
    </div>
  );
};

export default Orders;

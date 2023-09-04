import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/payment">
        <div className="my-4 flex justify-end">
          <button className="rounded font-semibold text-white w-2/4 mx-auto px-1 bg-green-500 p-1  hover:bg-green-600  m-3 cursor-pointer">
            Proceed Payment
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Orders;

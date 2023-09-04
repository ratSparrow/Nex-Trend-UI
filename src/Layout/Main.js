import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";
import CartModal from "../components/CartModal/CartModal";
import { useSelector } from "react-redux";
import Assistant from "../components/Shared/Assistant/Assistant";

const Main = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar />
      <CartModal>
        <Link to="/orders">
          <button className="btn-regular">Review Order</button>
        </Link>
      </CartModal>
      <div className="fixed top-2/4 right-0">
        <label
          title="cart"
          htmlFor="cart-modal"
          className="btn bg-black border-0 text-[#FB923C]  rounded"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <h1>
              <span className="badge text-red-400 bg-white border-none badge-sm indicator-item">
                {products.length}
              </span>
            </h1>
          </div>
        </label>
      </div>
      <Assistant />
      <Outlet />

      <Footer />
    </div>
  );
};

export default Main;

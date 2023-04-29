import React from "react";
import hero2 from "../../../assets/hero2.avif";

const Banner = () => {
 
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={hero2} alt="" className="max-w-lg rounded-lg shadow-2xl" />

        <div>
          <h1 className="text-5xl font-bold text-emerald-400">
            Get Free Online Delivery!
          </h1>
          <p className="py-6">
            Discount codes are personalized or publicly-released codes offered
            to customers as a purchasing incentive that reduces the price of an
            order.
          </p>
          <button className="btn bg-gradient-to-r from-primary to-secondary btn-primary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

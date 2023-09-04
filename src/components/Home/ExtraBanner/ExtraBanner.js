import React from "react";
import banner1 from "../../../assets/banner/b-1.jpg";
import banner2 from "../../../assets/banner/b-2.jpg";
import "./ExtraBanner.css";

const ExtraBanner = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="freepay grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6 my-20 bg-white">
        <div className="pdding1 p-8 text-center">
          <i className="fa-solid fa-truck text-2xl text-white bg-lime-600 px-3 py-3 rounded-full"></i>
          <h2 className="frshipping font-bold text-slate-800 py-1">
            Free Shipping
          </h2>
          <h4 className="ukship text-sm text-slate-500">
            Free UK shipping when you spend £30.
          </h4>
        </div>
        <div className="pdding2 p-8 text-center">
          <i className="fa-brands fa-pagelines text-2xl text-white bg-lime-600 px-4 py-3 rounded-full"></i>
          <h2 className="gtproducts font-bold text-slate-800 py-1">
            Get Fresh Products
          </h2>
          <h4 className="findfood text-sm text-slate-500">
            Find a range of best online organic food.
          </h4>
        </div>
        <div className="pdding3 p-8 text-center">
          <i className="fa-solid fa-dollar-sign text-2xl text-white bg-lime-600 px-4 py-2.5 rounded-full"></i>
          <h2 className="moneybck font-bold text-slate-800 py-1">
            Moneyback Offer
          </h2>
          <h4 className="freespend text-sm text-slate-500">
            Free UK shipping when you spend £30.
          </h4>
        </div>
        <div className="pdding4 p-8 text-center">
          <i className="fa-solid fa-shield-halved text-2xl text-white bg-lime-600 px-4 py-3 rounded-full"></i>
          <h2 className="spay font-bold text-slate-800 py-1">Safe Payment</h2>
          <h4 className="paymethod text-sm text-slate-500">
            We are using secure payment methods..
          </h4>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="img1-container mx-auto  ">
            <img className="w-full" src={banner1} alt="" />
          </div>
          <div className="img2-container mx-auto  ">
            <img className="w-full" src={banner2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraBanner;

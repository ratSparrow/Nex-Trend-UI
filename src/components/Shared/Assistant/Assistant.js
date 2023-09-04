import React from "react";
import { Link } from "react-router-dom";

const Assistant = () => {
  return (
    <div className="fixed top-3/4 left-0">
      <button type="" className="ml-2  bg-green-600 rounded-lg px-4 py-2">
        <Link
          title="chatbot"
          target="_blank"
          to="https://lucky-dieffenbachia-8f04be.netlify.app/?fbclid=IwAR0bobbj9Wn-g3p9CgszIHiMtvtNS_LKVcChT2hXbToB5280FIc0jp5w-xA"
          className="flex items-center justify-between"
        >
          <i className="fa-solid fa-headset text-2xl font-extrabold text-white"></i>
          <span className="ml-2 text-white font-serif font-bold">
            How Can I Help?
          </span>
        </Link>
      </button>
    </div>
  );
};

export default Assistant;

import React from "react";
import { Link } from "react-router-dom";

const Assistant = () => {
  return (
    <>
      <button type="" className="ml-8">
        <Link
          title="chatbot"
          to="https://lucky-dieffenbachia-8f04be.netlify.app/?fbclid=IwAR0bobbj9Wn-g3p9CgszIHiMtvtNS_LKVcChT2hXbToB5280FIc0jp5w-xA"
        >
          <i className="fa-solid fa-headset text-2xl text-red-400"></i>
        </Link>
      </button>
    </>
  );
};

export default Assistant;

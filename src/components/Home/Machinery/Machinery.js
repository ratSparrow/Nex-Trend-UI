import React from "react";
import { Link } from "react-router-dom";
import machine1 from "../../../assets/machine1.jpg";
import machine2 from "../../../assets/machine2.webp";
import machine3 from "../../../assets/machine3.jpg";

const machinery = [
  {
    id: 1,
    title: "Woodworking Machinery",
    img: machine3,
  },
  {
    id: 1,
    title: "Plastic & Rubber Machinery",
    img: machine1,
  },
  {
    id: 1,
    title: "Laser & Machine Tool Equipment",
    img: machine2,
  },
];

export default function Machinery() {
  return (
    <div className="text-center ">
      <div className="bg-[#374151] py-4">
        <h2 className="text-[#F59238] my-1 text-md font-bold">
          Pro Buyer Exclusive
        </h2>
        <h2 className="text-[#F59238] my-1 text-sm font-normal">
          Get payment terms and much more
        </h2>
        <Link to="/coming-soon">
          <button className="bg-[#F59238] w-3/4 rounded-full my-1">
            Upgrade
          </button>
        </Link>
      </div>
      <div>
        <button className="bg-[#FF8C2E] mx-auto rounded-md py-1 font-semibold text-white w-full text-sm mt-2">
          <Link to="/cmoing-soon">Selected Machinery</Link>
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-center">Coming Soon !!!</h2>

      <button className="bg-[#F59E0B] mx-auto rounded-full py-1 w-1/3 text-sm mt-1">
        <Link to="/">Go To Home</Link>
      </button>
    </div>
  );
}

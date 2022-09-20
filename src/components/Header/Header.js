import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="text-center">
      <nav className="bg-emerald-800 p-2 ">
        <Link
          className="text-white font-semibold text-xl hover:text-amber-600 mr-3"
          to="/shop"
        >
          Shop
        </Link>
        <Link
          className="text-white font-semibold text-xl hover:text-amber-600 mr-3"
          to="/orders"
        >
          Orders
        </Link>
        <Link
          className="text-white font-semibold text-xl hover:text-amber-600 mr-3"
          to="/inventory"
        >
          Invetory
        </Link>
        <Link
          className="text-white font-semibold text-xl hover:text-amber-600 mr-3"
          to="/about"
        >
          About
        </Link>

        {user ? (
          <button
            className="rounded-full font-semibold text-white text-black-500  mx-auto bg-teal-900 w-1/6 hover:text-amber-600 hover:capitalize m-2 cursor-pointer"
            onClick={handleSignOut}
          >
            logout
          </button>
        ) : (
          <Link
            className="text-white font-semibold text-xl hover:text-amber-600 mr-3"
            to="/login"
          >
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;

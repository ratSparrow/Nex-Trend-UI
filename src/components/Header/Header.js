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
    <div className="header">
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Invetory</Link>
        <Link to="/about">About</Link>

        {user ? (
          <button
            className=" rounded-full font-bold text-white text-black-500  mx-auto bg-yellow-500 w-1/6 hover:bg-red-700 m-2 cursor-pointer"
            onClick={handleSignOut}
          >
            sign out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;

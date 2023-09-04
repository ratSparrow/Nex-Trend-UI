import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/favicon.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const navItems = (
    <React.Fragment>
      <li>
        <Link to="/">Homepage</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
      <li tabIndex={0}>
        <Link>
          Support
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2 bg-base-100">
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms & Conditions</Link>
          </li>
        </ul>
      </li>
      {user && (
        <React.Fragment>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </React.Fragment>
      )}

      {user ? (
        <li>
          <button
            onClick={async () => {
              const success = await signOut();
              if (success) {
                toast("You are sign out");
                localStorage.removeItem("accessToken");
              }
            }}
          >
            Sign Out
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <>
      <div className="navbar bg-[#1A103C] ">
        <div className="navbar-start ">
          <div className="dropdown max-w-[1100px]">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <h3
            title="home"
            className="navbar-center font-extrabold  text-white font-serif"
          >
            <Link to="/" className="  ">
              <div className="flex items-center">
                <img src={logo} className="w-10 mx-auto" alt="" />{" "}
                <span className="text-xl ml-6">Digi Mart </span>
              </div>
            </Link>
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex max-w-[1100px] mx-auto">
          <ul className="menu menu-horizontal px-1 text-fuchsia-600 ">
            {navItems}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

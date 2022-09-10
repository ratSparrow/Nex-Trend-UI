import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <img className="logo" src={logo} alt="" />
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Invetory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Invetory</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Header;
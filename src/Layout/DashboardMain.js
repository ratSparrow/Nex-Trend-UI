import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const DashboardMain = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Products</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardMain;

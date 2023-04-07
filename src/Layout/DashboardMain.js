import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const DashboardMain = () => {
  const [user] = useAuthState(auth);
  const [isUserAdmin] = useAdmin(user?.email);
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
            {isUserAdmin ? (
              <React.Fragment>
                <li>
                  <Link to="/dashboard/user">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/addVendor">Add Vendor</Link>
                </li>
                <li>
                  <Link to="/dashboard">Review</Link>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardMain;

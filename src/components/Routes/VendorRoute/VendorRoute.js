import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useVendor from "../../../hooks/useVendor";
import Loading from "../../Shared/Loading/Loading";

const VendorRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [isVendor, vendorLoading] = useVendor(user?.email);
  const location = useLocation();
  if (loading || vendorLoading) {
    return <Loading />;
  }
  if (user && isVendor) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default VendorRoute;

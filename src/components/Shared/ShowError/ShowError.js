import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { useNavigate, useRouteError } from "react-router-dom";
import auth from "../../../firebase.init";

const ShowError = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const [signOut] = useSignOut(auth);
  const handleLogout = async () => {
    const success = await signOut();
    if (success) {
      navigate("/login");
      toast("Oops! User Sign Out");
    }
  };
  setTimeout(() => {
    navigate.push("/");
  }, 3000);

  return (
    <div>
      <p className="text-red-500">Something! went wrong</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4 className="text-3xl">
        Please <button onClick={handleLogout}>Sign Out</button>
      </h4>
    </div>
  );
};

export default ShowError;

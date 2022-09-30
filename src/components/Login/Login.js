import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Input from "../Input/Input";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  console.log(user?.displayName);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLoginData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(loginData.email, loginData.password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <Input
      handleSubmit={handleSubmit}
      handleLoginData={handleLoginData}
      loading={loading}
      error={error}
      text="login"
      link="not an account? sign up"
    />
  );
};

export default Login;

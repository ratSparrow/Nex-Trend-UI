import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Input from "../Input/Input";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleLoginData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(loginData.email, loginData.password);
  };

  if (user) {
    navigate("/shop");
  }

  return (
    <div className="bg-slate-100 w-96 mx-auto border-2 rounded mt-10">
      <Input
        handleSubmit={handleSubmit}
        handleLoginData={handleLoginData}
        loading={loading}
        handleGoogleLogin={handleGoogleLogin}
        error={error}
        text="login"
        link="not an account? sign up"
      />
    </div>
  );
};

export default Login;

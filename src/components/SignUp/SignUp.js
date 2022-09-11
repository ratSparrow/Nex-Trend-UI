import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Input from "../Input/Input";

const SignUp = () => {
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleLoginData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    if (loginData.password !== loginData.confirmPassword) {
      setError("password didn't match, please try again");
      return;
    } else if (loginData.password.length < 6) {
      setError("password must be six characters");
      return;
    }
    createUserWithEmailAndPassword(loginData.email, loginData.password);
  };
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  if (user) {
    navigate("/inventory");
  }

  return (
    <>
      <div className="bg-slate-100 w-96 mx-auto border-2 rounded mt-10">
        <Input
          handleSubmit={handleSubmit}
          handleLoginData={handleLoginData}
          loading={loading}
          handleGoogleLogin={handleGoogleLogin}
          error={error}
          text="signup"
          link="Already have an account? login..."
        />
      </div>
    </>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    setLoginEmail(data.email);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(loginData.email, loginData.password);
  // };

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div className="bg-slate-100 w-96 mx-auto border-2 rounded mt-10">
      <h2 className="text-lg font-semibold text-black-500 text-center mb-4 text-red-900">
        Login
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 place-content-center "
      >
        <input
          required
          {...register("email")}
          type="email"
          name="email"
          placeholder="your email"
          className="rounded bg-white p-1 mx-auto hover:border-lime-300
            w-3/4 border"
        />

        <input
          required
          {...register("password")}
          type="password"
          name="password"
          placeholder="password"
          className="rounded bg-white p-1 mx-auto hover:border-lime-300
      w-3/4 border"
        />

        <input
          type="submit"
          className="rounded-full font-semibold text-white w-2/4 mx-auto px-1 bg-green-500 p-1  hover:bg-green-600 hover:text-amber-700 m-3 cursor-pointer"
        />
      </form>
      {loading && <progress className="progress w-56"></progress>}
      {error && (
        <h1 className="text-white text-center text-sm border-2 border-red-800 rounded p-1 m-3 bg-red-800">
          {error}
        </h1>
      )}
      <Link to="/signup">
        <h2 className="text-blue-800 hover:text-red-700 text-center text-sm mt-4 mb-3 hover:capitalize">
          Not an account? Sign Up
        </h2>
      </Link>
    </div>
  );
};

export default Login;

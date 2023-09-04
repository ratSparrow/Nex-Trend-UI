import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import "./Login.css";
import { toast } from "react-hot-toast";

const Login = () => {
  const [signInWithEmailAndPassword, error] =
    useSignInWithEmailAndPassword(auth);

  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    setLoginEmail(data.email);
  };

  if (token) {
    toast.success("user logged in successfully");
    navigate("/");
  }

  return (
    <div className="bg-slate-100  mx-auto border-2 rounded mt-10 sm:w-1/4 lg:w-2/4">
      <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
        <span className="border-b-2 border-orange-600 "> Sign In </span>
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
          className="rounded input-primary bg-white p-1 mx-auto hover:border-lime-300
            w-3/4 border"
        />

        <input
          required
          {...register("password")}
          type="password"
          name="password"
          placeholder="password"
          className="rounded input-primary bg-white p-1 mx-auto hover:border-lime-300
      w-3/4 border"
        />

        <input
          type="submit"
          className="rounded font-semibold text-white w-2/4 mx-auto px-1 bg-green-500 p-1  hover:bg-green-600  m-3 cursor-pointer"
        />
      </form>
      {error && (
        <h1 className="text-white text-center text-sm border-2 border-red-800 rounded p-1 m-3 bg-red-800">
          {error}
        </h1>
      )}
      <Link to="/signup">
        <h2 className="text-blue-800 hover:text-red-500 text-center text-xl  mt-4 mb-8 hover:capitalize ">
          <span className="border-b-2 border-blue-800 hover:border-red-500">
            Not An Account? Sign Up
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default Login;

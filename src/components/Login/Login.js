import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");
  const [signIn, err, googleSignIn] = useFirebase();

  const handleLoginData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  const handleGoogleLogin = () => {
    googleSignIn();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(loginData);
    setError(err);
  };
  return (
    <div>
      <div className="bg-slate-100 w-96 mx-auto border-2 rounded mt-10">
        <h2 className="text-lg font-semibold text-black-500 text-center mb-4">
          Login
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 place-content-center "
        >
          <input
            required
            onClick={handleLoginData}
            type="email"
            name="email"
            placeholder="email"
            className="rounded bg-white p-1 mx-auto hover:border-lime-300
                w-3/4 border"
          />
          <input
            required
            onChange={handleLoginData}
            type="password"
            name="password"
            placeholder="password"
            className="rounded bg-white p-1 mx-auto hover:border-lime-300
            w-3/4 border"
          />
          <input
            type="submit"
            placeholder="password"
            className="rounded-full font-bold text-white text-black-500 w-2/4 mx-auto px-1 bg-green-500 p-1  hover:bg-green-700 m-3 cursor-pointer"
          />
        </form>

        <div className="flex justify-center items-center">
          <div className="w-1/4 border-gray-300 border-b-2"></div>
          <div className="mx-2 text-gray-600">or</div>
          <div className="w-1/4 border-gray-300 border-b-2"></div>
        </div>

        <div className="text-center mt-3">
          <button
            onClick={handleGoogleLogin}
            className="flex mx-auto bg-blue-600 justify-between rounded-full items-center hover:bg-blue-800"
          >
            <h1>
              <i className="fab fa-google mx-px text-green-500  bg-white border rounded-full p-2 bg"></i>
            </h1>
            <h1 className="mx-3 text-sm font-bold text-white ">
              Continue with Google
            </h1>
          </button>
        </div>

        {error && (
          <h1 className="text-white text-center text-sm border-2 border-red-800 rounded p-1 m-3 bg-red-800">
            {error}
          </h1>
        )}
        <Link to="/signup">
          <h2 className="text-blue-800 text-center text-sm mt-2 mb-1 ">
            not an account? sign up
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Login;

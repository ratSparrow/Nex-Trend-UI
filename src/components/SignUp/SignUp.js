import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const SignUp = () => {
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");
  const [userCreation, success, err] = useFirebase();

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
    } else {
      userCreation(loginData);
      setError(err);
    }
  };
  return (
    <div>
      <div className="bg-slate-100 w-96 mx-auto border-2 rounded mt-10">
        <h2 className="text-lg font-semibold text-black-500 text-center mb-4">
          Sign Up
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 place-content-center "
        >
          <input
            required
            onInput={handleLoginData}
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
            required
            onChange={handleLoginData}
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            className="rounded bg-white p-1 mx-auto hover:border-lime-300
          w-3/4 border"
          />

          <input
            type="submit"
            placeholder="password"
            className="rounded text-white text-black-500 w-2/4 mx-auto px-1 bg-green-500  hover:bg-green-700 m-2 cursor-pointer"
          />
        </form>
        {error && (
          <h1 className="text-white text-center text-sm border-2 border-red-800 rounded p-1 m-3 bg-red-800">
            {error}
          </h1>
        )}

        <Link to="/login">
          <h2 className="text-blue-800 text-center text-sm mt-2 mb-1">
            Already have an account? login...
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

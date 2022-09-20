import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Input = ({
  handleSubmit,
  handleLoginData,
  loading,
  error,
  text,
  link,
}) => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div className="bg-slate-100 w-96 mx-auto border-2 rounded mt-10">
      <h2 className="text-lg font-semibold text-black-500 text-center mb-4 text-red-900">
        {text}
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
        {text === "signup" && (
          <input
            required
            onChange={handleLoginData}
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            className="rounded bg-white p-1 mx-auto hover:border-lime-300
      w-3/4 border"
          />
        )}
        <input
          type="submit"
          className="rounded-full font-semibold text-white w-2/4 mx-auto px-1 bg-green-500 p-1  hover:bg-green-600 hover:text-amber-700 m-3 cursor-pointer"
        />
      </form>

      {loading && <p>Loading..</p>}
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
          <i className="fab fa-google mx-px text-green-500  bg-white border rounded-full p-2 bg"></i>

          <span className="mx-3 text-sm font-semibold text-white ">
            Continue with Google
          </span>
        </button>
      </div>

      {error && (
        <h1 className="text-white text-center text-sm border-2 border-red-800 rounded p-1 m-3 bg-red-800">
          {error}
        </h1>
      )}
      {text === "login" ? (
        <Link to="/signup">
          <h2 className="text-blue-800 hover:text-red-700 text-center text-sm mt-4 mb-3 hover:capitalize">
            {link}
          </h2>
        </Link>
      ) : (
        <Link to="/login">
          <h2 className="text-blue-800 hover:text-red-700 text-center text-sm mt-4 mb-3 hover:capitalize">
            {link}
          </h2>
        </Link>
      )}
    </div>
  );
};

export default Input;

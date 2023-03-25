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
    <div>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Input;

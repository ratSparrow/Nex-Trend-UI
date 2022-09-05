import React from "react";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
  };
  return (
    <div>
      <div className="bg-slate-100 w-96 mx-auto border-2 rounded mt-10">
        <h2 className="text-lg font-semibold text-black-500 text-center mb-4">
          Please Login
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 place-content-center "
        >
          <input
            type="text"
            placeholder="email"
            className="rounded bg-white p-1 mx-auto hover:border-lime-300
                w-3/4 border"
          />
          <input
            type="password"
            placeholder="password"
            className="rounded bg-white p-1 mx-auto hover:border-lime-300
            w-3/4 border"
          />
          <input
            type="submit"
            placeholder="password"
            className="rounded text-white text-black-500 w-2/4 mx-auto px-1 bg-green-500  hover:bg-green-700 m-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

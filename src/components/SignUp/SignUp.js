import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfile(auth);
  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    if (data.password === data.confirmPassword) {
      await createUserWithEmailAndPassword(data.email, data.password);
      const success = await updateProfile({ displayName: data.name });
      if (success) {
        saveUserDb(data.email, data.name);
      }
    }
  };

  if (token) {
    navigate(from, { replace: true });
  }

  const saveUserDb = (email, name) => {
    const user = { email, name };
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          setLoginEmail(email);
          toast("Profile created and  updated");
        }
      });
  };

  return (
    <React.Fragment>
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
            {...register("name")}
            type="text"
            name="name"
            placeholder="your name"
            className="rounded bg-white p-1 mx-auto hover:border-lime-300
w-3/4 border"
          />
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
            required
            {...register("confirmPassword")}
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            className="rounded bg-white p-1 mx-auto hover:border-lime-300
w-3/4 border"
          />

          <input
            type="submit"
            className="rounded-full font-semibold text-white w-2/4 mx-auto px-1 bg-green-500 p-1  hover:bg-green-600 hover:text-amber-700 m-3 cursor-pointer"
          />
        </form>
        <Link to="/login">
          <h2 className="text-blue-800 hover:text-red-700 text-center text-sm mt-4 mb-3 hover:capitalize">
            Login
          </h2>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SignUp;

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
  const [createUserWithEmailAndPassword] =
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
    fetch("https://e-server-eta.vercel.app/user", {
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
          toast.success("Profile created and updated successfully");
        }
      });
  };

  return (
    <React.Fragment>
      <div className="bg-slate-100  border-2 mx-auto sm:w-1/4 lg:w-2/4  rounded mt-10">
        <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
          <span className="border-b-2 border-orange-600 "> Sign Up </span>
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
            placeholder="Name"
            className="rounded input-primary bg-white  p-1 mx-auto hover:border-lime-300
w-3/4 border"
          />
          <input
            required
            {...register("email")}
            type="email"
            name="email"
            placeholder="Email"
            className="rounded input-primary bg-white p-1 mx-auto hover:border-lime-300
        w-3/4 border"
          />

          <input
            required
            {...register("password")}
            type="password"
            name="password"
            placeholder="Password"
            className="rounded input-primary bg-white p-1 mx-auto hover:border-lime-300
  w-3/4 border"
          />
          <input
            required
            {...register("confirmPassword")}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="rounded input-primary bg-white p-1 mx-auto hover:border-lime-300
w-3/4 border"
          />

          <input
            type="submit"
            className="rounded  font-semibold text-white w-2/4 mx-auto px-1 bg-green-500 p-1  hover:bg-green-600 m-3 cursor-pointer"
          />
        </form>
        <Link to="/login">
          <h2 className="text-blue-800 hover:text-red-500 text-center text-xl  mt-4 mb-8 hover:capitalize ">
            <span className="border-b-2 border-blue-800 hover:border-red-500">
              Already Have An Account ? Please Login
            </span>
          </h2>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SignUp;

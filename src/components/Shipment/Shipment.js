import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import auth from "../../firebase.init";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

const Shipment = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);
  const [user] = useAuthState(auth);
  console.log(cart);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const shipment = {
      cart,
      data,
    };
    fetch("http://localhost:5000/shipping", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(shipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.insertedId) {
          toast("Shipping added successfully ");
          reset();
        }
      });
  };

  return (
    <div className="bg-slate-300 w-96 mx-auto p-5 rounded mt-10">
      <h2 className=" font-semibold text-2xl text-center mb-5 text-red-900 ">
        Shipping Information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="rounded bg-white p-1 mx-auto hover:border-lime-300 w-full mb-3 border"
          defaultValue={user.displayName}
          {...register("Name")}
        />

        <input
          className="rounded bg-white p-1 mx-auto hover:border-lime-300 w-full border mb-3"
          defaultValue={user.email}
          {...register("email")}
        />

        <textarea
          className="rounded bg-white p-1 mx-auto hover:border-lime-300 w-full border"
          placeholder="address"
          {...register("address", { required: true })}
        />

        <input
          className="rounded bg-white p-1 mx-auto hover:border-lime-300 w-full border mb-3"
          placeholder="phone"
          {...register("phone")}
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="rounded font-semibold text-white  w-full mx-auto px-1 bg-green-500 p-1  hover:bg-green-600 hover:rounded-full m-3 cursor-pointer"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Shipment;

import React from "react";
import { useForm } from "react-hook-form";

const Newsletter = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" grid grid-cols-3 gap-4 mt-8 pl-3 bg-gray-500 py-4 rounded-sm">
      <div>
        <h2 className="text-white font-semibold text-center ">
          Sign Up for news letter
        </h2>
      </div>
      <div>
        <h2 className="text-sm text-white mb-2">
          Get all the latest information on Events, Sales and Offers.
        </h2>
        <h2 className="text-sm text-white font-semibold">
          Receive $10 coupon for first shopping.
        </h2>
      </div>
      <div className="mr-2">
        {" "}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center"
        >
          <input
            required
            {...register("email")}
            type="email"
            name="email"
            placeholder=" email"
            className="rounded  bg-white ml-2 p-1 mx-auto hover:border-gray-600 h-2/4
          w-3/4  "
          />

          <input
            type="submit"
            className="rounded text-white h-2/4 w-2/4 mx-auto px-1 bg-gray-600 p-1  hover:bg-gray-700  m-3 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

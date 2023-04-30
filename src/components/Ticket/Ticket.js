import React from "react";
import { useForm } from "react-hook-form";
import support from "../../assets/support.png";

const Ticket = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:mx-8">
      <div className="lg:mt-4">
        <h2 className="text-2xl font-bold mb-7">
          Get assistance with any issues you may be facing, We're here to help.
        </h2>
        <img src={support} alt="" />
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 place-content-center mt-5"
        >
          <input
            required
            {...register("name")}
            type="email"
            name="name"
            placeholder="Enter Your Full Name"
            className="rounded  p-3 mx-auto 
            w-full border bg-gray-200"
          />
          <input
            required
            {...register("email")}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="rounded  p-3 mx-auto 
                w-full border bg-gray-200"
          />

          <textarea
            rows="6"
            cols="100"
            required
            {...register("text")}
            type="text"
            name="text"
            placeholder="Enter Your Message"
            className="rounded  p-3 mx-auto 
                w-full border bg-gray-200"
          />

          <input
            type="submit"
            placeholder="Contact"
            className="rounded font-semibold text-white w-full mx-auto px-1 bg-orange-500 p-1  hover:bg-orange-600  m-3 cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
};

export default Ticket;

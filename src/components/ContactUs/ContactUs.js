import React from "react";
import { useForm } from "react-hook-form";
import contact from "../../assets/contact.png";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};

  return (
    <section className="mx-8  max-w-[1200px] mx-auto">
      <h2 className="text-4xl font-bold my-4">Lets talk about everything!</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="mx-auto my-auto">
          <img
            src={contact}
            className="max-w-lg rounded-lg shadow-2xl lg:ml:10"
            alt="contact"
          />
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
      </div>
    </section>
  );
};

export default ContactUs;

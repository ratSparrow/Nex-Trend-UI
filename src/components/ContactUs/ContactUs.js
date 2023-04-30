import React from "react";
import { useForm } from "react-hook-form";
import contact from "../../assets/contact.avif";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};

  return (
    <section className="mx-8">
      <h2 className="text-2xl font-bold my-4">Lets talk about everything!</h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <img
            src={contact}
            className="max-w-lg rounded-lg shadow-2xl lg:ml:10"
            alt="contact"
          />
          <div>
            <h1 className="text-4xl font-bold">Connect To The Office!</h1>
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
                className="rounded font-semibold text-white w-2/4 mx-auto px-1 bg-orange-500 p-1  hover:bg-orange-600  m-3 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import contact from "../../images/review.png";

const sub = <FontAwesomeIcon icon={faMinus} />;
const add = <FontAwesomeIcon icon={faPlus} />;

export default function ProductDetails() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {};

  const { id } = useParams();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const result = await fetch(
        `https://e-server-eta.vercel.app/products/${id}`
      );
      const data = await result.json();
      return data;
    },
  });
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  const { category, features, img, name, price, seller, star, stock, reviews } =
    products;

  const handleDecrease = () => {};
  const handleIncrease = () => {};

  return (
    <section className="max-w-[1200px] mx-auto">
      <div className=" grid grid-cols-2">
        <div>
          <figure className="mx-auto">
            <img src={img} alt="" className="w-2/3 h-1/2 mt-6"></img>
          </figure>
        </div>
        <div className="card-body">
          <h2 className="text-[#3749BB] text-lg font-serif">{name}</h2>
          <h4 className="badge shadow-md p-3 text-white-700 font-serif">
            Price: $ {price}
          </h4>
          <h1 className="text-lg font-semibold my-3  font-serif">
            Key Features
          </h1>
          <h4 className="font-serif text-sm text-teal-800 font-semibold">
            Availability: {stock}
          </h4>
          <h4 className="font-serif text-sm">Category: {category}</h4>
          <h4 className="font-serif text-sm">Status: {seller}</h4>
          <h4 className="font-serif text-sm">
            Average Rating:{" "}
            <Rating
              className="text-red-500"
              initialRating={star}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            />
          </h4>
          {reviews ? (
            <h4 className="font-serif text-sm">Reviews: {reviews}</h4>
          ) : (
            <h4 className="font-serif text-sm text-teal-500">
              No Reviews For This Product
            </h4>
          )}
          <Link href="#description" className="font-serif text-sm text-red-500">
            <span className="border-b-2 border-red-500">View More Info</span>
          </Link>
          <div className="flex justify-center items-center  mt-5 shadow-lg rounded py-3">
            <button
              className="mx-2 border px-3 py-1 hover:bg-teal-500 hover:text-white rounded"
              onClick={() => handleDecrease()}
            >
              {sub}
            </button>
            <h2 className="text-md bg-base-200 px-3 py-1 font-semibold rounded  border-slate-300 border">
              0
            </h2>
            <button
              className="mx-2 border px-3 py-1 hover:bg-teal-500 hover:text-white rounded"
              onClick={() => handleIncrease()}
            >
              {add}
            </button>
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <div id="description" className="shadow-xl  px-4 mx-4 min-h-max">
        <h4 className="font-serif text-md hover:cursor-auto font-semibold mt-5 mb-6 ">
          <span className="bg-[#E5330B] text-white rounded px-4 py-2">
            Description
          </span>
        </h4>
        <h4 className=" font-serif text-sm mt-2 decoration-black pb-5">
          {features.map((feature) => (
            <ul className="flex item-center justify-between">
              <li className="text-lg my-1">{feature.description} : </li>
              <li className="text-lg my-1"> {feature.value}</li>
            </ul>
          ))}
        </h4>
      </div>
      <section className=" mt-8">
        <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
          <span className="border-b-2 border-orange-600 ">
            Lets Make A Review!{" "}
          </span>
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="mx-auto my-auto">
            <img
              src={contact}
              className="max-w-lg rounded-lg  lg:ml:10"
              alt="review"
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
    </section>
  );
}

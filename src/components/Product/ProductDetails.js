import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import contact from "../../images/review.png";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeOneFromCart,
} from "../../redux/features/cart/cartSlice";

const sub = <FontAwesomeIcon icon={faMinus} />;
const add = <FontAwesomeIcon icon={faPlus} />;

export default function ProductDetails() {
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const { id } = useParams();

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
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

  const {
    category,
    features,
    img,
    name,
    price,
    seller,
    star,
    stock,
    reviews,
    quantity,
  } = products;
  // console.log(products);
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData);
        if (imgData.success === true) {
          const review = {
            name: data.name,
            email: data.email,
            location: data.location,
            img: imgData.data.url,
            text: data.text,
          };
          console.log(review);
          fetch(`https://e-server-eta.vercel.app/products/${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                toast.success("Review added Successfully");
                refetch();
                reset();
              }
            });
        }
      });
  };

  const handleDecrease = () => {
    dispatch(removeOneFromCart(products));
  };
  const handleIncrease = () => {
    dispatch(addToCart(products));
  };

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

          <Link href="#description" className="font-serif text-sm text-red-500">
            <span className="border-b-2 border-red-500">View More Info</span>
          </Link>
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
      <div id="" className="  px-4 mx-4 min-h-max mt-10">
        <h4 className="font-serif text-md hover:cursor-auto font-semibold mt-5 mb-6 ">
          <span className="bg-[#E5330B] text-white rounded px-4 py-2">
            Reviews
          </span>
        </h4>
        {reviews ? (
          <h4 className=" font-serif text-sm mt-2 decoration-black pb-5">
            <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-4">
              {reviews.map((review) => (
                <div className="card shadow-xl ">
                  <div className="px-3 py-6">
                    <p className="text-xl text-orange-600">{review.text}</p>
                    <div className="flex items-center justify-between">
                      {review.img && (
                        <div className="avatar mr-3">
                          <div className="w-16 rounded-full">
                            <img src={review.img} alt="" />
                          </div>
                        </div>
                      )}
                      <div className="mt-5">
                        <h3 className="text-lg">{review.name}</h3>
                        {review?.location && (
                          <h3 className="text-sm my-3"> {review.location}</h3>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </h4>
        ) : (
          <h4 className="shadow-xl p-4 rounded font-serif text-2xl text-orange-600">
            No Reviews Added For This Product. Please Add Some Review.
          </h4>
        )}
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
              className="grid grid-cols-1 sm:w-2/3 mx-auto gap-4 place-content-center lg:mt-3"
            >
              <input
                required
                {...register("name")}
                type="text"
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
              <input
                required
                {...register("location")}
                type="text"
                name="location"
                placeholder="Enter Your location"
                className="rounded  p-3 mx-auto 
                w-full border bg-gray-200"
              />
              <input
                {...register("image", { required: "image is required" })}
                type="file"
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

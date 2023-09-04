import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log();
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
        console.log(imgData);
        if (imgData.success === true) {
          const newProduct = {
            name: data.name,
            category: data.category,
            price: data.price,
            seller: data.seller,
            shipping: data.shipping,
            star: data.star,
            stock: data.stock,
            img: imgData.data.url,
          };
          console.log(newProduct);
          fetch("https://e-server-eta.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                toast.success(` product is added successfully`);
                navigate("/inventory");
              }
            });
        }
      });
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
        <span className="border-b-2 border-orange-600 ">ADD PRODUCT </span>
      </h2>
      <div className="mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="text-center">
          <div className="grid grid-cols-2 gap-4 ">
            <input
              required
              {...register("name")}
              type="text"
              name="name"
              placeholder="title example: Iphone 11 Pro Max"
              className="input mx-auto input-primary hover:border-lime-300 input-bordered  w-full rounded "
            />

            <input
              required
              {...register("category")}
              type="text"
              name="category "
              placeholder="category example: Electronics"
              className="input mx-auto input-primary hover:border-lime-300 input-bordered  w-full rounded "
            />
            <input
              required
              {...register("price")}
              type="text"
              name="price"
              placeholder="price example: $400"
              className="input mx-auto input-primary hover:border-lime-300 input-bordered  w-full rounded "
            />
            <input
              required
              {...register("seller")}
              type="text"
              name="seller"
              placeholder="seller example: Apple"
              className="input mx-auto input-primary hover:border-lime-300 input-bordered  w-full rounded "
            />
            <input
              required
              {...register("shipping")}
              type="text"
              name="shipping"
              placeholder="shipping charge example: $10"
              className="input mx-auto input-primary hover:border-lime-300 input-bordered  w-full rounded "
            />
            <input
              required
              {...register("star")}
              type="text"
              name="star"
              placeholder="review example: 4.5"
              className="input mx-auto input-primary hover:border-lime-300 input-bordered  w-full rounded "
            />
            <input
              required
              {...register("stock")}
              type="text"
              name="stock"
              placeholder="stock example: 100"
              className="input mx-auto input-primary hover:border-lime-300 input-bordered  w-full rounded "
            />
            <input
              {...register("image", { required: "image is required" })}
              type="file"
              className="input mx-auto input-primary hover:border-lime-300 input-bordered  w-full rounded "
            />
            {errors.image && (
              <p role="alert" className="text-red-600">
                {errors.name?.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            className="rounded font-semibold text-white w-1/3 mt-8  px-1 bg-orange-500 p-1  hover:bg-orange-600  m-3 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

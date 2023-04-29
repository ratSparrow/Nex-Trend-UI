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
          fetch("http://localhost:5000/products", {
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
    <div>
      <h2 className="text-2xl">Add Products</h2>
      <div className="mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 place-content-center "
        >
          <input
            required
            {...register("name")}
            type="text"
            name="name"
            placeholder="product name"
            className="input mx-auto input-bordered input-xs w-full max-w-xs"
          />

          <input
            required
            {...register("category")}
            type="text"
            name="category"
            placeholder="category"
            className="input mx-auto input-bordered input-xs w-full max-w-xs"
          />
          <input
            required
            {...register("price")}
            type="text"
            name="price"
            placeholder="price"
            className="input mx-auto input-bordered input-xs w-full max-w-xs"
          />
          <input
            required
            {...register("seller")}
            type="text"
            name="seller"
            placeholder="seller or vendor"
            className="input mx-auto input-bordered input-xs w-full max-w-xs"
          />
          <input
            required
            {...register("shipping")}
            type="text"
            name="shipping"
            placeholder="shipping charge"
            className="input mx-auto input-bordered input-xs w-full max-w-xs"
          />
          <input
            required
            {...register("star")}
            type="text"
            name="star"
            placeholder="review"
            className="input mx-auto input-bordered input-xs w-full max-w-xs"
          />
          <input
            required
            {...register("stock")}
            type="text"
            name="stock"
            placeholder="stock"
            className="input mx-auto input-bordered input-xs w-full max-w-xs"
          />
          <input
            {...register("image", { required: "image is required" })}
            type="file"
            className="input mx-auto input-bordered input-xs w-full max-w-xs"
          />
          {errors.image && (
            <p role="alert" className="text-red-600">
              {errors.name?.message}
            </p>
          )}

          <input
            type="submit"
            className="rounded-full  font-semibold text-white w-1/4 mx-auto px-1 bg-orange-500 p-1  hover:bg-orange-600  m-3 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

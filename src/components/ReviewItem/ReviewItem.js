import React from "react";
import Rating from "react-rating";

const ReviewItem = ({ product, handleRemove }) => {
  const { name, price, shipping, quantity, img, seller, stock, star } = product;
  const totalPrice = Number(quantity * price).toFixed(2);
  return (
    <main className="product-container py-5 mx-2 rounded hover:border hover:border-red-400">
      <section className="flex justify-around items-center ">
        <section className="mr-8">
          <figure>
            <img className="rounded " src={img} alt="" />
          </figure>
        </section>

        <section className="text-center">
          <h5 className="text-md font-semibold text-yellow-600" title={name}>
            {name.slice(0, 30)}..
          </h5>
          <h5
            className="text-md text-sm font-semibold text-teal-600"
            title={name}
          >
            shipping charge = {shipping}
          </h5>
          <h5
            className="text-md text-sm font-semibold text-teal-600"
            title={name}
          >
            total quantity = {quantity}
          </h5>
          <h2 className="my-1">
            <small>
              Seller by
              <span className="text-teal-600 font-semibold"> {seller}</span>
            </small>
          </h2>
          <h2 className="text-red-600 font-bold">
            <i className="fa-solid fa-bangladeshi-taka-sign"></i>
            <span> {totalPrice}</span>
          </h2>
          <h2 className="text-lg text-red-600 font-semibold">
            {" "}
            <small>available {stock} in stock </small>
          </h2>
          <Rating
            className="text-orange-400 mt-1"
            initialRating={star}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          />

          <br />
          <button
            className="w-full border rounded-lg bg-gray-300 text-red-600 hover:bg-red-700 hover:text-white p-1 mt-4"
            onClick={() => handleRemove(product)}
          >
            <i className="fas fa-trash "></i> Delete
          </button>
        </section>
      </section>
    </main>
  );
};

export default ReviewItem;

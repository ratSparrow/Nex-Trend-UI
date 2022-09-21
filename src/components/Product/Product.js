import {
  faDollarSign,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, stock, star } = product;

  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  const dollarSign = <FontAwesomeIcon icon={faDollarSign} />;

  return (
    <div className="border p-2 bg-slate-100 m-2">
      <div>
        <img
          title={name}
          className="w-2/3 mb-3 mx-auto rounded"
          src={img}
          alt=""
        />
      </div>

      <div className="flex justify-center items-center flex-col">
        <h4 title={name} className="text-rose-700 text-center">
          {name.slice(0, 60)}...
        </h4>
        <p className="text-fuchsia-500 mt-2 capitalize">
          <small>Vendor by {seller}</small>
        </p>
        <p className=" flex items-center mt-1">
          <span className="text-fuchsia-500 mr-1">{dollarSign}</span>

          <span>{price}</span>
        </p>
        <p className="text-fuchsia-600 mt-1">
          <small>Quantity: {stock} </small>
        </p>

        <Rating
          className="text-orange-400 mt-1"
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
        />

        <br />
        <button
          onClick={() => handleAddToCart(product)}
          className="border w-full mt-2 text-center p-1 rounded bg-yellow-500 capitalize px-2 cursor-pointer"
        >
          {cartIcon} add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

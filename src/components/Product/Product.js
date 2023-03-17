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
    <div className="card shadow-xl">
      <div className="card-body">
        <figure>
          <img src={img} alt="" />
        </figure>

        <h5 className="card-title" title={name}>
          {name.slice(0, 30)}...
        </h5>
        <h2>
          <small>Seller by {seller}</small>
        </h2>
        <h2>
          <span className="text-fuchsia-500 mr-1">{dollarSign}</span>
          <span>{price}</span>
        </h2>
        <h2>
          {" "}
          <small>Quantity: {stock} </small>
        </h2>
        <Rating
          className="text-orange-400 mt-1"
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
        />

        <div className="card-actions justify-end">
          <br />
          <button onClick={() => handleAddToCart(product)}>
            {cartIcon} add cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

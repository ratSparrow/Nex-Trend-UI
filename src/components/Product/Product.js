import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, stock, star } = product;

  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by {seller}</small>
        </p>
        <p>Price: {price}</p>
        <p>
          <small>only {stock} left in the stock</small>
        </p>
        <Rating
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
        />

        <br />
        <button
          onClick={() => handleAddToCart(product)}
          className="btn-regular"
        >
          {cartIcon} add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

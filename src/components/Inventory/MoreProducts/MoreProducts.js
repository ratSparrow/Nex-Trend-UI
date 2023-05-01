import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

const MoreProducts = ({ product }) => {
  const { img, name, seller, price, stock, star } = product;
  const handleAddToCart = () => {};
  return (
    <div className="card  shadow-md bg-base-100  rounded-none ">
      <figure className="w-2/4 mx-auto">
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="text-md font-semibold" title={name}>
          {product.name.slice(0, 20)}...
        </h2>
        <h2>
          <small>Seller by {seller}</small>
        </h2>

        <h2>
          {" "}
          <small>Quantity: {stock} </small>
        </h2>
        <Rating
          className="text-yellow-400 mt-1"
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
        />

        <div className="font-semibold text-xl flex justify-between items-center">
          <div className="text-orange-600">
            <span className="text-green-700 font-bold ">&#36;</span> {price}
          </div>
          <div>
            {" "}
            <button
              className=" border hover:border-red-700 rounded p-2 "
              onClick={() => handleAddToCart(product)}
            >
              {cartIcon}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;

/*        <div className="card-actions justify-center my-4">
          <button className="btn btn-sm text-xs hover:bg-[#FF6F61] bg-[#6B5B95] text-white border-0 rounded-full ">
            Add to Cart
          </button>
        </div> */

import {
  faDollarSign,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { addToDb } from "../../utilities/fakedb";

const Product = ({ product }) => {
  const { name, img, seller, price, stock, star } = product;
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    addToDb(product._id);
  };

  const cartIcon = (
    <FontAwesomeIcon className="text-sm mr-2" icon={faShoppingCart} />
  );
  const dollarSign = <FontAwesomeIcon icon={faDollarSign} />;

  return (
    <main className="product-container  mx-2 rounded hover:border hover:border-red-400">
      <section className="flex  items-center ">
        <section className="mr-8">
          <figure>
            <img className="rounded " src={img} alt="" />
          </figure>
        </section>

        <section>
          <h5 className="text-md font-semibold text-yellow-600" title={name}>
            {name.slice(0, 30)}..
          </h5>
          <h2 className="my-1">
            <small>
              Seller by{" "}
              <span className="text-red-600 font-semibold">{seller}</span>
            </small>
          </h2>
          <h2>
            <span className="text-[#0C436C] mr-1">{dollarSign}</span>
            <span>{price}</span>
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
            onClick={() => handleAddToCart(product)}
          >
            {cartIcon} Add
          </button>
        </section>
      </section>
    </main>
  );
};

export default Product;

import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Rating from "react-rating";

const xmark = <FontAwesomeIcon icon={faXmark} />;
const sub = <FontAwesomeIcon icon={faMinus} />;
const add = <FontAwesomeIcon icon={faPlus} />;

const Cart = ({
  cartProduct,
  handleRemove,
  handleDecrease,
  handleIncrease,
}) => {
  const { name, img, star, _id, quantity } = cartProduct;
  const [cartQuantity] = useState(quantity);

  return (
    <React.Fragment>
      {cartProduct._id ? (
        <div className=" w-full border-b-2 border-slate-300 mb-5">
          <div className="m-1 grid grid-cols-3 gap-2">
            <figure className="">
              <img className="w-1/4 rounded" src={img} alt="Shoes" />
            </figure>
            <h2 className="">
              <span className="font-semibold "> {name.slice(0, 15)}</span>
              <Rating
                className="text-amber-400 mt-1"
                initialRating={star}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              />
            </h2>

            <div>
              <div className="flex justify-center items-start">
                <button
                  className="mx-5 text-red-500"
                  onClick={() => handleRemove(_id)}
                >
                  {xmark}
                </button>
                <h2 className="text-sm font-medium">Remove </h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-2xl">Cart is Empty</h3>
      )}
    </React.Fragment>
  );
};

export default Cart;


/*

 <div className="mb-2 flex justify-center items-center">
                <button className="mx-2" onClick={() => handleDecrease(_id)}>
                  {sub}
                </button>
                <h2 className="text-sm bg-base-200 px-2 py-1 font-semibold rounded border-2 border-slate-300">
                  {cartQuantity}
                </h2>
                <button className="mx-2" onClick={() => handleIncrease(_id)}>
                  {add}
                </button>
              </div>
*/
import React from "react";

const ReviewItem = ({ product, handleRemove }) => {
  const { name, price, shipping, quantity, img } = product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by {quantity}</small>
        </p>
        <p>Price: {price}</p>
        <p>
          <small>only {shipping} left in the stock</small>
        </p>
        <div onClick={handleRemove}>
          {" "}
          <i className="fas fa-trash "></i>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;

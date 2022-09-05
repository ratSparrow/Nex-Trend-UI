import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.id}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;

import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const savedCart = getStoredCart();

  useEffect(() => {
    const storedCart = [];
    let quantity = 1;
    if (savedCart.length > 0) {
      for (const product of savedCart) {
        console.log(product);
        if (!product.quantity) {
          product.quantity = quantity;
        }
        storedCart.push(product);
      }
    }
    setCart(storedCart);
  }, []);

  return [cart, setCart];
};

export default useCart;

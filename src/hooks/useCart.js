import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];

    for (const id in savedCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = savedCart[id];
        addedProduct.quantity = quantity;
        storedCart.push(addedProduct);
      }
    }
    setCart(storedCart);
  }, [products]);

  return [cart, setCart];
};

export default useCart;

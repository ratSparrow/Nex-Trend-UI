import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";
import useProducts from "./useProducts";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [products] = useProducts();

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return [cart, setCart];
};

export default useCart;

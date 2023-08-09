import { useEffect, useState } from "react";

const useProducts = (page) => {
  let [products, setProducts] = useState([]);
  let [displayProduct, setDisplayProduct] = useState([]);

  const size = 9;

  useEffect(() => {
    fetch(`https://e-server-eta.vercel.app/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProduct(data);
      });
  }, []);

  return [products, displayProduct, setDisplayProduct];
};

export default useProducts;

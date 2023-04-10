import { useEffect, useState } from "react";

const useProducts = (page) => {
  const [products, setProducts] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);

  const size = 9;

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setDisplayProduct(data);
      });
  }, []);

  return [products, displayProduct, setDisplayProduct];
};

export default useProducts;

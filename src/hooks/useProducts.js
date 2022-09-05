import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProduct(data);
      });
  }, []);

  return [products, displayProduct, setDisplayProduct];
};

export default useProducts;

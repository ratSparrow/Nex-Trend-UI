import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "./../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  // selected product by clicking button
  const [cart, setCart] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProduct(data);
      });
  }, []);

  const handleSearch = (e) => {
    const searchProduct = e.target.value;
    const matchProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase())
    );
    console.log(matchProduct.length);
    setDisplayProduct(matchProduct);
  };

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];

      for (const key in savedCart) {
        const quantity = savedCart[key];
        const addedProduct = products.find((product) => product.key === key);
        addedProduct.quantity = quantity;
        storedCart.push(addedProduct);
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];

    setCart(newCart);
    addToDb(product.key);
  };
  return (
    <>
      <div className="search-container">
        <input type="text" onChange={handleSearch} />
      </div>
      <div className="shop-container">
        <div className="product-container">
          <h3>Products: </h3>
          {displayProduct.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;

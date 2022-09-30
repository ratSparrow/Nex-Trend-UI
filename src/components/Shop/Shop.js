import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "./../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, displayProduct, setDisplayProduct] = useProducts();
  const [cart, setCart] = useState([]);
 

  const handleSearch = (e) => {
    const searchProduct = e.target.value;
    const matchProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase())
    );

    setDisplayProduct(matchProduct);
  };

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];

      for (const key in savedCart) {
        const quantity = savedCart[key];
        const addedProduct = products.find((product) => product._id === key);
        addedProduct.quantity = quantity;
        storedCart.push(addedProduct);
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];

    setCart(newCart);
    addToDb(product._id);
  };
  return (
    <div>
      <div className=" text-center bg-emerald-800 mb-4">
        <input
          required
          onChange={handleSearch}
          placeholder="Search Product"
          type="text"
          className="rounded ml-4 mb-2 mt-2 hover:border-lime-700
            w-3/4 border"
        />
      </div>

      <div className="flex justify-between">
        <div className="grid gap-2 grid-cols-3 grid-rows-3 m-2">
          {displayProduct.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container border-l-2 border-black relative">
          <Cart key={cart._id} cart={cart}>
            <Link to="/orders">
              <button className="btn-regular">Review Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;

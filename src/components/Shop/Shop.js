import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import CartModal from "../CartModal/CartModal";
import Product from "./../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, displayProduct, setDisplayProduct] = useProducts();
  const [cart, setCart] = useState([]);
  const [isLoading, refetch] = useCart(products);

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
        console.log(key);
        const addedProduct = products.find((product) => product._id === key);
        if (quantity) {
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];

    setCart(newCart);
    addToDb(product._id);
  };

  return (
    <section className="my-7 p-2">
      <h4 className="text-3xl text-secondary  text-center font-bold ">
        Explore our Products
      </h4>
      <div className="grid ">
        <div className="grid  gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {displayProduct.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container border-l-2 border-accent ">
          <CartModal key={cart._id} cart={cart}>
            <Link to="/orders">
              <button className="btn-regular">Review Order</button>
            </Link>
          </CartModal>
        </div>
      </div>
    </section>
  );
};

export default Shop;

//   <div className=" text-center bg-emerald-800 mb-4">
//   <input
//     required
//     onChange={handleSearch}
//     placeholder="Search Product"
//     type="text"
//     className="rounded ml-4 mb-2 mt-2 hover:border-lime-700
//       w-3/4 border"
//   />
// </div>

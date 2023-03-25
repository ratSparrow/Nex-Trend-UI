import React, { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
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

  // useEffect(() => {
  //   if (products.length) {
  //     const savedCart = getStoredCart();
  //     console.log(savedCart)
  //     const storedCart = [];

  //     for (const key in savedCart) {
  //       const quantity = savedCart[key];
  //       const addedProduct = products.find((product) => product._id === key);
  //       if(quantity){
  //         addedProduct.quantity = quantity;
  //         storedCart.push(addedProduct);
  //       }

  //     }
  //     setCart(storedCart);
  //   }
  // }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];

    setCart(newCart);
    addToDb(product._id);
  };
  return (
    <section className="my-7 p-2">
      <h4 className="text-3xl text-secondary  text-center font-bold ">
        Explore our Products
      </h4>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="grid lg:col-span-3 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {displayProduct.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        <div className="cart-container border-l-2 border-accent relative">
          <Cart key={cart._id} cart={cart}>
            <Link to="/orders">
              <button className="btn-regular">Review Order</button>
            </Link>
          </Cart>
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

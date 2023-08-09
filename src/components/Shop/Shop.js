import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import useToken from "../../hooks/useToken";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
import CartModal from "../CartModal/CartModal";
import Product from "../Product/Product";

import "./Shop.css";

const Shop = () => {
  const [displayProduct] = useProducts("shop");
  const [cart, setCart] = useCart();
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [token] = useToken(email);
  const navigate = useNavigate();

  // const handleSearch = (e) => {
  //   const searchProduct = e.target.value;
  // };

  const handleRemove = (id) => {
    console.log(id);
    const remainingCart = cart.filter((p) => p._id !== id);
    console.log(remainingCart);
    setCart(remainingCart);
    removeFromDb(id);
  };

  const handleAddToCart = (product) => {
    const addedCart = cart?.find((p) => p._id === product._id);
    if (addedCart) {
      toast.error("Product has already been added");
      return;
    } else {
      if (token) {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product._id);
      } else {
        return navigate("/login");
      }
    }
  };

  return (
    <main className="bg-[#F5F6F7] py-5">
      <section className=" p-2 max-w-[1200px] mx-auto">
        <div className=" text-center mb-4">
          <input
            required
            placeholder="Search Product"
            type="text"
            className="input rounded-sm input-accent w-1/2 input-sm"
          />
        </div>
        <h4 className="text-3xl text-[#C92127]  text-center font-bold ">
          Our Featured Items
        </h4>
        <div className="grid ">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6">
            {displayProduct.map((product) => (
              <Product
                key={product._id}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>

          <div className="cart-container border-l-2 border-accent ">
            <CartModal handleRemove={handleRemove} key={cart._id} cart={cart}>
              <Link to="/orders">
                <button className="btn-regular">Review Order</button>
              </Link>
            </CartModal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;

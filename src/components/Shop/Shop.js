import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";
import useToken from "../../hooks/useToken";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import CartModal from "../CartModal/CartModal";
import Product from "./../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, displayProduct, setDisplayProduct] = useProducts("shop");
  const [cart, setCart] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [token] = useToken(email);
  const navigate = useNavigate();

  // const handleSearch = (e) => {
  //   const searchProduct = e.target.value;
  //   const matchProduct = products.filter((product) =>
  //     product.name.toLowerCase().includes(searchProduct.toLowerCase())
  //   );

  //   setDisplayProduct(matchProduct);
  // };

  const handleRemove = (id) => {
    console.log(id);

    const removeProduct = cart.filter((prod) => prod._id !== id);
    console.log(removeProduct);
    setCart(removeProduct);
  };

  useEffect(() => {
    const storedCart = [];
    if (products.length) {
      const savedCart = getStoredCart();
      for (const key in savedCart) {
        const quantity = savedCart[key];
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
          <CartModal handleRemove={handleRemove} key={cart._id} cart={cart}>
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

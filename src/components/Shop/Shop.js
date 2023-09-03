import React, { useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import CartModal from "../CartModal/CartModal";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [displayProduct] = useProducts("shop");
  const [searchText, setSearchText] = useState("");
  const handleSearch = (payload) => {
    setSearchText(payload);
  };

  return (
    <main className="bg-[#F5F6F7] py-5">
      <section className=" p-2 max-w-[1200px] mx-auto">
        <div className=" text-center mb-4">
          <input
            required
            onChange={(e) => handleSearch(e.target.value)}
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
            {displayProduct
              .reverse()
              .filter((item) => {
                return searchText.toLocaleLowerCase() === ""
                  ? item
                  : item.name.toLocaleLowerCase().includes(searchText);
              })
              .map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
          </div>

          <div className="cart-container border-l-2 border-accent ">
            <CartModal>
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

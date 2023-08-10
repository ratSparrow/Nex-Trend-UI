import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import CartModal from "../CartModal/CartModal";
import Product from "../Product/Product";
import "./Shop.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const Shop = () => {
  const [displayProduct, setDisplayProduct] = useProducts("shop");
  const [cart] = useCart();

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchProduct = e.target.value.toLowerCase();
    console.log(searchProduct);
    const resultsProduct = displayProduct.filter((product) =>
      product.name.toLowerCase().includes(searchProduct)
    );
    console.log(setDisplayProduct(resultsProduct));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    addToDb(product._id);
  };

  return (
    <main className="bg-[#F5F6F7] py-5">
      <section className=" p-2 max-w-[1200px] mx-auto">
        <div className=" text-center mb-4">
          <input
            required
            onChange={handleSearch}
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
            <CartModal key={cart._id} cart={cart}>
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

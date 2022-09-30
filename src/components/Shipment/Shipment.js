import React, { useState } from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

const Shipment = () => {
  const [loginData, setLoginData] = useState({});
  const [products] = useProducts();
  const [cart] = useCart(products);
  console.log(cart);

  // const navigate = useNavigate();

  const handleLoginData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData, cart);
  };

  return (
    <div className="bg-slate-300 w-96 mx-auto p-5 rounded mt-10">
      <h2 className=" font-semibold text-2xl text-center mb-5 text-red-900 ">
        Shipping Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 place-content-center "
      >
        <input
          required
          onClick={handleLoginData}
          type="text"
          name="name"
          placeholder="Type Your Name"
          className="rounded bg-white p-1 mx-auto hover:border-lime-300
                w-3/4 border"
        />
        <input
          required
          onClick={handleLoginData}
          type="email"
          name="email"
          placeholder="Type Your Email"
          className="rounded bg-white p-1 mx-auto hover:border-lime-300
                w-3/4 border"
        />
        <input
          required
          onChange={handleLoginData}
          type="text"
          name="address"
          placeholder="Type Your Address"
          className="rounded bg-white p-1 mx-auto hover:border-lime-300
            w-3/4 border"
        />
        <input
          required
          onChange={handleLoginData}
          type="text"
          name="phone"
          placeholder="Type Your Phone Number"
          className="rounded bg-white p-1 mx-auto hover:border-lime-300
            w-3/4 border"
        />

        <input
          type="submit"
          value="Add Shipping"
          className="rounded font-semibold text-white  w-2/4 mx-auto px-1 bg-green-500 p-1  hover:bg-green-600 hover:text-amber-900 m-3 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Shipment;

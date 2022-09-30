import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

const Shipment = () => {
  const [userInfo, setUserInfo] = useState({});
  const [products] = useProducts();
  const [cart] = useCart(products);
  const [user] = useAuthState(auth);

  const handleLoginData = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserInfo = { ...userInfo };
    newUserInfo[field] = value;
    setUserInfo(newUserInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user: userInfo,
      order: cart,
    };
    console.log(data);
    fetch("http://localhost:5000/shipping", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.insertedId) {
          alert("User Added Successfully");
        }
      });
    setUserInfo();
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
          readOnly
          onBlur={handleLoginData}
          type="text"
          name="name"
          value={user?.displayName}
          className="rounded bg-white p-1 mx-auto hover:border-lime-300 w-full border"
        />
        <input
          required
          readOnly
          onBlur={handleLoginData}
          type="email"
          name="email"
          value={user?.email}
          className="rounded bg-white p-1 mx-auto hover:border-lime-300
                w-full border"
        />
        <textarea
          required
          onChange={handleLoginData}
          type="text"
          name="address"
          rows="4"
          cols="50"
          placeholder=" Your Address"
          className="rounded bg-white p-1 mx-auto hover:border-lime-300
          w-full border"
        />
        <input
          required
          onChange={handleLoginData}
          type="text"
          name="phone"
          placeholder=" Phone "
          className="rounded bg-white p-1 mx-auto hover:border-lime-300 w-full border"
        />

        <input
          type="submit"
          value="Add Shipping"
          className="rounded font-semibold text-white  w-full mx-auto px-1 bg-green-500 p-1  hover:bg-green-600 hover:rounded-full m-3 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Shipment;

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { useSelector } from "react-redux";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const { total } = useSelector((state) => state.cart);
  let totalAmount;
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  totalAmount = total + shipping + tax;

  return (
    <div className=" max-w-[1200px] mx-auto">
      <p className="text-xl">
        Please pay <strong>${totalAmount.toFixed(2)}</strong> for your product.
      </p>
      <div className="w-96 my-9">
        <Elements stripe={stripePromise}>
          <CheckoutForm totalAmount={totalAmount} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

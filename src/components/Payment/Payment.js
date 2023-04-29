import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);

  let total = 0;
  let totalAmount = 0;
  for (const product of cart) {
    total = total + product.price;
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.1;
    totalAmount = total + shipping + tax;
  }
  console.log(totalAmount);

  return (
    <div>
      <p className="text-xl">
        Please pay <strong>${totalAmount}</strong> for your product.
      </p>
      <div className="w-96 my-9">
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} totalAmount={totalAmount} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

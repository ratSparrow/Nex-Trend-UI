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

  let totalAmount = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }

    totalAmount = totalAmount + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
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

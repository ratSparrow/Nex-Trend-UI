import React from "react";
import faq from "../../assets/faq.png";
import Questions from "./Questions";

const Faq = () => {
  return (
    <section className="sm:mx-8">
      <div>
        <h2 className="text-2xl text-center font-bold my-8">
          E Mart | Frequently Asked Question
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        <div className="my-auto">
          <p className="text-sm mb-3">
            Compile a list of FAQs drawn from data on past customer service
            interactions, such as phone calls, emails, or social media comments
            you have received. This valuable research will give you an idea of
            what categories, questions, and concerns to include on your FAQ
            page. The most common questions about how our business works and
            what can do for you.
          </p>
          <p className="text-sm mt-2 ">
            Currently, there is no built-in way to set a minimum purchase
            quantity for a specific product. However, to add a minimum or
            maximum order total, go to the Store Control Panel, click Settings,
            and then click Cart & Checkout. Set the minimum or maximum allowed
            order subtotal. If it is crucial to set a limit on a specific
            product, you can add the Purchase Quantity app in the Store Control
            Panel.
          </p>
        </div>
        <div className="my-auto">
          <img src={faq} alt="" />
        </div>
      </div>
      <Questions />
    </section>
  );
};

export default Faq;

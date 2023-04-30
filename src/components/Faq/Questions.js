import React from "react";

const questions = [
  {
    id: 1,
    title: "Do you ship to my country?",
    ans1: "Yes. We proudly ship worldwide! 🌎 Better yet, our tracked shipping is always 100% free of charge, with no minimum purchase! ✅",
    ans2: "We have shipped cute stationery free to over 200+ countries and we love adding more to the list!",
    ans3: "See the next question for detailed shipping times.",
  },
  {
    id: 2,
    title: " My order has been dispatched, can I track it?",
    ans1: "  Once your order has been shipped, you'll receive a tracking number via email. Note, it can take up to 7 days for shipping activity to update.",
    ans2: "Have your tracking number to hand? You can track your order's status here.",
  },
  {
    id: 3,
    title: "Do you offer a guarantee? Can I return my items?",
    ans1: "Once your order has been shipped, you'll receive a tracking number via email. Note, it can take up to 7 days for shipping activity to update.",
    ans2: "Have your tracking number to hand? You can track your order's status here.",
    ans3: "If you aren't 100% satisfied with your items, or received faulty goods, simply email our customer support team at othobamart@gmail.com. Please include the email address associated with the order and describe the issue, include photos if possible. We always aim to respond in 3 days or less!",
  },
  {
    id: 4,
    title: "How do you activate the Special Offer store?",
    ans1: "On any site without a store, in the left panel, click eCommerce and click Add to site on the free special offer store plan.",
  },
  {
    id: 5,
    title:
      "Why are invoices and order confirmation emails in a different language?",
    ans1: "If the customer's browser is using the same language as the Store, they will receive emails in that language.",
    ans2: "However, the store owner will only see the invoices and email confirmations in the language the store dashboard is set to, which is the same language as the customer's dashboard.",
  },
  {
    id: 6,
    title: "How many categories and subcategories can I display in my store?",
    ans1: "Up to a total of 100 categories and subcategories may be displayed in your store.",
    ans2: "For example, if you have 10 categories and each of those 10 contains 50 subcategories, only 2 categories will be displayed with 50 subcategories in each.",
  },
  {
    id: 7,
    title: "Can I change or cancel my order?",
    ans1: "Sure! You can cancel, or change your order within 12 hours of confirmation. Please contact us with your name and order number at: othobamart@gmail.com.",
    ans2: "After 12 hours, your order will have been processed and we won't be able to make any changes or cancel it.",
  },
  {
    id: 8,
    title: "What methods of payment do you take?",
    ans1: "We accept ALL major credit cards, PayPal, and Apple Pay.",
    ans2: "All payments are securely processed with 128-bit encryption - nice! 💳",
  },
  {
    id: 9,
    title: "How do I set a minimum purchase quantity for a specific product?",
    ans1: "Currently, there is no built-in way to set a minimum purchase quantity for a specific product.",
    ans2: "However, to add a minimum or maximum order total, go to the Store Control Panel, click Settings, and then click Cart & Checkout.",
    ans3: "Set the minimum or maximum allowed order subtotal. If it is crucial to set a limit on a specific product, you can add the Purchase Quantity app in the Store Control Panel.",
  },
  {
    id: 10,
    title: "The wrong products categories are displaying in the store.",
    ans1: "To update the product categories, remove the store navigation, republish your site, and revert to a site backup that includes the navigation.",
    ans2: "Republish the site. The product categories will update.",
  },
  {
    id: 11,
    title:
      "How do I limit the number of times an e-good to download link can be used?",
    ans1: "To limit the number of times an e-good or download link is used, in the left panel, click eCommerce, and then click Manage Store. Click General, and then click Cart & Checkout.",
    ans2: "Scroll to the E-goods section. For more information, see E-Goods or Digital Downloads.",
  },
  {
    id: 12,
    title: "Do you offer promotional or affiliate opportunities?",
    ans1: "We do and we’d love to hear from you! 👋",
    ans2: "Head here for more information.",
  },
  {
    id: 1,
    title: "Do I need to pay import duties?",
    ans1: "Some packages may be subject to import duties depending on the country of receipt.",
    ans2: "Please note, due to new EU VAT rules, there may be increased duty to pay on packages arriving to EU member states",
  },
];

const Questions = () => {
  return (
    <section className="mt-7 ">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {questions.map((question) => (
          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title rounded bg-gray-200 text-primary-content peer-checked:bg-gray-100peer-checked:text-secondary-content font-semibold">
              {question.title}{" "}
            </div>
            <div className="collapse-content bg-gray-100  peer-checked:bg-gray-100 peer-checked:text-secondary-content ">
              <div className="flex justify-start items-center text-sm mt-4 mb-2">
                <div className="mr-4">&#8226;</div> <div>{question.ans1}</div>
              </div>
              <div className="flex justify-start items-center text-sm mt-4 mb-2">
                <div className="mr-4">&#8226;</div> <div>{question.ans2}</div>
              </div>
              <div className="flex justify-start items-center text-sm mt-4 mb-2">
                <div className="mr-4">&#8226;</div> <div>{question.ans3}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;

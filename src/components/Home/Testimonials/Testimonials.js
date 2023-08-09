import React from "react";
import people1 from "../../../assets/people1.png";
import people2 from "../../../assets/people2.png";
import people3 from "../../../assets/people3.png";
import quote from "../../../assets/quote.svg";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Winson Herry",
      location: "California",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="my-16 px-4 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h5 className="text-sm text-primary font-bold">Testimonial</h5>
          <h4 className="text-2xl font-normal">What Our Customer Says</h4>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Testimonial key={review._id} review={review}></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

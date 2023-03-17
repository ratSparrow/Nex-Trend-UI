import React from "react";

const Testimonial = ({ review }) => {
  const { name, review: userReview, img, location } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="flex items-center mt-12">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl">{name}</h3>
            <h3 className="text-sm">{location}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

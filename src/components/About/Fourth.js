import React from "react";

const cardElement = [
  {
    id: 1,
    name: "Team",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    name: "Board",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    name: "Press",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Fourth = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pl-3 gap-6 mt-6 ">
      <div className="">
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-sm mb-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.In the first place we have granted to God, and by
          this our present charter confirmed for us and our heirs forever that
          the English Church shall be free, and shall have her rights entire,
          and her liberties inviolate; and we will that it be thus observed;
          which is apparent from
        </p>
        <p className="text-sm mt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.In the first place we have granted to God, and by
          this our present charter confirmed for us and our heirs forever that
          the English Church shall be free, and shall have her rights entire,
          and her liberties inviolate; and we will that it be thus observed;
          which is apparent from
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 ">
        {" "}
        {cardElement.map((card) => (
          <div className="card shadow-lg rounded-sm">
            <div key={card.id} className="card-body">
              <h2 className="text-xl font-semibold">{card.name}</h2>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fourth;

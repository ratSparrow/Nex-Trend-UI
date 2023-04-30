import React from "react";

const information = [
  {
    id: 1,
    name: "Founded",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    name: "50M montly enrichments",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    name: "400k User",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Second = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 pl-3">
      {information.map((info) => (
        <div className="card shadow-lg">
          <div key={info.id} className="card-body">
            <h2 className="text-xl font-bold mb-2">{info.name}</h2>
            <p className="text-sm">{info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Second;

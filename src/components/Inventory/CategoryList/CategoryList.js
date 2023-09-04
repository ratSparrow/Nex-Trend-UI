import React from "react";
import "./CategoryList.css";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Electronics",
  },
  {
    id: 2,
    title: "Fashion",
  },
  {
    id: 3,
    title: "Sports",
  },
  {
    id: 4,
    title: "Gifts",
  },
  {
    id: 5,
    title: "Garden",
  },
  {
    id: 6,
    title: "Music",
  },
  {
    id: 7,
    title: "Motor",
  },
  {
    id: 8,
    title: "Furniture",
  },
];

const CategoryList = () => {
  return (
    <div className="category-container p-1">
      <h2 className="text-md font-semibold text-center bg-black rounded py-1 m-0 text-white">
        TOP CATEGORIES
      </h2>
      <Link to="/inventory">
        <div className="grid grid-cols-1 gap-4 my-4 ">
          {categories.map((category) => (
            <div
              key={category.id}
              className=" shadow-xs px-1 hover:bg-slate-100"
            >
              <button className="flex text-sm  hover:text-teal-600 hover:font-semibold">
                <span className="block">{category.title}</span>
              </button>
              <hr className="mt-2" />
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default CategoryList;

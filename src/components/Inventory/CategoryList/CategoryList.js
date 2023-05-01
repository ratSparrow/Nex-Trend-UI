import React from "react";

const categories = [
  {
    id: 1,
    title: "All Product",
  },
  {
    id: 2,
    title: "android",
  },
  {
    id: 3,
    title: "laptop",
  },
  {
    id: 4,
    title: "camera",
  },
];

const CategoryList = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-center ">Categories</h2>
      <div className="grid grid-cols-1 gap-4 mt-4 ">
        {categories.map((category) => (
          <div className="rounded shadow-xs p-1 ">
            <button className="text-sm font-semibold hover:text-orange-500">
              {category.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

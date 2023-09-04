import React, { useState } from "react";
import { useQuery } from "react-query";
import CategoryList from "../CategoryList/CategoryList";
import MoreProducts from "../MoreProducts/MoreProducts";
import Loading from "../../Loading/Loading";
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
    title: "Furniture",
  },
];

const Inventory = () => {
  const [selectedField, setSelectedField] = useState("all");
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const result = await fetch("https://e-server-eta.vercel.app/products");
      const data = await result.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  console.log(products);
  const newFilteredList = products?.filter((product) => {
    if (selectedField === product.category) {
      return product;
    } else if (selectedField === "all") {
      return product;
    }
  });

  return (
    <section className=" max-w-[1200px] mx-auto">
      <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
        <span className="border-b-2 border-orange-600 ">PRODUCT LIST</span>
      </h2>
      <div className="mx-auto text-center">
        <select
          name="isAvailable"
          className="select select-sm rounded select-info sm:w-1/3 lg:w-2/4 mr-2 "
          onChange={(e) => setSelectedField(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories?.map((item) => (
            <option key={item.id} value={item?.name}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4  md:grid-cols-2  mt-6 ">
        {newFilteredList?.map((product) => (
          <MoreProducts product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
};

export default Inventory;

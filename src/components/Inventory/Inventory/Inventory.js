import React from "react";
import { useQuery } from "react-query";
import CategoryList from "../CategoryList/CategoryList";
import MoreProducts from "../MoreProducts/MoreProducts";

const Inventory = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const result = await fetch("https://e-server-eta.vercel.app/products");
      const data = await result.json();
      return data;
    },
  });
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <section className=" max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-semibold text-emerald-900 mb-10 pb-5 ">
        More Products
      </h2>
      <div className="grid grid-cols-6 gap-4 mt-10">
        <React.Fragment>
          <CategoryList />
        </React.Fragment>
        <div className="mx-auto col-start-3 col-span-6 ">
          <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2  mt-6 ">
            {products.map((product) => (
              <MoreProducts product={product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;

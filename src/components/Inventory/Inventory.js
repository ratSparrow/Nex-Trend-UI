import React from "react";
import { useQuery } from "react-query";

const Inventory = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const result = await fetch("http://localhost:5000/products");
      const data = await result.json();
      return data;
    },
  });
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <React.Fragment>
      <h2 className="text-5xl text-orange-400 text-center my-4 ">
        Invent Our More Products
      </h2>
      <div className="grid lg:grid-cols-4 gap-6 grid-cols-1 md:grid-cols-3  mt-6 ">
        {products.map((product) => (
          <div key={product._id} className="card shadow-xl image-full">
            {console.log(product)}
            <figure>
              <img src={product.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-green-100">{product.name}</h2>
              <p className="text-amber-400">price: $ {product.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Inventory;

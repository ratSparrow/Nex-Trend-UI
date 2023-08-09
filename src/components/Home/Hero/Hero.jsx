import React from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../../Inventory/CategoryList/CategoryList";
import Machinery from "../Machinery/Machinery";

const Hero = () => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-6 gap-2 ">
      <section className=" md:block lg:block">
        <CategoryList />
      </section>
      <section className="lg:col-start-2 lg:col-span-4">
        <Banner />
      </section>
      <section className="">
        <Machinery />
      </section>
    </section>
  );
};

export default Hero;

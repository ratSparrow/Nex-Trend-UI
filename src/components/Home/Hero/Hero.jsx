import React from "react";
import Banner from "../Banner/Banner";

const Hero = () => {
  return (
    <section className="grid grid-cols-6 gap-4">
      <section className=""></section>
      <section className="col-start-2 col-span-4">
        <Banner />
      </section>
      <section className=""></section>
    </section>
  );
};

export default Hero;

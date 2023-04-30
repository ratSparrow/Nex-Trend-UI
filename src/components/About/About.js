import React from "react";

import Fourth from "./Fourth";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Second from "./Second";
import Third from "./Third";

const About = () => {
  return (
    <section className="md:px-4 sm:px-4">
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Newsletter />
    </section>
  );
};

export default About;

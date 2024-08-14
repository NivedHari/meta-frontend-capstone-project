import React from "react";
import Banner from "../components/Banner";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

export default function Homepage() {
  return (
    <section>
      <Banner />
      <Specials />
      <Testimonials />
      <About />
    </section>
  );
}

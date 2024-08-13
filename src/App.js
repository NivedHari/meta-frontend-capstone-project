import React from "react";
import Header from "./components/Layout/Header";
import Banner from "./components/Banner";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Layout/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

import React from "react";

import About from "./components/About";
import Banner from "./components/Banner";
import CallToAction from "./components/CallToAction";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Forms from "./components/Forms";
import SliderRevo from "./components/SliderRevo";
import Steps from "./components/Steps";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <SliderRevo />
      <About />
      <Steps />
      <Categories />
      <CallToAction />
      <Featured />
      <Banner />
      <Forms />
      <Footer />
    </>
  );
}

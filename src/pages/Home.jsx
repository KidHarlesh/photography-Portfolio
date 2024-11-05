import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Testimonal from "../components/Testimonal";
import Booking from "../components/Booking";
import Portfolio from "../Components/Portfolio";
import Down from "../Components/Down";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Testimonal />
      <Booking />
      <Down />
    </div>
  );
};

export default Home;

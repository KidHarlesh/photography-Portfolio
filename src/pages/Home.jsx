import React from "react";
import Booken from "../components/Booken";
import Aboutsection from "../components/Aboutsection";
import Navbar from "../components/Navbar";
import Portfoliosection from "../components/Portfoliosection";
import Testimonialsection from "../components/Testimonialsection";
import Footsection from "../components/Footsection";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Aboutsection />
      <Portfoliosection />
      <Testimonialsection/>
      <Booken />
      <Footsection/>
    </div>
  );
};

export default Home;

import React from "react";
// import Navbar from "../components/Navbar";
import HeroSection from "../blocks/HeroSection";
import Aboutsection from "../blocks/Aboutsection";
import Portfoliosection from "../blocks/Portfoliosection";
import Testimonialsection from "../blocks/Testimonialsection";
import Footsection from "../blocks/Footsection";
import Booking from "../blocks/Booking";
import Navbar from "../blocks/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Aboutsection />
      <Portfoliosection />
      <Testimonialsection />
      <Booking/>
      <Footsection />
    </div>
  )
}

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Aboutsection from "../components/Aboutsection";
import Portfoliosection from "../components/Portfoliosection";
import Testimonialsection from "../components/Testimonialsection";
import Footsection from "../components/Footsection";
import Booking from "../components/Booking";


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

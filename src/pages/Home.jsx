import React from "react";
import HeroSection from "../component/HeroSection";
// import Aboutsection from "../component/Aboutsection";
// import Portfoliosection from "../component/Portfoliosection";
// import Testimonialsection from "../component/Testimonialsection";
// import Footsection from "../component/Footsection";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroSection />
      {/* <Aboutsection /> */}
      {/* <Portfoliosection />
      <Testimonialsection />
      <Footsection />  */}
    </div>
  );
};

export default Home;

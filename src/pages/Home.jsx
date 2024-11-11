import React from "react";
import HeroSection from "../component/HeroSection";
import Portfoliosection from "../component/Portfoliosection";
import Testimonialsection from "../component/Testimonialsection";
import Navbar from "../component/Navbar";
// import About from "../component/About";
// import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <About /> */}
      <Portfoliosection />
      <Testimonialsection />
      <Testimonialsection />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;

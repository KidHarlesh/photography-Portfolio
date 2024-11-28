import React from "react";
import HeroSection from "../component/HeroSection";
import Portfoliosection from "../component/Portfoliosection";
import Testimonialsection from "../component/Testimonialsection";
import Navbar from "../component/Navbar";
import About from "../component/About";
import Footer from "../component/Footer";
import Services from "../component/Services";
import FAQuestion from "../component/FAQuestion";



const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <Services/>
      <Portfoliosection />
      <FAQuestion/>
      <Testimonialsection />
      <Footer/>
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "../component/Navbar";
import Testimonialsection from "../component/Testimonialsection";
import Footer from "../component/Footer";
import AboutSection from "../component/AboutSection";

const AboutMe = () => {
  return (
    <div className="bg-black ">
      <Navbar/>
      <AboutSection/>
      <Testimonialsection/>
      <Footer/>
    </div>
  );
};

export default AboutMe;

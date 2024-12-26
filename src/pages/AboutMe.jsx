import React from "react";
import Navbar from "../component/Navbar";
import Testimonialsection from "../component/Testimonialsection";
import Footer from "../component/Footer";
import AboutSection from "../component/AboutSection";
import AboutSectionDextop from "../component/AboutSectionDextop";


const AboutMe = () => {
  return (
    <div className="bg-black ">
      <Navbar />
      {/* About section mobile */}
      <AboutSection />
      <AboutSectionDextop/>

      <Testimonialsection />
      <Footer />
    </div>
  );
};

export default AboutMe;

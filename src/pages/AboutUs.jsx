import React from "react";
import Navbar from "../blocks/Navbar";
import Aboutsection from "../blocks/Aboutsection";
import Testimonialsection from "../blocks/Testimonialsection";
import Footsection from "../blocks/Footsection";
// import Aboutsection from "../components/Aboutsection";
// import Navbar from "../components/Navbar";
// import Testimonialsection from "../components/Testimonialsection";
// import Footsection from "../components/Footsection";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Aboutsection />
      <Testimonialsection />
      <Footsection />
    </div>
  );
};

export default AboutUs;

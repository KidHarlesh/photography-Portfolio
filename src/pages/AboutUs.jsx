import React from "react";


import Foot from "../components/Foot";
import Aboutsection from "../components/Aboutsection";
import Navbar from "../components/Navbar";
import Testimonialsection from "../components/Testimonialsection";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Aboutsection />
      <Testimonialsection/>
      <Foot />
    </div>
  );
};

export default AboutUs;

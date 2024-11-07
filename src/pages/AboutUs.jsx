import React from "react";

import Testimonial from "../components/Testimonial";
import Foot from "../components/Foot";
import Aboutsection from "../components/Aboutsection";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div>
     <Navbar/>
     <Aboutsection/>
      <Testimonial />
      <Foot />
    </div>
  );
};

export default AboutUs;

import React from "react";
import About from "../components/About";
import Testimonal from "../components/Testimonal";
import Navbar from "../components/Navbar";
import Down from "../Components/Down";


const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Testimonal />
      <Down/>
    </div>
  );
};

export default AboutUs;

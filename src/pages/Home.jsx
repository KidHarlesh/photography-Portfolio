import React from "react";

import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Heroo from "../components/Heroo";
import Booken from "../components/Booken";
import Foot from "../components/Foot";
import Aboutsection from "../components/Aboutsection";
import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroo />
      <Aboutsection/>
      <Portfolio />
      <Testimonial />
      <Booken />
      <Foot />
    </div>
  );
};

export default Home;

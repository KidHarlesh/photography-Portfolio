import React from "react";
import Testimonial from "../components/Testimonial";
import Heroo from "../components/Heroo";
import Booken from "../components/Booken";
import Foot from "../components/Foot";
import Aboutsection from "../components/Aboutsection";
import Navbar from "../components/Navbar";
import Portfoliosection from "../components/Portfoliosection";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroo />
      <Aboutsection/>
      <Portfoliosection/>
      <Testimonial />
      <Booken />
      <Foot />
    </div>
  );
};

export default Home;

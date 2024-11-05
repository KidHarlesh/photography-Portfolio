import React from "react"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Testimonial from "../components/Testimonial"
import Heroo from "../components/Heroo"
import Booken from "../components/Booken"
import Foot from "../components/Foot"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroo />
      <About />
      <Portfolio />
      <Testimonial />
      <Booken />
      <Foot />
    </div>
  );
};

export default Home;

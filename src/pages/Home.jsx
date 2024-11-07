import React from "react";
import Heroo from "../components/Heroo";
import Booken from "../components/Booken";
import Foot from "../components/Foot";
import Aboutsection from "../components/Aboutsection";
import Navbar from "../components/Navbar";
import Portfoliosection from "../components/Portfoliosection";
import Testimonialsection from "../components/Testimonialsection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroo />
      <Aboutsection />
      <Portfoliosection />
      <Testimonialsection/>
      <Booken />
      <Foot />
    </div>
  );
};

export default Home;

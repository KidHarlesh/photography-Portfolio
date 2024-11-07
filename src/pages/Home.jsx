import React from "react";
import Heroo from "../components/Heroo";
import Booken from "../components/Booken";

import Aboutsection from "../components/Aboutsection";
import Navbar from "../components/Navbar";
import Portfoliosection from "../components/Portfoliosection";
import Testimonialsection from "../components/Testimonialsection";
import Footsection from "../components/Footsection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroo />
      <Aboutsection />
      <Portfoliosection />
      <Testimonialsection/>
      <Booken />
      <Footsection/>
    </div>
  );
};

export default Home;

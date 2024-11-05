import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../Components/Hero";
import About from "../components/About";
import Portfolio from "../Components/Portfolio";
import Testimonal from "../components/Testimonal";
import Down from "../Components/Down";
import Book from "../Components/Book";




const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Portfolio />
      <Testimonal />
      <Book />
      <Down />
    </div>
  );
};

export default Home;

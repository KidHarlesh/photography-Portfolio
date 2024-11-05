import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Portfolio from '../Components/Portfolio';
import Testimonal from '../Components/Testimonal';
import Booking from '../Components/Booking';
import Down from '../Components/Down';

const Home = () => {
  return (
    <div>
        
      <Navbar />
      <Hero/>
      <About />
      <Portfolio />
      <Testimonal />
      <Booking />
      <Down />
    </div>
  );
}

export default Home
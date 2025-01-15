import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Testimonialsection from "../component/Testimonialsection";
import FAQuestion from "../component/FAQuestion";
import DesktopPortfolio from "../component/DesktopPortfolio";

const Porfolio = () => {
  return (
    <div className="bg-black h-screen ">
      <Navbar />
      <div className="lg:hidden pt-[8rem] ">
        <DesktopPortfolio />
      </div>

      <FAQuestion />
      <Testimonialsection />
      <Footer />
    </div>
  );
};

export default Porfolio;

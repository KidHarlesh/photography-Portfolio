import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Testimonialsection from "../component/Testimonialsection";
import FAQuestion from "../component/FAQuestion";
import MobilePortfolio from "../component/MobilePortfolio";
import DesktopPortfolio from "../component/DesktopPortfolio";
import PortfolioSection from "../component/Portfoliosection";
import EventPhotography from "../component/EventPhotography";
import CommercialPhotography from "../component/CommercialPhotography";


const Porfolio = () => {
  return (
    <div className="bg-black h-screen ">
      <Navbar />
      <div className="lg:hidden pt-[8rem] ">
        <MobilePortfolio />
      </div>
      <div className="hidden pt-[9rem] lg:block">
        <DesktopPortfolio />
      </div>
      <PortfolioSection/>
      <EventPhotography/>
      <CommercialPhotography/>
      <FAQuestion />
      <Testimonialsection />
      <Footer />
    </div>
  );
};

export default Porfolio;

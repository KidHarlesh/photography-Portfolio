import React from 'react'
import PortImage from "../assets/PortfolioImagee.png";
const DesktopPortfolio = () => {
  return (
    <section className=" bg-black">
      <div className="container ">
        <img
          src={PortImage}
          alt="Picture of a girl resting to the wall "
          className="block mx-auto w-[100%]"
        />
        <div>
          <h3>PORTFOLIO</h3>
          <h1>Visual Poetry in Pixels</h1>
          <p>
            Step into a visual journey that encapsulates the essence of my lens.
            Each photograph in this portfolio is a narrative, a frozen moment in
            time, and a testament to the artistry and passion poured into every
            frame. Explore the diverse tapestry of stories I've had the
            privilege to capture and witness the world through my lens.
          </p>
          <p>BRANDS I HAVE WORKED WITH</p>
        </div>
      </div>
    </section>
  );
}

export default DesktopPortfolio
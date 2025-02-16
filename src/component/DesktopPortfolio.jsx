import React from "react";
import Star from "../assets/Logo.png";
import Image from "../assets/PortfoolioImage.png";
import LongImages from "../assets/CompanyWorkimage.png";
const DesktopPortfolio = () => {
  return (
    <section className=" bg-black">
      <div className="container ">
        <div className="relative w-auto h-max">
          <div className="pt-10">
            <h4 className="text-[16px] xl:text-[20px]  text-[#797C86] font-semibold ">
              PORTFOLIO
            </h4>
            <h1 className="  text-[36px] xl:text-[42px] 2xl:text-[60px]  text-[#E4E4E6] font-semibold ">
              VISUAL POETRY IN PIXELS
            </h1>
            <p className=" text-[#797C86] w-[67%] text-[14px] font-normal">
              Step into a visual journey that encapsulates the essence of my
              lens. Each photograph in this portfolio is a narrative, a frozen
              moment in time, and a testament to the artistry and passion poured
              into every frame. Explore the diverse tapestry of stories I've had
              the privilege to capture and witness the world through my lens.
            </p>
          </div>

          <div>
            <img src={Image} alt="" className="absolute top-[10px]  w-[100%]" />
          </div>
          <div className="pt-[25%] xl:pt-[32%]  flex items-center justify-between pb-[40px]">
            <img
              src={Star}
              alt=""
              className="w-[90px] xl:w-[100px] 2xl:W-[120px]"
            />
            <div className="pl-[75%] ">
              <p className="text-[#797C86] text-[14px]  xl:text-[16px]">
                SCROLL DOWN TO SEE THE WORKS
              </p>
            </div>
          </div>
          <p className="text-[14px] text-[#797C86] font-medium text-center pb-[14px]">
            BRANDS I HAVE WORKED WITH
          </p>
        </div>
      </div>
      <img src={LongImages} alt=" " className="" />
    </section>
  );
};

export default DesktopPortfolio;

import React from "react";
import Vector from "../assets/Vector-img.svg";
import Button from "../assets/Blue-Button.svg";
import { Link } from "react-router-dom";
import Heroimagesection from "../assets/Hero-sectionimage.png";

const Hero = () => {
  return (
    <section className=" bg-black  border-solid  border-[#2F2F37] border-x-0 pt-[80px] lg:pt-40  ">
      <div className="gap-[20px] grid container lg:flex  justify-between items-center ">
        <div className="pt-[40px] lg:pt-0">
          <h1 className=" text-[14px] font-normal lg:text-[16px] lg:font-medium text-[#62646C]">
            STUNNINGPHOTOGRAPHYBY <br />
            <span className=" text-[40px] lg:text-[45px] text-[#E4E4E6] font-semibold ">
              DAMIEN BRAUN
            </span>
          </h1>
        </div>
        <div className="hidden lg:block ">
          <img className=" max-w-[90%]" srcSet={Vector} alt="image" />
        </div>
        <div>
          <h1 className=" text-[39px] text-[#FFFFFF] font-semibold ">
            <span className="flex gap-3 items-center">
              Let’s
              <Link>
                <img
                  className="max-w-14 lg:max-w-20  animate-bounce "
                  srcSet={Button}
                />
              </Link>
            </span>
            Work Together
          </h1>
        </div>
      </div>
      {/* for hero section image */}
      <div>
        <img srcSet={Heroimagesection} loading="lazy" />
      </div>
    </section>
  );
};

export default Hero;

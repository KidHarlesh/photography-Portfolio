// import React from "react";

// const About = () => {
//   return (
//     <section className="  bg-black">

//     </section>
//   );
// };

// export default About;

import React from "react";
import { GoArrowRight } from "react-icons/go";
// import StarIcon from "../assets/Star-icon.svg";
import Facebook from "../assets/Facebook-Button.svg";
import Twitter from "../assets/Twitter-Button.svg";
import Linkedin from "../assets/Linkedin-Button.svg";
import { Link } from "react-router-dom";
import Image from "../assets/About-image.png";
// import cv from "../assets/Alowoesin-cv.pdf";

const About = () => {
  return (
    <section className="  bg-black">
      <div className=" container pt-[80px] pb-[100px] lg:pb-[100px]">
        {/* up contianer */}
        <div className=" border-b-2 border-[#1C1C21]  lg:flex items-center justify-between ">
          <p className="text-[14px] lg:text-[16px] font-semibold text-[#797C86] pb-[20px]">
            ABOUT <br />
            <span className="text-[28px] lg:text-[48px] text-[#FFFFFF] ">
              I AM DAMIEN
            </span>
          </p>
          <div className="pb-[20px]">
            <Link>
              <button className="text-[#FFFFFF] flex bg-[#1C1C21] text-[14px]  px-[20px] py-[14px] rounded-2xl border border-[#1C1C21] hover:bg-[#232323] ">
                Know More <GoArrowRight className="mt-[5px] lg:mt-[4px] " />
              </button>
            </Link>
          </div>
        </div>
        {/* down container */}
        <div className=" pt-[40px] lg:grid  lg:grid-cols-2 items-center justify-between gap-[20px] ">
          <img
            className=" pb-[20px] lg:pb-[0px] hover:animate-pulse "
            src={Image}
            alt="image"
          />
          <div>
            {/*  introduction cntainer */}
            <div className=" grid  border border-[#1C1C21] rounded-t-lg p-[20px] lg:p-[18px] xl:p-[28px]   text-[#CACACE] font-medium ">
              <p className="flex items-center text-[20px] lg:text-[18px] xl:text-[26px] pb-[12px] ">
                <span className=" pr-[5px]">
                  {/* <img className=" lg:w-6 xl:w-8 " src={StarIcon} /> */}
                </span>
                Introduction
              </p>
              <p className="text-[14px] lg:text-[12px] xl:text-[14px] font-light text-[#AFB0B6]">
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>
            {/* contanct container */}
            <div className="  border border-[#1C1C21] rounded-b-lg p-[24px] lg:p-[18px] xl:p-[28px] text-[#CACACE] font-medium ">
              <p className="text-[20px] lg:text-[18px]  xl:text-[30px] flex items-center pb-[20px] lg:pb-[16px] xl:pb-[20px] ">
                <span className="pr-[5px]">
                  {/* <img className=" lg:w-6 xl:w-8 " src={StarIcon} /> */}
                </span>
                Contact Information
              </p>
              {/* email container */}
              <div className="lg:grid   lg:grid-cols-2  pb-[20px] lg:pb-[14px] xl:pb-[12px] ">
                <div>
                  <p className="text-[14px] lg:text-[12px] xl:text-[14px]">
                    Email
                  </p>
                  <p className="text-[16px] lg:text-[12px] xl:text-[16px]  font-light text-[#AFB0B6]">
                    damienbraun@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-[14px] lg:text-[12px] xl:text-[16px]">
                    Phone
                  </p>
                  <p className="text-[16px] lg:text-[14px]  xl:text-[18px] font-light">
                    +00 000000000
                  </p>
                </div>
              </div>
              <div className=" lg:flex  items-center  justify-between  xl:pt-[18px]  ">
                <div className=" border border-[#1C1C21] flex w-fit rounded-full   p-[8px]  xl:p-[13px]  gap-[6px] ">
                  <Link>
                    <img
                      className="w-10 lg:w-6 xl:w-8  hover:bg-[#1C1C21]  hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-300 ease-in-out"
                      src={Facebook}
                    />
                  </Link>
                  <Link>
                    <img
                      className="w-10 lg:w-6 xl:w-8   hover:bg-[#1C1C21]  hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-300 ease-in-out"
                      src={Twitter}
                    />
                  </Link>
                  <Link>
                    <img
                      className="w-10 lg:w-6 xl:w-8   hover:bg-[#1C1C21] hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-300 ease-in-out"
                      src={Linkedin}
                    />
                  </Link>
                </div>
                <div className="pt-[20px] lg:pt-[0px]   px-[0px] lg:px-[16px] grid   lg:grid-cols-2  gap-5 lg:items-center lg:gap-4">
                  <Link>
                    <button className="text-[14px] lg:text-[12px] font-medium text-[#FFFFFF] bg-[#1C1C21] text-center px-[104px] lg:px-[25px] xl:px-[40px] py-[14px] lg:py-[12px] xl:py-[16px]  rounded-xl hover:bg-[#232323] ">
                      Let’s Work
                    </button>
                  </Link>
                  <a >
                    <button className="text-[14px] lg:text-[12px] font-medium text-[#FFFFFF] bg-[#1C1C21] text-center px-[100px] lg:px-[20px] xl:px-[30px]  py-[14px]  lg:py-[12px] xl:py-[16px] rounded-xl  hover:bg-[#232323] ">
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
// href={cv} download="Alowoesin-Toluwalase-CV.pdf"

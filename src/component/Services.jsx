import React from "react";
import { GoArrowRight } from "react-icons/go";
import Rightclick from "../assets/Right-Button.svg";
import Leftclick from "../assets/Left-Button.svg";
import { Link } from "react-router-dom";
// import Facebook from "../assets/Facebook-Button.svg";
// import Twitter from "../assets/Twitter-button.svg";
// import Linkedin from "../assets/Linkedin-Button.svg";
import Picture from "../assets/Service-image.png";
import Button from "../assets/Blue-Button.svg";
import ButtonLeftAndRight from "./ButtonLeftAndRight";
const Services = () => {
  return (
    <section className=" bg-black">
      <div className="container  ">
        <div className="   border border-t-0 lg:border-0 border-[#1C1C21] ">
          <div className="lg:flex justify-between items-center  lg:pb-[40px]">
            <div className=" ">
              <p className="text-[14px]  lg:text-[16px] xl:text-[20px] font-semibold text-[#797C86] ">
                SERVICES
              </p>
              <p className="text-[28px] lg:text-[30px] xl:text-[40px] font-semibold text-[#FFFFFF]  lg:pb-0 ">
                MY PHOTOGRAPHY
                <br className="lg:hidden" />
                <span> SERVICE.</span>
              </p>
            </div>
            <div className="pb-[20px] lg:pb-[0px] flex justify-between item-center gap-2 ">
              <div className="hidden lg:flex   ">
                <div className="flex border border-[#1C1C21] p-2 lg:p-3  gap-2  rounded-full ">
                  <img
                    className="w-12 lg:w-8 xl:w-12 transition-transform duration-300 active:-translate-x-1.5 "
                    src={Leftclick}
                  />
                  <img
                    className="w-12  lg:w-8  xl:w-12 transition-transform duration-300 active:translate-x-2"
                    src={Rightclick}
                  />
                </div>
              </div>
              <button className="text-[14px] font-medium text-[#FFFFFF] flex items-center gap-1 xl:gap-2 bg-[#1C1C21] px-[20px]   py-[14px]   rounded-xl mt-[20px] lg:mt-[0px]">
                <Link to="/Service">View All Service</Link>
                <GoArrowRight className="mt-1 lg:mt-0" />
              </button>
            </div>
          </div>
        </div>
        <div className=" border-[#1C1C21] border lg:border-none  rounded-b-lg lg:grid lg:grid-cols-2 lg:gap-[40px] 2xl:items-center  ">
          <div className="w-full pt-10 order-2 ">
            <img src={Picture} alt="" className="w-full lg:h-full  " />
          </div>
          <div className="pt-[30px]  ">
            <span className="flex gap-3 items-center text-[#797C86] text-4xl font-semibold ">
              EVENTS
              <Link>
                <img
                  src={Button}
                  alt="Call-to-action button"
                  className="w-20 lg:w-14 xl:w-20 h-12"
                />
              </Link>
            </span>
            <p className="text-[#797C86] pt-[12px] lg:pt-[6px] xl:pt-[16px]  font-light lg:text-[11px] xl:text-[18px] ">
              Our event photography service is dedicated to capturing the magic
              of your special occasions. Whether it's a wedding, corporate
              event, or milestone celebration, we're there to document every
              heartfelt moment. We blend into the background, ensuring natural
              and candid shots that reflect the emotions of the day.
            </p>
            <div className="text-[#AFB0B6] font-normal uppercase  ">
              <h1 className="text-[#CACACE] pt-[30px] pb-[10px]  text-[14px] lg:text-[16px]">
                Service Highlights
              </h1>
              <p className="border p-[14px] lg:p-[12px] xl:py-5 xl:px-[18px]  mb-2 rounded-xl  border-[#1C1C21] lg:text-[10px]  xl:text-[16px] pr- lg:pr-[100px] xl:">
                Coverage for weddings, parties, corporate functions, and more.
              </p>
              <p className="border p-[14px] lg:p-[12px] xl:py-5 xl:px-[18px] mb-2 rounded-xl  border-[#1C1C21] lg:text-[10px] xl:text-[16px] pr-5 lg:pr-0">
                Skilled photographers who know how to seize the moment.
              </p>
              <p className="border p-[14px] lg:p-[12px] xl:py-5 xl:px-[18px] mb-2 rounded-xl  border-[#1C1C21] lg:text-[10px]  xl:text-[16px] ">
                A mix of candid and posed shots for a comprehensive story.
              </p>
              <p className="border p-[14px] lg:p-[12px] xl:py-5 xl:px-[18px] rounded-xl  border-[#1C1C21] lg:text-[10px]  xl:text-[16px] pr-6 lg:pr-0 ">
                Quick turnaround for you to relive the day's highlights.
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-[40px] lg:hidden ">
            <div className="flex border border-[#1C1C21] p-2 gap-2  rounded-full ">
              <img
                className="w-12 transition-transform duration-300 active:-translate-x-0.5 "
                srcSet={Leftclick}
              />
              <img
                className="w-12 transition-transform duration-300 active:translate-x-1 "
                srcSet={Rightclick}
              />
            </div>
          </div>

          <div className="   lg:hidden rounded-b-lg p-[24px] lg:p-[18px] xl:p-[28px] text-[#CACACE] font-medium lg:border-0">
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
            <ButtonLeftAndRight/>
              <div className="pt-[20px] lg:pt-[0px]   px-[0px] lg:px-[16px] grid   lg:grid-cols-2  gap-5 lg:items-center lg:gap-4">
                <Link>
                  <button className="text-[14px] lg:text-[12px] font-medium text-[#FFFFFF] bg-[#1C1C21] text-center px-[104px] lg:px-[25px] xl:px-[40px] py-[14px] lg:py-[12px] xl:py-[16px]  rounded-xl hover:bg-[#232323] ">
                    Let’s Work
                  </button>
                </Link>
                <a>
                  <button className="text-[14px] lg:text-[12px] font-medium text-[#FFFFFF] bg-[#1C1C21] text-center px-[100px] lg:px-[20px] xl:px-[30px]  py-[14px]  lg:py-[12px] xl:py-[16px] rounded-xl  hover:bg-[#232323] ">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { GoArrowRight } from "react-icons/go";
import Rightclick from "../assets/Right-Button.svg";
import Leftclick from "../assets/Left-Button.svg";
import { Link } from "react-router-dom";
import { portfolioWork } from "../constant/Data";

const Portfoliosection = () => {
  return (
    <section className=" bg-black">
      <div className="container  pt-[20px] lg:pt-[100px] xl:pb-[150px]">
        {/* first right hand side to be flex or grided */}
        <div className="border-b  border-[#1C1C21] ">
          <div className="lg:flex justify-between items-center  lg:pb-[40px]">
            <div className="pb-[20px] lg:pb-0">
              <p className="text-[14px]  lg:text-[16px] xl:text-[20px] font-semibold text-[#797C86] ">
                PORTFOLIO
              </p>
              <p className="text-[28px] lg:text-[30px] xl:text-[40px] font-semibold text-[#FFFFFF] pb-[20px] lg:pb-0 ">
                EXPLORE MY <br className="lg:hidden" />
                PHOTOGRAPHY WORK.
              </p>
            </div>
            <div className="pb-[20px] lg:pb-[0px] lg:flex justify-between gap-2 ">
              <div className="hidden lg:flex  ">
                <div className="flex border border-[#1C1C21] p-2 xl:p-3 lg:p-1 gap-2  rounded-full ">
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
              <button className="text-[14px] lg:text-[10px] xl:text-[14px] font-medium text-[#FFFFFF] flex items-center gap-1 xl:gap-2 bg-[#1C1C21] px-[20px] lg:px-[12px] xl:px-[20px]  py-[14px] lg:py-[6px] xl:py-[12px] rounded-xl ">
                <Link>View All Works</Link>
                <GoArrowRight className="mt-1 lg:mt-0" />
              </button>
            </div>
          </div>
        </div>
        {/* image and tag */}
        <div className="pt-[40px] lg:flex gap-[30px] ">
          {portfolioWork.map((work, index) => (
            <div key={work.paragraph} className={work.class}>
              <img
                src={work.image}
                className="block mx-auto lg:mx-0 hover:scale-105 transition-transform duration-100 "
              />
              <p className="text-[16px] font-medium  text-[#CACACE]">
                {work.paragraph}
              </p>
              <p className="text-[#797C86] text-[14px]">{work.paragraphtwo}</p>
              <button className="text-[20px] lg:text-[14px] text-[#F2F2F3] flex items-center  gap-[8px] font-light border-b border-[#1C1C21] ">
                {work.button}
                <span>
                  <img className="w-4 xl:w-3" src={work.imageIcon} />
                </span>
              </button>
            </div>
          ))}

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

        </div>
      </div>
    </section>
  );
};

export default Portfoliosection;

import React, { useState } from "react";
import Rightclick from "../assets/Right-Button.svg";
import Leftclick from "../assets/Left-Button.svg";
import { portfolioPortrait, } from "../constant/Data";

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioPortrait.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioPortrait.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className=" bg-black pt-[125px] lg:pt-[100px]">
      <div className="container  ">
        {" "}
        ``
        <div className="lg:flex justify-between items-center border-t  border-[#2F2F37] ">
          <div className="pt-[40px] lg:pt-[80px]">
            <p className="text-[28px]  lg:text-[34px]  font-semibold text-[#797C86]">
              PORTRAIT PHOTOGRPAHY
            </p>
          </div>

          <div className=" lg:pb-[0px] lg:flex justify-between gap-2">
            <div className="hidden lg:flex">
              <div className="flex border border-[#1C1C21] p-2 xl:p-3 lg:p-1 gap-2  rounded-full">
                <img
                  className="w-12 lg:w-8 xl:w-12 transition-transform duration-300 active:-translate-x-1.5"
                  src={Leftclick}
                  onClick={handlePrevious}
                />
                <img
                  className="w-12 lg:w-8 xl:w-12 transition-transform duration-300 active:translate-x-2"
                  src={Rightclick}
                  onClick={handleNext}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Image and Tag Section */}
        <div className="lg:pt-[40px]">
          {/* Display only the current image in mobile view */}
          <div className="lg:hidden">
            <img
              src={portfolioPortrait[currentIndex].image}
              className="block mx-auto hover:scale-105 transition-transform duration-100"
              alt={portfolioPortrait[currentIndex].paragraph}
            />
            <div className="flex justify-between pt-4 items-center">
              <div>
                {" "}
                <p className="text-[16px] font-medium text-[#CACACE] ">
                  {portfolioPortrait[currentIndex].paragraph}
                </p>
                <p className="text-[#797C86] text-[14px] ">
                  {portfolioPortrait[currentIndex].paragraphtwo}
                </p>
              </div>
              <button className="text-[14px] text-[#F2F2F3] flex items-center justify-center gap-[8px] font-light border-b border-[#1C1C21] ">
                {portfolioPortrait[currentIndex].button}
                <span>
                  <img
                    className="w-4"
                    src={portfolioPortrait[currentIndex].imageIcon}
                    alt="Arrow Icon"
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Navigation buttons for mobile */}
          <div className="flex justify-center pt-[40px] lg:hidden">
            <div className="flex border border-[#1C1C21] p-2 gap-2 rounded-full">
              <img
                className="w-12 transition-transform duration-300 active:-translate-x-0.5"
                srcSet={Leftclick}
                onClick={handlePrevious}
                alt="Previous"
              />
              <img
                className="w-12 transition-transform duration-300 active:translate-x-1"
                srcSet={Rightclick}
                onClick={handleNext}
                alt="Next"
              />
            </div>
          </div>

          {/* Display all images in desktop view */}
          <div className="hidden lg:flex gap-[30px] ">
            {portfolioPortrait.map((works) => (
              <div key={works.paragraph} className={works.class}>
                <img
                  src={works.image}
                  className="block mx-auto lg:mx-0 hover:scale-105 transition-transform duration-100"
                  alt={works.paragraph}
                />
                <div className="flex justify-between pt-4 items-center">
                  <div>
                    <p className="text-[16px] font-medium text-[#CACACE]">
                      {works.paragraph}
                    </p>
                    <p className="text-[#797C86] text-[14px]">
                      {works.paragraphtwo}
                    </p>
                  </div>

                  <button className="text-[20px] lg:text-[14px] text-[#F2F2F3] flex items-center gap-[8px] font-light border-b border-[#1C1C21]">
                    {works.button}
                    <span>
                      <img
                        className="w-4 xl:w-3"
                        src={works.imageIcon}
                        alt="Icon"
                      />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

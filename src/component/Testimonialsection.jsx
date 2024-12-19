
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Rightclick from "../assets/Right-Button.svg";
import Leftclick from "../assets/Left-Button.svg";
import { GoArrowRight } from "react-icons/go";
import { testimonial } from "../constant/Data";
import ButtonLeftAndRight from "./ButtonLeftAndRight";

const Testimonialsection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonial.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-black">
      <div className="container pt-[80px]  pb-[80px]" id="testimonial">
        {/* Header Section */}
        <div>
          <div>
            <div className="pb-[20px]">
              <p className="text-[14px] lg:text[16px] font-bold text-[#797C86]">
                Testimonials
              </p>
              <p className="text-[#FFFFFF] text-[28px] lg:text-[40px] font-semibold">
                What My Clients Say
              </p>
            </div>
            {/* Reviews Header */}
            <div className="lg:flex justify-between pb-10">
              <div className="hidden lg:block">
                <p className="text-[14px] lg:text[16px] font-light text-[#62646C]">
                  Total Reviews
                </p>
                <p className="text-[#CACACE] text-[20px] lg:text-[24px]">323</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="hidden lg:flex">
                  <div className="flex border border-[#1C1C21] p-1 gap-2 rounded-full">
                    <img
                      className="w-10 transition-transform duration-300 active:-translate-x-1.5"
                      src={Leftclick}
                      onClick={handlePrevClick}
                    />
                    <img
                      className="w-10 transition-transform duration-300 active:translate-x-2"
                      src={Rightclick}
                      onClick={handleNextClick}
                    />
                  </div>
                </div>
                <div className="pb-[20px] lg:pb-0">
                  <button className="text-[14px] font-medium text-[#FFFFFF] bg-[#1C1C21] px-[20px] py-[14px] rounded-lg flex justify-between items-center gap-2">
                    <ScrollLink
                      to="testimonial"
                      smooth={true}
                      duration={500}
                    >
                      View All Testimonials
                    </ScrollLink>
                    <GoArrowRight />
                  </button>
                </div>
              </div>

              <div className="lg:hidden">
                <p className="text-[14px] font-light text-[#62646C]">
                  Total Reviews
                </p>
                <p className="text-[#CACACE]">323</p>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="border-t border-[#1C1C21] pt-[40px]">
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            {/* For Mobile: Show one testimonial */}
            <div className="lg:hidden">
              <div className="bg-cover p-[24px] mb-10 bg-testimonial">
                <div className="flex justify-between items-center pb-5">
                  <div>
                    <p className="text-[16px] text-[#E4E4E6] font-medium">
                      {testimonial[currentIndex].paragraph}
                    </p>
                    <p className="text-[14px] text-[#62646C] font-normal">
                      {testimonial[currentIndex].paragraphTwo}
                    </p>
                  </div>
                  <ButtonLeftAndRight />
                </div>
                <div className="pb-5">
                  <img src={testimonial[currentIndex].imageFour} />
                </div>
                <p className="text-[16px] font-medium text-[#E4E4E6]">
                  {testimonial[currentIndex].paragraphThree}
                </p>
              </div>
            </div>
            {/* For Desktop: Show three testimonials */}
            <div className="hidden lg:flex flex-row gap-5">
              {testimonial.slice(0, 3).map((tech, index) => (
                <div
                  className="flex-1 bg-cover p-[24px] mb-10 bg-testimonial"
                  key={index}
                >
                  <div className="flex justify-between items-center pb-5">
                    <div>
                      <p className="text-[16px] text-[#E4E4E6] font-medium">
                        {tech.paragraph}
                      </p>
                      <p className="text-[14px] text-[#62646C] font-normal">
                        {tech.paragraphTwo}
                      </p>
                    </div>
                    <ButtonLeftAndRight />
                  </div>
                  <div className="pb-5">
                    <img src={tech.imageFour} />
                  </div>
                  <p className="text-[16px] font-medium text-[#E4E4E6]">
                    {tech.paragraphThree}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div className="flex justify-center items-center lg:hidden pb-[20px]">
          <div className="flex border border-[#1C1C21] p-1 gap-2 rounded-full">
            <img
              className="w-12 transition-transform duration-300 active:-translate-x-1.5"
              src={Leftclick}
              onClick={handlePrevClick}
            />
            <img
              className="w-12 transition-transform duration-300 active:translate-x-2"
              src={Rightclick}
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonialsection;

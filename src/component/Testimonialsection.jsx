import React from "react";
import { Link } from "react-router-dom";
import Rightclick from "../assets/Right-Button.svg";
import Leftclick from "../assets/Left-Button.svg";
import { GoArrowRight } from "react-icons/go";
import { testimonial } from "../constant/Data";
import Abstractimage from "../assets/Abstract-Design.png";


const Testimonialsection = () => {
  return (
    <section className="bg-black">
      <div className="container pt-[80px] pb-[80px]  ">
        {/* testimonial sec*/}
        <div>
          <div className=" ">
            <div className="pb-[20px]">
              <p className="text-[14px]  lg:text[16px] xl font-bold text-[#797C86] ">
                Testimonials
              </p>
              <p className="text-[#FFFFFF] text-[28px] lg:text-[40px] font-semibold">
                What My Clients Say
              </p>
            </div>
            {/* dextop view flext for button against review text */}
            <div className="lg:flex justify-between  pb-10">
              <div className=" flex justify-between items-center ">
                <div className=" hidden lg:block">
                  <p className="text-[14px] lg:text[16px] font-light text-[#62646C]">
                    Total Reviews
                  </p>
                  <p className="text-[#CACACE] text-[20px] lg:text-[24px] ">
                    323
                  </p>
                </div>
              </div>
              <div className=" flex  items-center  gap-5 ">
                <div className=" hidden lg:flex   ">
                  <div className="flex border border-[#1C1C21] p-1 xl:p-1 lg:p-1 gap-2  rounded-full  ">
                    <img
                      className="w-10 transition-transform duration-300 active:-translate-x-1.5 "
                      src={Leftclick}
                    />
                    <img
                      className="w-10  transition-transform duration-300 active:translate-x-2"
                      src={Rightclick}
                    />
                  </div>
                </div>
                <div className="pb-[20px] lg:pb-[0px]">
                  <Link>
                    <button className="text-[14px] font-medium text-[#FFFFFF] bg-[#1C1C21] px-[20px] py-[14px]  rounded-lg flex justify-between  items-center gap-2">
                      View All Testimonials <GoArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
              <div className=" lg:hidden">
                <p className="text-[14px] font-light text-[#62646C]">
                  Total Reviews
                </p>
                <p className="text-[#CACACE]">323</p>
              </div>
            </div>
          </div>
        </div>
        {/* textimonial speech */}
        <div className="flex justify-between items-center  border-t   border-[#1C1C21] gap-5  pt-[40px]">
          {testimonial.map((tech, index) => (
            <div className={tech.class} key={index}>
              <div
                className="bg-cover p-[24px] mb-10  lg:border-none lg:pt-10 "
                style={{ backgroundImage: `url(${Abstractimage})` }}
              >
                <div className=" flex justify-between items-center pb-5 ">
                  <div>
                    <p className="text-[16px] text-[#E4E4E6]  font-medium">
                      {tech.paragraph}
                    </p>
                    <p className="text-[14px] text-[#62646C] font-normal">
                      {tech.paragraphTwo}
                    </p>
                  </div>
                  <div className=" border border-[#1C1C21] flex w-fit rounded-full   p-[8px]  xl:p-[13px]  gap-[6px] bg-black   ">
                    <Link>
                      <img
                        className="w-10 lg:w-6 xl:w-8  hover:bg-[#1C1C21]  hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-100 ease-in-out"
                        src={tech.image}
                      />
                    </Link>
                    <Link>
                      <img
                        className="w-10 lg:w-6 xl:w-8   hover:bg-[#1C1C21]  hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-100 ease-in-out"
                        src={tech.imageTwo}
                      />
                    </Link>
                    <Link>
                      <img
                        className="w-10 lg:w-6 xl:w-8   hover:bg-[#1C1C21] hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-100 ease-in-out"
                        src={tech.imageThree}
                      />
                    </Link>
                  </div>
                </div>
                <div className="pb-5">
                  <img src={tech.imageFour} />
                </div>
                <p className="text-[16px] font-medium text-[#E4E4E6]">
                  {tech.paragraphThree}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* end of textimonial speach */}
        <div className=" flex justify-center items-center lg:hidden  pb-[20px] ">
          <div className="flex border border-[#1C1C21] p-1 xl:p-3 lg:p-1 gap-2  rounded-full  ">
            <img
              className="w-12  transition-transform duration-300 active:-translate-x-1.5 "
              src={Leftclick}
            />
            <img
              className="w-12   transition-transform duration-300 active:translate-x-2"
              src={Rightclick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonialsection;

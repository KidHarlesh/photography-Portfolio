import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../assets/Facebook-Button.svg";
import Twitter from "../assets/Twitter-button.svg";
import Linkedin from "../assets/Linkedin-Button.svg";
import Rating from "../assets/Star-Container.svg";
import Rightclick from "../assets/Right-Button.svg";
import Leftclick from "../assets/Left-Button.svg";
import { GoArrowRight } from "react-icons/go";
import Abstractimage from "../assets/Abstract-Design.png";

const Testimonal = () => {
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
          <div
            className="bg-cover p-[24px] mb-10  lg:border-none lg:pt-10 "
            style={{ backgroundImage: `url(${Abstractimage})`}}
          >
            <div className=" flex justify-between items-center pb-5 ">
              <div>
                <p className="text-[16px] text-[#E4E4E6]  font-medium">
                  Emily johnson
                </p>
                <p className="text-[14px] text-[#62646C] font-normal">
                  USA,California
                </p>
              </div>
              <div className=" border border-[#1C1C21] flex w-fit rounded-full   p-[8px]  xl:p-[13px]  gap-[6px]   ">
                <Link>
                  <img
                    className="w-10 lg:w-6 xl:w-8  hover:bg-[#1C1C21]  hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-100 ease-in-out"
                    src={Facebook}
                  />
                </Link>
                <Link>
                  <img
                    className="w-10 lg:w-6 xl:w-8   hover:bg-[#1C1C21]  hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-100 ease-in-out"
                    src={Twitter}
                  />
                </Link>
                <Link>
                  <img
                    className="w-10 lg:w-6 xl:w-8   hover:bg-[#1C1C21] hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-100 ease-in-out"
                    src={Linkedin}
                  />
                </Link>
              </div>
            </div>
            <div className="pb-5">
              <img src={Rating} />
            </div>
            <p className="text-[16px] font-medium text-[#E4E4E6]">
              Damien's photography doesn't just capture moments; it captures
              emotions. Hes work is simply mesmerizing.
            </p>
          </div>
          {/* 2nd container */}
          <div
            className="bg-cover p-[24px] mb-10  hidden lg:block"
            style={{ backgroundImage: `url(${Abstractimage})` }}
          >
            <div className=" flex justify-between items-center pb-5 ">
              <div>
                <p className="text-[16px] text-[#E4E4E6]  font-medium">
                  John Smith
                </p>
                <p className="text-[14px] text-[#62646C] font-normal">
                  USA, California
                </p>
              </div>
              <div className=" border border-[#1C1C21] flex w-fit rounded-full   p-[8px]  xl:p-[13px]  gap-[6px]   ">
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
            </div>
            <div className="pb-5">
              <img src={Rating} />
            </div>
            <p className="text-[16px] font-medium text-[#E4E4E6]">
              Damien has an incredible talent for making every event feel
              effortless, and the results speak for themselves.
            </p>
          </div>
          {/* 3rd image container */}
          <div
            className="bg-cover p-6 mb-10  hidden lg:block"
            style={{ backgroundImage: `url(${Abstractimage})` }}
          >
            <div className=" flex justify-between items-center pb-5 ">
              <div>
                <p className="text-[16px] text-[#E4E4E6]  font-medium">
                  Samantha Davis
                </p>
                <p className="text-[14px] text-[#62646C] font-normal">
                  USA,California
                </p>
              </div>
              <div className=" border border-[#1C1C21] flex w-fit rounded-full   p-[8px]  xl:p-[13px]  gap-[6px]   ">
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
            </div>
            <div className="pb-5">
              <img src={Rating} />
            </div>
            <p className="text-[16px] font-medium text-[#E4E4E6]">
              I was blown away by Damien's ability to capture the essence of our
              wedding day. Hes photographs are our memories.
            </p>
          </div>
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

export default Testimonal;

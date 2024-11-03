import React from "react";
import Direction from "../assets/Vector-Stroke.svg";
import { Link } from "react-router-dom";
import Button from "../assets/Blue-Button.svg";

const Booking = () => {
  return (
    <section className="bg-black">
      <div className="container">
        {/* up div */}
        <div className="border-y  border-[#1C1C21] pt-[40px] lg:py-[60px]  lg:flex  lg:gap-[60px]  lg:items-center ">
          <div>
            <h1 className=" text-[28px] lg:text-[24px] xl:text-[36px] text-[#797C86] font-semibold pb-[14px]">
              Contact Information
            </h1>
            <div className=" hidden lg:block">
              <p className=" text-[14px] lg:text-[12px] xl:text-[16px] text-[#797C86] font-normal">
                Feel free to reach out to us through various channels. <br /> We
                are available by phone, email, and social media for <br /> your
                convenience.
              </p>
            </div>
            <div>
              <p className=" text-[14px] lg:hidden text-[#797C86] font-normal">
                Feel free to reach out to us through various channels. We are
                available by phone, email, and social media for your
                convenience.
              </p>
            </div>
          </div>
          <div className=" lg:flex lg:justify-between lg:items-center lg:gap-10 ">
            <div className=" flex items-center pt-[40px] lg:pt-[0px] pb-[20px] lg:pb-[0px] gap-[6px]">
              <p className="text-[16px] font-medium text-[#F2F2F3] border-b border-[#1C1C21] ">
                +1-123-456-7890
              </p>
              <img className="w-4" srcSet={Direction} />
            </div>
            <div className="flex items-center pb-[40px] lg:pb-[0px] gap-[6px]">
              <p className=" text-[16px] font-medium text-[#F2F2F3] border-b border-[#1C1C21]">
                info@damien braunphotography.com
              </p>
              <img className="w-4" srcSet={Direction} />
            </div>
          </div>
        </div>
        {/* down div */}
        <div className="lg:flex lg:gap-[60px] xl:gap-[100px] lg:item-center">
          {/* send a message div */}
          <div className="pt-[40px] pb-10 lg:hidden">
            <h1 className=" text-[28px] font-semibold text-[#797C86] pb-[14px]">
              Send Me a Message
            </h1>
            <p className="text-[14px] font-normal text-[#797C86]">
              Have a specific inquiry or message for us? Please use the contact
              form below, and we'll get back to you promptly.
            </p>
          </div>
          {/* lg:div */}
          <div className="hidden lg:block pt-[40px] lg:pt-[60px] pb-10">
            <h1 className=" text-[28px] font-semibold text-[#797C86] pb-[14px]">
              Send Me a Message
            </h1>
            <p className="text-[14px] font-normal text-[#797C86]">
              Have a specific inquiry or message for us? Please use <br /> the
              contact form below, and we'll get back to you <br /> promptly.
            </p>
          </div>
          {/* form div */}
          <form action="">
            <div className="lg:flex items-center gap-[40px] lg:pt-[60px]">
              <div className="pb-[25px]">
                <label
                  htmlFor="Fname"
                  className="text-[#E4E4E6] text-[16px] font-normal "
                >
                  First Name
                </label>
                <div className="bg-black border-b focus:outline-none border-[#1C1C21] pt-2">
                  <input
                    id="Fname"
                    type="text"
                    name="fname"
                    placeholder="FIRST NAME"
                    className="bg-black focus:outline-none   placeholder:text-[18px] text-[#62646c] font-normal   py-[10px] w-full
                "
                  />
                </div>
              </div>
              {/* first form input div end */}
              <div className="pb-[25px]">
                <label
                  htmlFor="lname"
                  className="text-[#E4E4E6] text-[16px] font-normal "
                >
                  Last Name
                </label>
                <div className="bg-black border-b focus:outline-none border-[#1C1C21] pt-2 ">
                  <input
                    id="lname"
                    type="text"
                    name="lname"
                    placeholder="LAST NAME"
                    className="bg-black  focus:outline-none placeholder:text-[18px] text-[#62646c] font-normal  py-[10px] w-full
                "
                  />
                </div>
              </div>
            </div>
            <div className="lg:lg:flex items-center gap-[40px]">
              {/* second form input div end */}
              <div className="pb-[25px]">
                <label
                  htmlFor="Email"
                  className="text-[#E4E4E6] text-[16px] font-normal "
                >
                  Email
                </label>
                <div className="bg-black border-b focus:outline-none border-[#1C1C21] pt-2 ">
                  <input
                    id="Email"
                    type="Email"
                    name="email"
                    placeholder="EMAIL ADDRESS"
                    className="bg-black  focus:outline-none placeholder:text-[18px] text-[#62646c] font-normal  py-[10px] w-full
                "
                  />
                </div>
              </div>
              {/* third form input div end */}
              <div className="pb-[25px]">
                <label
                  htmlFor="Phonenumber"
                  className="text-[#E4E4E6] text-[16px] font-normal "
                >
                  Phone Number
                </label>
                <div className="bg-black border-b focus:outline-none border-[#1C1C21]  pt-2 ">
                  <input
                    id="Phonenumber"
                    type="Number"
                    name="number"
                    placeholder="PHONE NUMBER"
                    className="bg-black focus:outline-none  placeholder:text-[18px] text-[#62646c] font-normal   py-[10px] w-full
                "
                  />
                </div>
              </div>
            </div>
            {/* 4th form input div end */}
            <div className="pb-[25px] lg:border-b lg:pb-[0px] border-[#1C1C21]">
              <label
                htmlFor="Your message"
                className="text-[#E4E4E6] text-[16px] font-normal "
              >
                Your Message
              </label>
              <div className="bg-black border-b  lg:border-none focus:outline-none border-[#1C1C21]  pt-2 ">
                <input
                  id="Your message"
                  type="text"
                  name="Message "
                  placeholder="MESSAGE"
                  className="bg-black focus:outline-none placeholder:text-[18px] text-[#62646c] font-normal   py-[10px]  w-full
                "
                />
              </div>
            </div>
            <div className="hidden lg:block  pt-[50px]">
              <div className=" flex  items-center gap-[6px]  border-b border-[#1C1C21]  ">
                <h1 className="text-[28px] font-semibold text-[#FFFFFF] ">
                  SEND MESSAGE
                </h1>
                <Link>
                  <img className="max-w-20 hover:animate-pulse " src={Button} />
                </Link>
              </div>
            </div>
          </form>
        </div>
        {/* form div ends */}
        <div className="flex  items-center gap-[6px]  border-b border-[#1C1C21]  lg:hidden">
          <h1 className="text-[28px] font-semibold text-[#FFFFFF]">
            SEND MESSAGE
          </h1>
          <Link>
            <img className="max-w-20 hover:animate-pulse " srcSet={Button} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Booking;

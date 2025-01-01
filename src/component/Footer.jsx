import React from "react";
import Sidelogo from "../assets/Damien-footLogo.svg";
import long from "../assets/footer-longimage.svg";
import Button from "../assets/Blue-Button.svg";
import { Link } from "react-router-dom";
import Facebook from "../assets/Facebook-Button.svg";
import Twitter from "../assets/Twitter-button.svg";
import Linkedin from "../assets/Linkedin-Button.svg";
import laptop from "../assets/long-Contain.svg";
import ButtonLeftAndRight from "./ButtonLeftAndRight";

const Footer = () => {
  return (
    <footer className="bg-black pt-20">
      <div className="container mx-auto">
        {/* Damien Logo */}
        <div className="flex justify-end   pb-5 lg:pb-16">
          <img
            className="w-[315px]  lg:w-[601px]"
            srcSet={Sidelogo}
            alt="Damien Logo"
          />
        </div>
      </div>
      {/* Laptop Long Image */}
      <div className="hidden lg:flex justify-center">
        <img srcSet={laptop} alt="Footer Long Desktop" />
      </div>
      {/* Mobile Long Image */}
      <div className="lg:hidden ">
        <img className="w-full h-18" src={long} alt="Footer Long" />
      </div>

      {/* links conatiner */}
      <div className="container flex flex-col lg:flex-row justify-center">
        {/* TOP CONTAINER */}
        <div className="px-5 py-10  xl:px-[60px] xl:py-[80px] border-[#2F2F37] border ">
          <p className="text-[14px] font-semibold text-[#797C86] pb-5">
            A MORE MEANINGFULL HOME FOR PHOTOGRAPHY
          </p>
          <span className=" flex font-semibold text-[28px] text-[#FFFFFF]">
            LET'S
            <Link>
              <img
                src={Button}
                alt="Call-to-action button"
                className="w-14 lg:w-20"
              />
            </Link>{" "}
          </span>
          <p className="font-semibold text-[28px] text-[#FFFFFF]">
            WORK TOGETHER
          </p>
        </div>
        {/* downcontainer */}
        <div className="border-[#2F2F37] border pl-10 lg:pl-0   py-[40px] xl:py-[80px] max-w-[100%]  ">
          <nav className="flex flex-wrap  text-[#F2F2F3] gap-10 lg:gap-[20px] xl:gap-[50px] lg:mx-10 xl:mx-20  ">
            <div className="flex flex-wrap gap-[65px] lg:gap-[20px] xl:gap-[50px] ">
              <ul className=" text-[14px]  ">
                <h1 className="text-[#797C86] font-semibold ">HOME</h1>
                <li className="border-b border-[#2F2F37]  pb-[4px] pt-[12px]">
                  <Link to="/about">ABOUTME</Link>
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[9px]">
                  <Link to="/portfolio">MYWORKS</Link>
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[9px]">
                  TESTIMONIALS
                </li>
              </ul>
              <ul className=" text-[14px]  ">
                <h1 className="text-[#797C86]  ">CLIENTS</h1>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  KLOVESTO
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  NUKEWAY
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  CLOVEN'S
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  MENVOL
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap  gap-[50px] lg:gap-[20px] xl:gap-[50px] ">
              <ul className=" text-[14px]  ">
                <h1 className="text-[#797C86] ">PORTFOLIO</h1>
                <li className="border-b border-[#2F2F37] pb-[4px]  pt-[6px]">
                  <Link>EVENTS</Link>
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  <Link>PORTRAIT</Link>
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  <Link>BRANDING</Link>
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  <Link>COMMERCIALE</Link>
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  WEDDING
                </li>
              </ul>
              <ul className=" text-[14px]  ">
                <h1 className="text-[#797C86] ">SERVICES</h1>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  PORTRATS
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  EVENTS
                </li>
                <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                  {" "}
                  OMMERCIAL
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="p-5 container ">
        <div className="flex justify-center">
          <p className="text-[#797C86] text-[14px] font-normal text-center border-r border-[#1C1C21] pr-2">
            <Link>Terms & Conditions</Link>
          </p>
          <p className="text-[#797C86] text-[14px] font-normal text-center pl-2">
            <Link>Privacy Policy</Link>
          </p>
        </div>
        <p className="text-[14px] text-[#797C86] font-normal text-center pt-4 pb-4">
          &copy; Damien Braun Photography. All rights reserved
        </p>

        <div className="flex justify-center">
          <ButtonLeftAndRight />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Sidelogo from "../assets/Damien-footLogo.svg";
import long from "../assets/footer-longimage.svg";
import Button from "../assets/Blue-Button.svg";
import { Link } from "react-router-dom";
import laptop from "../assets/long-Contain.svg";
import ButtonLeftAndRight from "./ButtonLeftAndRight";
import RightLeftSideIcon from "./RightLeftSideIcon";
import FooterNav from "./FooterNav";
import AfterXlScreenFooter from "./AfterXlScreenFooter";
import ForXlAbstractImage from "./ForXlAbstractImage";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 relative ">
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
      <div className="container flex flex-col lg:flex-row justify-center  relative   ">
        <div className="z-20">
          <RightLeftSideIcon />
        </div>

        <div className=" z-20">
          <AfterXlScreenFooter />
        </div>

        {/* TOP CONTAINER */}
        <div className="px-5 py-10  xl:px-[60px] xl:py-[80px] border-[#2F2F37] border z-0 ">
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
        <div className="z-0">
          <FooterNav />
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
      <div>
        <ForXlAbstractImage />
      </div>
    </footer>
  );
};

export default Footer;

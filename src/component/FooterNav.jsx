import React from 'react'
import { Link } from 'react-router-dom';

const FooterNav = () => {
  return (
    <div>
      {" "}
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
                <Link>TESTIMONIALS</Link>
              </li>
            </ul>
            <ul className=" text-[14px]  ">
              <h1 className="text-[#797C86]  ">CLIENTS</h1>
              <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                <Link>KLOVESTO</Link>
              </li>
              <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                <Link>NUKEWAY</Link>
              </li>
              <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                <Link>CLOVEN'S</Link>
              </li>
              <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                <Link>MENVOL</Link>
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
                <Link>WEDDING</Link>
              </li>
            </ul>
            <ul className=" text-[14px]  ">
              <h1 className="text-[#797C86] ">
                <Link>SERVICES</Link>
              </h1>
              <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                <Link>PORTRATS</Link>
              </li>
              <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                <Link>EVENTS</Link>
              </li>
              <li className="border-b border-[#2F2F37] pb-[4px] pt-[6px]">
                <Link>COMMERCIAL</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default FooterNav
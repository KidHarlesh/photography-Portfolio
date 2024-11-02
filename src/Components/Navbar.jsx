import React from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/Hamburger.svg";
import Mobilelogo from "../assets/Mobile.logo.svg";

const Navbar = () => {
  return (
    <section className=" bg-black text-[#AFB0B6]">
      <div className=" container  ">
        <nav className=" pl-[16px] lg:flex justify-between border-solid border border-[#2F2F37] border-y-0 items-center lg:px-[18px]   ">
          <div className=" flex justify-between  items-center pt-[40px]  lg:pt-[0px] ">
            <div>
              <Link>
                <img src={Mobilelogo} />
              </Link>
            </div>
            <div className="md:block  border border-[#2F2F37] border-e-0 lg:hidden p-[20px] rounded-tl-xl    ">
              <img src={Menu} />
            </div>
          </div>
          <ul className=" hidden  lg:flex justify-between  text-[14px]  font-normal  mt-[20px]  ">
            <li className=" border-[#2F2F37] border-solid border  border-e-0   border-b-0 py-[20px] px-[36px]  rounded-tl-lg  hover:bg-[#1C1C21]   hover:text-[#FFFFFF] transition delay-150 duration-300 ease-in-out">
              <Link>Home</Link>
            </li>
            <li className=" border-[#2F2F37] border-solid border  border-e-0  border-b-0 py-[20px] px-[26px] hover:bg-[#1C1C21]  hover:text-[#FFFFFF] transition delay-150 duration-300 ease-in-out">
              <Link>About Me</Link>
            </li>
            <li className=" border-[#2F2F37] border-solid border border-e-0   border-b-0 py-[20px] px-[26px] hover:bg-[#1C1C21]  hover:text-[#FFFFFF] transition delay-150 duration-300 ease-in-out">
              <Link>Portfolio</Link>
            </li>
            <li className=" border-[#2F2F37] border-solid border   border-b-0 py-[20px] px-[26px] rounded-tr-lg hover:bg-[#1C1C21]  hover:text-[#FFFFFF] transition delay-150 duration-300 ease-in-out ">
              <Link>Service</Link>
            </li>
          </ul>
          <div className="text-white">
            <button className=" hidden lg:block bg-[#1C1C21]  py-[10px] px-[15px] rounded-lg text-[10px] transition delay-150 duration-300 ease-in-out  ">
              Contact Me
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;

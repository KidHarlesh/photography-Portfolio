import React from "react";
import { Link } from "react-router-dom";
import Menu from "../assets/Hamburger.svg";
import Mobilelogo from "../assets/Mobile.logo.svg";

const Navbar = () => {
  return (
    <section className=" bg-black text-[#AFB0B6]">
      <nav className=" fixed top-0 w-[100%] bg-black border-solid border-x-0 border-[#2F2F37] border-t-0 border-b  items-center lg:px-[18px] z-50  ">
        <div className=" pl-4  container lg:flex justify-between  items-center border-x lg:px-[40px]  border-[#2F2F37] ">
          <div className=" flex justify-between  items-center pt-[40px]  lg:pt-[0px] ">
            <div>
              <Link>
                <img srcSet={Mobilelogo} />
              </Link>
            </div>
            <div className="md:block  border border-[#2F2F37] border-e-0 lg:hidden p-[20px] rounded-tl-xl  border-b-0   ">
              <img srcSet={Menu} alt="menu" />
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
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

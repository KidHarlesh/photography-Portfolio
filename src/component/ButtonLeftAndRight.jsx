import React from "react";
import Facebook from "../assets/Facebook-Button.svg";
import Twitter from "../assets/Twitter-button.svg";
import Linkedin from "../assets/Linkedin-Button.svg";

const ButtonLeftAndRight = () => {
  return (
    <div className=" border border-[#1C1C21] flex w-fit rounded-full   p-[8px]  xl:p-[13px]  gap-[6px] ">
      <a
        href="https://www.tiktok.com/@dev_lashe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-10 lg:w-6 xl:w-8  hover:bg-[#1C1C21]  hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-300 ease-in-out"
          src={Facebook}
        />
      </a>
      <a
        href="https://www.tiktok.com/@dev_lashe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-10 lg:w-6 xl:w-8   hover:bg-[#1C1C21]  hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-300 ease-in-out"
          src={Twitter}
        />
      </a>
      <a
        href="https://www.tiktok.com/@dev_lashe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-10 lg:w-6 xl:w-8   hover:bg-[#1C1C21] hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-300 ease-in-out"
          src={Linkedin}
        />
      </a>
    </div>
  );
};

export default ButtonLeftAndRight;

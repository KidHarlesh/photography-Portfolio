import React from 'react'
import Right from "../assets/RightAbstract.svg";
import Left from "../assets/LeftAbstract.svg";

const ForXlAbstractImage = () => {
  return (
    <div className="hidden xl:block 2xl:hidden z-0   ">
      <div className=" absolute top-[48%] right-0 w-[7.3rem]">
        <img src={Right} alt="" />
      </div>
      <div className="absolute top-[48%]   left-0  w-[7.3rem]">
        <img src={Left} alt="" />
      </div>
    </div>
  );
}

export default ForXlAbstractImage
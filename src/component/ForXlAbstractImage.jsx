import React from 'react'
import Right from "../assets/RightAbstract.svg";
import Left from "../assets/LeftAbstract.svg";

const ForXlAbstractImage = () => {
  return (
    <div className="hidden xl:block 2xl:hidden  ">
      <div className=" absolute top-[50%] right-0 w-[7.3rem]">
        <img src={Right} alt="" />
      </div>
      <div className="absolute top-[48%]   left-0  w-[7.3rem]">
        <img src={Left} alt="" />
      </div>
    </div>
  );
}

export default ForXlAbstractImage
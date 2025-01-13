import React from 'react'
import Right from "../assets/RightAbstract.svg";
import Left from "../assets/LeftAbstract.svg";

const AfterXlScreenFooter = () => {
  return (
    <div className="hidden 2xl:block   ">
      <div className=" absolute top-[23%] right-[50px]">
        <img src={Right} alt="" />
      </div>
      <div className="absolute top-[23%] left-[50px]">
        <img src={Left} alt="" />
      </div>
    </div>
  );
}

export default AfterXlScreenFooter
import React from 'react'
import sideIcon from "../assets/eIcon.svg";


const RightLeftSideIcon = () => {
  return (
    <div className=''>
      <div
        className="absolute hidden lg:block left-[-49px] top-[43px] xl:hidden  
           "
      >
        <img src={sideIcon} alt="" />
      </div>
      <div
        className="absolute hidden lg:block right-[-49px] top-[43px] xl:hidden  
           "
      >
        <img src={sideIcon} alt="" />
      </div>
    </div>
  );
}

export default RightLeftSideIcon
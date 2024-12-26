import React from 'react'
import Image from "../assets/DextopImage.png";
import { AboutCard, testimonialCard } from "../constant/Data";
const AboutSectionDextop = () => {
  return (
    <section className='"bg-black pt-[150px] pb-[40%] hidden lg:block'>
      <div className="container ">
        <div className="relative w-auto h-max">
          <h4 className="text-[16px] text-[#797C86] font-semibold pt-5">
            ABOUT
          </h4>
          <h1 className="text-[46px]  text-[#E4E4E6] font-semibold">
            ABOUT DAMIEN BRAUN
          </h1>
          <div className=" flex flex-col pb-[60px] ">
            <div className="flex flex-wrap   gap-[10px] ">
              {AboutCard.map((About, index) => (
                <div
                  key={index}
                  className=" border border-[#1C1C21] m-w-auto w-[200px] h-[100px] px-6 flex flex-col justify-center  rounded-lg"
                >
                  <p className=" text-[34px]  text-[#E4E4E6] font-semibold">
                    {About.number}
                  </p>
                  <p className="text-[14px] text-[#797C86] font-normal ">
                    {About.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={Image} alt="" className="absolute top-[0px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSectionDextop
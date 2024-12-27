import React from 'react'
import Image from "../assets/DextopImage.png";
import { AboutCard, testimonialCard } from "../constant/Data";
import Star from "../assets/Logo.png";
const AboutSectionDextop = () => {
  return (
    <section className='"bg-black pt-[150px] pb-[40%] hidden lg:block'>
      <div className="container ">
        <div className="relative w-auto h-max">
          <h4 className="text-[14px] xl:text-[16px]  text-[#797C86] font-semibold ">
            ABOUT
          </h4>
          <h1 className="  text-[36px] xl:text-[47px] 2xl:text-[60px]  text-[#E4E4E6] font-semibold ">
            ABOUT DAMIEN BRAUN
          </h1>
          <div className=" flex flex-col  pt-[8px] xl:pt-[16px] 2xl:pt-[20px]">
            <div className="flex flex-wrap   gap-[10px] bg-[#0E0E10] ">
              {AboutCard.map((About, index) => (
                <div
                  key={index}
                  className=" border border-[#1C1C21]  w-[145px]  xl:w-[192px] 2xl:w-[247px]    h-[94px] xl:h-[110px] 2xl:h-[142px] pl-4  
                    flex flex-col justify-center  rounded-lg"
                >
                  <p className=" text-[22px] xl:text-[26px] 2xl:text-[44px] text-[#E4E4E6] font-semibold">
                    {About.number}
                  </p>
                  <p className="text-[12px] xl:text-[14px] 2xl:text-[20px] text-[#797C86] font-normal ">
                    {About.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={Image} alt="" className="absolute top-[10px]  w-[100%]" />
          </div>
          <div className="pt-[32%] xl:pt-[33%]  flex items-center justify-between">
            <img src={Star} alt="" className="w-[100px] xl:w-[130px]" />
            <div className="pl-[75%]">
              <p className="text-[#797C86] text-[14px]  xl:text-[16px]">
                SCROLL DOWN TO SEE MY JOURNEY
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default AboutSectionDextop
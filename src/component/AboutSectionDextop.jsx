import React from 'react'
import Image from "../assets/DextopImage.png";
import { AboutCard, testimonialCard } from "../constant/Data";
import Star from "../assets/Logo.png";
const AboutSectionDextop = () => {
  return (
    <section className='"bg-black pt-[150px]  hidden lg:block'>
      <div className="container ">
        <div className="relative w-auto h-max">
          <h4 className="text-[14px] xl:text-[16px]  text-[#797C86] font-semibold ">
            ABOUT
          </h4>
          <h1 className="  text-[36px] xl:text-[42px] 2xl:text-[60px]  text-[#E4E4E6] font-semibold ">
            ABOUT DAMIEN BRAUN
          </h1>
          <div className=" flex flex-col  pt-[8px] xl:pt-[28px] 2xl:pt-[20px]">
            <div className="flex flex-wrap   gap-[10px]  ">
              {AboutCard.map((About, index) => (
                <div
                  key={index}
                  className=" border border-[#1C1C21]  w-[145px]  xl:w-[192px] 2xl:w-[247px]    h-[94px] xl:h-[110px] 2xl:h-[142px] pl-4  
                    flex flex-col justify-center  rounded-lg bg-[#0E0E10]"
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
            <img
              src={Image}
              alt="Damien image"
              className="absolute top-[10px]  w-[100%]"
            />
          </div>
          <div className="pt-[32%] xl:pt-[33%]  flex items-center justify-between">
            <img src={Star} alt="" className="w-[90px] xl:w-[100px]" />
            <div className="pl-[75%]">
              <p className="text-[#797C86] text-[14px]  xl:text-[16px]">
                SCROLL DOWN TO SEE MY JOURNEY
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="py-[40px] border-b border-[#1C1C21] ">
            <h1 className="text-[#797C86] font-semibold text-[28px] pb-5 ">
              MY BIOGRAPHY
            </h1>
            <p className="text-[#797C86]  font-normal text-[14px]  ">
              Damien Braun's love affair with photography began at a young age,
              nurtured by the captivating landscapes and vibrant cultures
              surrounding her in the heart of the USA. Her passion for
              storytelling through imagery led her to embark on a photography
              journey that has spanned over 15 years. <br /> Driven by an
              insatiable curiosity to explore the beauty in everyday moments,
              Damien has honed her craft meticulously. Her background in digital
              media provided her with a solid foundation, but it's her keen eye
              for detail and an innate ability to capture raw emotions that
              truly set her apart. <br /> Damien's journey is more than just
              taking pictures; it's about capturing the essence of the human
              spirit, the fleeting magic of nature, and the emotions that define
              our lives. With each click of her camera, she weaves stories that
              transcend time and space.
            </p>
          </div>
          <div className="pt-20 border-b border-[#1C1C21] ">
            <p className="text-[14px] font-semibold text-[#797C86]">JOURNEY</p>
            <h1 className="text-[28px] font-semibold text-[#FFFFFF] pb-5">
              DAMIEN'S JOURNEY - A TIMELINE
            </h1>
          </div>
          <div>
            <div className="pt-[40px] grid grid-cols-2  gap-[20px]">
              {testimonialCard.map((card, index) => (
                <div
                  key={index}
                  className=" bg-testimonial p-10  rounded-lg bg-[#0E0E10] "
                >
                  <h1 className="text-[#797C86] font-semibold text-[24px] pb-[10px]">
                    {" "}
                    {card.heading}
                  </h1>
                  <p className="text-[#797C86]">{card.paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSectionDextop
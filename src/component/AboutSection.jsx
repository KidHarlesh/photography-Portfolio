import React from "react";
import Image from "../assets/ServicePageImg.png";
import { AboutCard, testimonialCard } from "../constant/Data";
const AboutSection = () => {
  return (
    <section className='"bg-black pt-[150px] lg:hidden'>
      <div className="container ">
        <img
          src={Image}
          alt="Damien image"
          className="w-[383px] md:w-[690px] block mx-auto sm:max-w-[365px] md:max-w-[800px]"
        />
        <p className="text-[14px] text-[#797C86] font-semibold pt-5">ABOUT</p>
        <h1 className="text-[28px] text-[#E4E4E6] font-semibold pb-6">
          ABOUT DAMIEN BRAUN
        </h1>
        <div className=" flex flex-col pb-[60px] ">
          <div className="flex flex-wrap   gap-[10px] ">
            {AboutCard.slice(0, 6).map((About, index) => (
              <div
                key={index}
                className=" border border-[#1C1C21] m-w-auto w-[162px] h-[99px] flex flex-col justify-center  rounded-lg bg-[#0E0E10]"
              >
                <p className=" text-[28px] text-center text-[#E4E4E6] font-semibold">
                  {About.number}
                </p>
                <p className="text-[14px] text-[#797C86] font-normal text-center">
                  {About.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
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
            for detail and an innate ability to capture raw emotions that truly
            set her apart. <br /> Damien's journey is more than just taking
            pictures; it's about capturing the essence of the human spirit, the
            fleeting magic of nature, and the emotions that define our lives.
            With each click of her camera, she weaves stories that transcend
            time and space.
          </p>
        </div>
        <div className="pt-20 border-b border-[#1C1C21] ">
          <p className="text-[14px] font-semibold text-[#797C86]">JOURNEY</p>
          <h1 className="text-[28px] font-semibold text-[#FFFFFF] pb-5">
            DAMIEN'S JOURNEY - A TIMELINE
          </h1>
        </div>
        <div className="pt-[40px]  ">
          {testimonialCard.slice(0, 6).map((card, index) => (
            <div
              key={index}
              className=" bg-testimonial p-6 mb-5 rounded-xl bg-[#0E0E10]"
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
    </section>
  );
};

export default AboutSection;

import Vector from "../assets/Vector-img.svg";
import Button from "../assets/Blue-Button.svg";
import { Link } from "react-router-dom";
import BlackImage from "../assets/long-blackImage.png";
import MobileImage from "../assets/long-blackimagemd.png";
import Heroimage from "../assets/Hero-container.png";

const HeroSection = () => {
  return (
    <section className="bg-black border-solid border-x-0 border-[#2F2F37] pt-24 lg:pt-20">
      {/* Hero Content */}
      <div className="container grid lg:flex justify-between items-center relative py-10 lg:py-0 lg:h-[280px]">
        {/* Left Section: Title */}
        <div className="pb-5 lg:pb-0">
          <h1 className="text-[#62646C] text-sm font-normal xl:text-base lg:font-medium">
            STUNNING PHOTOGRAPHY BY
            <br />
            <span className="text-[#E4E4E6] text-4xl xl:text-6xl font-semibold">
              DAMIEN BRAUN
            </span>
          </h1>
        </div>
        {/* Center Section: Vector Image */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
          <img
            src={Vector}
            alt="Decorative vector"
            className="w-[300px] max-h-[279px]"
          />
        </div>

        <div>
          <h1 className="text-white text-4xl font-semibold">
            <span className="flex gap-3 items-center">
              Let’s
              <Link>
                <img
                  src={Button}
                  alt="Call-to-action button"
                  className="w-14 lg:w-20 animate-bounce"
                />
              </Link>
            </span>
            Work Together
          </h1>
        </div>
      </div>
      {/* Hero Image */}
      <div className="w-full">
        {/* Desktop Image */}
        <img
          src={BlackImage}
          alt="Hero background"
          loading="lazy"
          className="hidden lg:block w-full"
        />
        {/* Mobile Image */}
        <img
          src={MobileImage}
          alt="Mobile background"
          className="lg:hidden w-full h-auto"
        />
      </div>
      <div className="container">
        <img src={Heroimage} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;

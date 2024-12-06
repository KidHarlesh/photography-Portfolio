
import { useState } from "react";
import { dropDown, rightDropdown } from "../constant/Data";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const FAQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // To track the active dropdown

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle dropdown
  };

  return (
    <section className="bg-black">
      <div className="container  pt-20 ">
        <p className="text-[#797C86] text-[14px] font-semibold">FAQ's</p>
        <h1 className="text-[#FFFFFF] text-[28px] font-semibold pr-6 border-b  border-[#2F2F37] pb-[20px] ">
          Frequently Asked Questions
        </h1>
        <div className="flex lg:border-t border-[#2F2F37]">
          <div>
            {dropDown.map((drop, index) => (
              <div key={index} className="px-6 border-b  border-[#2F2F37]">
                <button
                  className="text-[#AFB0B6] flex items-center justify-between w-full text-left  "
                  onClick={() => handleToggle(index)}
                >
                  <h1 className="pr-20 py-5  ">{drop.heading}</h1>
                  {activeIndex === index ? (
                    <div className="border  rounded-[50%]   px-[10px] py-[5px]   border-[#2F2F37] ">
                      <FaChevronDown className="w-[10px]" />
                    </div>
                  ) : (
                    <div className="border  rounded-[50%] px-[10px] py-[5px]  border-[#2F2F37]">
                      <FaChevronUp className="w-[10px] " />
                    </div>
                  )}
                </button>
                {activeIndex === index && (
                  <p className="text-[#797C86]  font-normal text-[14px]">
                    {drop.paragraph}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:block border-l border-[#2F2F37]">
            {rightDropdown.map((drop, index) => (
              <div key={index} className="px-6 border-b  border-[#2F2F37]">
                <button
                  className="text-[#AFB0B6] flex items-center justify-between w-full text-left  "
                  onClick={() => handleToggle(index)}
                >
                  <h1 className=" py-[22PX] ">{drop.heading}</h1>
                  {activeIndex === index ? (
                    <div className="border  rounded-[50%]   px-[10px] py-[5px]   border-[#2F2F37] ">
                      <FaChevronDown className="w-[10px]" />
                    </div>
                  ) : (
                    <div className="border  rounded-[50%] px-[10px] py-[5px]  border-[#2F2F37]">
                      <FaChevronUp className="w-[10px] " />
                    </div>
                  )}
                </button>
                {activeIndex === index && (
                  <p className="text-[#797C86]  font-normal text-[14px]">
                    {drop.paragraph}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQuestion;



import { useState } from "react";
import { dropDown } from "../constant/Data";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const FAQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // To track the active dropdown

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle dropdown
  };

  return (
    <section className="bg-black">
      <div className="container  ">
        <p className="text-[#797C86] text-[14px] font-semibold">FAQ's</p>
        <h1 className="text-[#FFFFFF] text-[28px] font-semibold pr-6 border-b  border-[#2F2F37] pb-[20px] ">
          Frequently Asked Questions
        </h1>
        <div>
          {dropDown.map((drop, index) => (
            <div key={index} className="px-6 border-b  border-[#2F2F37]">
              <button
                className="text-[#AFB0B6] flex items-center justify-between w-full text-left  "
                onClick={() => handleToggle(index)}
              >
                <h1 className="pr-20 py-5  ">{drop.heading}</h1>
                {activeIndex === index ? <FaChevronDown /> : <FaChevronUp />}
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
    </section>
  );
};

export default FAQuestion;


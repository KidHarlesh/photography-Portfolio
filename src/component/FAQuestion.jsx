
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
      <div className="container">
        <p className="text-[#797C86]">FAQ's</p>
        <h1 className="text-[#FFFFFF] text-[28px] font-semibold">
          Frequently Asked Questions
        </h1>
        <div>
          {dropDown.map((drop, index) => (
            <div key={index} className="">
              <button
                className="text-[#AFB0B6] flex items-center justify-between w-full"
                onClick={() => handleToggle(index)}
              >
                {drop.heading}
                {activeIndex === index ? <FaChevronDown /> : <FaChevronUp />}
              </button>
              {activeIndex === index && (
                <p className="text-[#AFB0B6]  ">
                  {drop.paragraph}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQuestion;


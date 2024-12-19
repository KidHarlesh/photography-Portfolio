import { useState } from "react";
import { dropDown, rightDropdown } from "../constant/Data";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const FAQuestion = () => {
  const [activeLeftIndex, setActiveLeftIndex] = useState(null); // To track the active dropdown on the left
  const [activeRightIndex, setActiveRightIndex] = useState(null); // To track the active dropdown on the right

  const handleLeftToggle = (index) => {
    setActiveLeftIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle left dropdown
  };

  const handleRightToggle = (index) => {
    setActiveRightIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle right dropdown
  };

  return (
    <section className="bg-black lg:max-h-[533px] lg:pt-[100px]  lg:pb-[150px]">
      <div className="container mx-auto max-w-[1200px]  ">
        <p className="text-[#797C86] text-[14px] lg:text-[16px] font-semibold">
          FAQ's
        </p>
        <h1 className="text-[#FFFFFF] text-[28px] font-semibold pr-6 border-b border-[#2F2F37] pb-[20px]">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col lg:flex-row lg:border-t border-[#2F2F37]">
          {/* Left Dropdown Section */}
          <div className="w-full lg:w-1/2 max-w-[550px] max-h-[400px] overflow-y-auto">
            {dropDown.map((drop, index) => (
              <div
                key={index}
                className={`px-6 ${
                  index !== dropDown.length - 1
                    ? "border-b border-[#2F2F37]"
                    : ""
                }`}
              >
                <button
                  className="text-[#AFB0B6] flex items-center justify-between w-full text-left"
                  onClick={() => handleLeftToggle(index)}
                >
                  <h1 className="pr-20 py-5">{drop.heading}</h1>
                  {activeLeftIndex === index ? (
                    <div className="border rounded-[50%] px-[10px] py-[5px] border-[#2F2F37]">
                      <FaChevronDown className="w-[10px]" />
                    </div>
                  ) : (
                    <div className="border rounded-[50%] px-[10px] py-[5px] border-[#2F2F37]">
                      <FaChevronUp className="w-[10px]" />
                    </div>
                  )}
                </button>
                {activeLeftIndex === index && (
                  <p className="text-[#797C86] font-normal text-[14px]">
                    {drop.paragraph}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Dropdown Section */}
          <div className="hidden lg:block w-full lg:w-1/2 max-w-[550px] max-h-[400px] overflow-y-auto border-l border-[#2F2F37]">
            {rightDropdown.map((drop, index) => (
              <div
                key={index}
                className={`px-6 ${
                  index !== rightDropdown.length - 1
                    ? "border-b border-[#2F2F37]"
                    : ""
                }`}
              >
                <button
                  className="text-[#AFB0B6] flex items-center justify-between w-full text-left"
                  onClick={() => handleRightToggle(index)}
                >
                  <h1 className="py-[26px]">{drop.heading}</h1>
                  {activeRightIndex === index ? (
                    <div className="border rounded-[50%] px-[10px] py-[5px] border-[#2F2F37]">
                      <FaChevronDown className="w-[10px]" />
                    </div>
                  ) : (
                    <div className="border rounded-[50%] px-[10px] py-[5px] border-[#2F2F37]">
                      <FaChevronUp className="w-[10px]" />
                    </div>
                  )}
                </button>
                {activeRightIndex === index && (
                  <p className="text-[#797C86] font-normal text-[14px]">
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

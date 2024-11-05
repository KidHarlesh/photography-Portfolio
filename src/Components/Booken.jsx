import React from "react";
import { Link } from "react-router-dom";

// Assets
import Direction from "../assets/Vector-Stroke.svg";
import Button from "../assets/Blue-Button.svg";

// Components
const ContactInfo = ({ value }) => (
  <div className="flex items-center gap-[6px]">
    <p className="text-[16px] font-medium text-[#F2F2F3] border-b border-[#1C1C21]">
      {value}
    </p>
    <img className="w-4" src={Direction} alt="Direction icon" />
  </div>
);

const FormInput = ({ id, label, type, placeholder }) => (
  <div className="pb-[25px]">
    <label htmlFor={id} className="text-[#E4E4E6] text-[16px] font-normal">
      {label}
    </label>
    <div className="bg-black border-b focus:outline-none border-[#1C1C21] pt-2">
      <input
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        className="bg-black focus:outline-none placeholder:text-[18px] text-[#62646c] font-normal py-[10px] w-full"
      />
    </div>
  </div>
);

const Booken = () => {
  return (
    <section className="bg-black">
      <div className="container pb-5">
        {/* Header Section */}
        <div className="border-y border-[#1C1C21] pt-[40px] lg:py-[60px] lg:flex lg:gap-[60px] lg:items-center">
          <div>
            <h1 className="text-[28px] lg:text-[24px] xl:text-[36px] text-[#797C86] font-semibold pb-[14px]">
              Contact Information
            </h1>
            <p className="text-[14px] lg:text-[12px] xl:text-[16px] text-[#797C86] font-normal lg:hidden">
              Feel free to reach out to us through various channels. We are
              available by phone, email, and social media for your convenience.
            </p>
            <p className="hidden lg:block text-[14px] lg:text-[12px] xl:text-[16px] text-[#797C86] font-normal">
              Feel free to reach out to us through various channels. <br />
              We are available by phone, email, and social media for <br />
              your convenience.
            </p>
          </div>

          <div className="lg:flex lg:justify-between lg:items-center lg:gap-10">
            <div className="flex items-center pt-[40px] lg:pt-0 pb-[20px] lg:pb-0">
              <ContactInfo value="+1-123-456-7890" />
            </div>
            <div className="flex items-center pb-[40px] lg:pb-0">
              <ContactInfo value="info@damienbraunphotography.com" />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:flex lg:gap-[60px] xl:gap-[100px] lg:items-center">
          {/* Message Header */}
          <div className="pt-[40px] pb-10 lg:hidden">
            <h1 className="text-[28px] font-semibold text-[#797C86] pb-[14px]">
              Send Me a Message
            </h1>
            <p className="text-[14px] font-normal text-[#797C86]">
              Have a specific inquiry or message for us? Please use the contact
              form below, and we'll get back to you promptly.
            </p>
          </div>

          <div className="hidden lg:block pt-[40px] lg:pt-[60px] pb-10">
            <h1 className="text-[28px] font-semibold text-[#797C86] pb-[14px]">
              Send Me a Message
            </h1>
            <p className="text-[14px] font-normal text-[#797C86]">
              Have a specific inquiry or message for us? Please use <br />
              the contact form below, and we'll get back to you <br />
              promptly.
            </p>
          </div>

          {/* Contact Form */}
          <form className="w-full">
            <div className="lg:flex items-center gap-[40px] lg:pt-[60px]">
              <FormInput
                id="firstName"
                label="First Name"
                type="text"
                placeholder="FIRST NAME"
              />
              <FormInput
                id="lastName"
                label="Last Name"
                type="text"
                placeholder="LAST NAME"
              />
            </div>

            <div className="lg:flex items-center gap-[40px]">
              <FormInput
                id="email"
                label="Email"
                type="email"
                placeholder="EMAIL ADDRESS"
              />
              <FormInput
                id="phone"
                label="Phone Number"
                type="tel"
                placeholder="PHONE NUMBER"
              />
            </div>

            <div className="pb-[25px] lg:border-b lg:pb-0 border-[#1C1C21]">
              <label
                htmlFor="message"
                className="text-[#E4E4E6] text-[16px] font-normal"
              >
                Your Message
              </label>
              <div className="bg-black border-b lg:border-none focus:outline-none border-[#1C1C21] pt-2">
                <input
                  id="message"
                  type="text"
                  name="message"
                  placeholder="MESSAGE"
                  className="bg-black focus:outline-none placeholder:text-[18px] text-[#62646c] font-normal py-[10px] w-full"
                />
              </div>
            </div>

            {/* Submit Button - Desktop */}
            <div className="hidden lg:block pt-[50px]">
              <div className="flex items-center gap-[6px] border-b border-[#1C1C21]">
                <h1 className="text-[28px] font-semibold text-white">
                  SEND MESSAGE
                </h1>
                <Link>
                  <img
                    className="max-w-20 hover:animate-pulse"
                    src={Button}
                    alt="Send message"
                  />
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* Submit Button - Mobile */}
        <div className="flex items-center gap-[6px] lg:hidden">
          <h1 className="text-[28px] font-semibold text-white">SEND MESSAGE</h1>
          <Link>
            <img
              className="max-w-20 hover:animate-pulse"
              src={Button}
              alt="Send message"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Booken;

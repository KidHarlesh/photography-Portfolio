// import React from "react";
// import Sidelogo from "../assets/Damien-footLogo.svg";
// import long from "../assets/footer-longimage.svg";
// import Button from "../assets/Blue-Button.svg";
// import { Link } from "react-router-dom";
// import Facebook from "../assets/Facebook-Button.svg";
// import Twitter from "../assets/Twitter-button.svg";
// import Linkedin from "../assets/Linkedin-Button.svg";
// import laptop from "../assets/long-Contain.svg";

// const Footer = () => {
//   return (
//     <footer className=" bg-black pt-20">
//       <div className="flex justify-end pb-5 lg:pb-16 container">
//         {/* daimen img */}
//         <img
//           className="w-[315px] lg:w-[926px]  xl:h-14  lg:h-[169px] "
//           srcSet={Sidelogo}
//         />
//       </div>
//       {/* mobile  */}
//       <div className="lg:hidden ">
//         <img className="w-[100%]  h-18 " src={long} />
//       </div>
//       <div className="hidden lg:flex  justify-center">
//         <img srcSet={laptop} />
//       </div>
//       {/* 1st footer div */}
//       <div className=" lg:flex   items-center">
//         <div className="container lg:grid lg:items-start lg:grid-cols-2 ">
//           <div className="border border-[#1C1C21] px-5  py-10 lg:py-[80px]  lg:px-[60px]  ">
//             <p className="text-[14px]   text-[#797C86] pb-5  lg:pb-[50px] font-semibold">
//               A more meaningful home for photography
//             </p>
//             <div>
//               <h1 className=" text-[39px] lg:text-[48px]  text-[#FFFFFF] font-semibold ">
//                 <span className="flex gap-3 items-center">
//                   Let’s
//                   <Link>
//                     <img
//                       className="max-w-14  lg:max-w-[130px]  animate-bounce "
//                       srcSet={Button}
//                     />
//                   </Link>
//                 </span>
//                 Work Together
//               </h1>
//             </div>
//           </div>
//           {/* 2nd footer div */}
//           <div className="  border border-[#1C1C21] px-5 py-10 lg:px-[50px]   lg:py-[80px]  ">
//             <div className="text-neutral-50">
//               <div className="hidden lg:flex justify-between items-start gap-8 ">
//                 {/* Row 1 */}
//                 <div className="flex gap-8">
//                   {/* Nav 1 */}
//                   <nav>
//                     <ul>
//                       <h1 className="text-lg font-semibold mb-4">Home</h1>
//                       <li className="mb-2">About Us</li>
//                       <li className="mb-2">My Works</li>
//                       <li>Testimonial</li>
//                     </ul>
//                   </nav>
//                   {/* Nav 2 */}
//                   <nav>
//                     <ul>
//                       <h1 className="text-lg font-semibold mb-4">Clients</h1>
//                       <li className="mb-2">Klovesto</li>
//                       <li className="mb-2">Nukeway</li>
//                       <li className="mb-2">Cloven’s</li>
//                       <li>MenVol</li>
//                     </ul>
//                   </nav>
//                 </div>
//                 {/* Row 2 */}
//                 <div className="flex gap-8">
//                   {/* Nav 3 */}
//                   <nav>
//                     <ul>
//                       <h1 className="text-lg font-semibold mb-4">Portfolio</h1>
//                       <li className="mb-2">Events</li>
//                       <li className="mb-2">Portrait</li>
//                       <li className="mb-2">Branding</li>
//                       <li className="mb-2">Commercial</li>
//                       <li>Wedding</li>
//                     </ul>
//                   </nav>
//                   {/* Nav 4 */}
//                   <nav>
//                     <ul>
//                       <h1 className="text-lg font-semibold mb-4">Services</h1>
//                       <li className="mb-2">Portraits</li>
//                       <li className="mb-2">Events</li>
//                       <li>Commercial</li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>

//               {/* Mobile Layout */}
//               <div className="lg:hidden grid gap-8">
//                 {/* Nav 1 */}
//                 <nav>
//                   <ul>
//                     <h1 className="text-lg font-semibold mb-4">Home</h1>
//                     <li className="mb-2">About Us</li>
//                     <li className="mb-2">My Works</li>
//                     <li>Testimonial</li>
//                   </ul>
//                 </nav>
//                 {/* Nav 2 */}
//                 <nav>
//                   <ul>
//                     <h1 className="text-lg font-semibold mb-4">Clients</h1>
//                     <li className="mb-2">Klovesto</li>
//                     <li className="mb-2">Nukeway</li>
//                     <li className="mb-2">Cloven’s</li>
//                     <li>MenVol</li>
//                   </ul>
//                 </nav>
//                 {/* Nav 3 */}
//                 <nav>
//                   <ul>
//                     <h1 className="text-lg font-semibold mb-4">Portfolio</h1>
//                     <li className="mb-2">Events</li>
//                     <li className="mb-2">Portrait</li>
//                     <li className="mb-2">Branding</li>
//                     <li className="mb-2">Commercial</li>
//                     <li>Wedding</li>
//                   </ul>
//                 </nav>
//                 {/* Nav 4 */}
//                 <nav>
//                   <ul>
//                     <h1 className="text-lg font-semibold mb-4">Services</h1>
//                     <li className="mb-2">Portraits</li>
//                     <li className="mb-2">Events</li>
//                     <li>Commercial</li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//           {/* div for nav end */}
//         </div>
//       </div>

//       {/* first footer end */}
//       <div className="p-5">
//         <div className="flex justify-center">
//           <p className="text-[#797C86] text-[14px] font-normal text-center border-r border-[#1C1C21] pr-2 ">
//             <Link>Terms & Conditions</Link>
//           </p>
//           <p className="text-[#797C86]  text-[14px] font-normal text-center pl-2 ">
//             <Link>Privacy Policy</Link>
//           </p>
//         </div>
//         <p className="text-[14px] text-[#797C86] font-normal text-center pt-4 pb-4">
//           &copy; Damien Braun Photography. All rights reserved
//         </p>
//         <div className="flex justify-center">
//           <div className=" border border-[#1C1C21] flex w-fit rounded-full   p-[8px]  xl:p-[13px]  gap-[6px] bg-black   ">
//             <Link>
//               <img
//                 className="w-10 lg:w-6 xl:w-8  hover:bg-[#1C1C21]  hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-100 ease-in-out"
//                 src={Facebook}
//               />
//             </Link>
//             <Link>
//               <img
//                 className="w-10 lg:w-6 xl:w-8   hover:bg-[#1C1C21]  hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-100 ease-in-out"
//                 src={Twitter}
//               />
//             </Link>
//             <Link>
//               <img
//                 className="w-10 lg:w-6 xl:w-8   hover:bg-[#1C1C21] hover:text-[#bfbfbf] rounded-lg transition delay-150 duration-100 ease-in-out"
//                 src={Linkedin}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import Sidelogo from "../assets/Damien-footLogo.svg";
import long from "../assets/footer-longimage.svg";
import Button from "../assets/Blue-Button.svg";
import { Link } from "react-router-dom";
import Facebook from "../assets/Facebook-Button.svg";
import Twitter from "../assets/Twitter-button.svg";
import Linkedin from "../assets/Linkedin-Button.svg";
import laptop from "../assets/long-Contain.svg";

const Footer = () => {
  return (
    <footer className="bg-black pt-20">
      <div className="container mx-auto">
        {/* Damien Logo */}
        <div className="flex justify-end pb-5 lg:pb-16">
          <img
            className="w-[315px] lg:w-[926px] xl:h-14 lg:h-[169px]"
            srcSet={Sidelogo}
            alt="Damien Logo"
          />
        </div>

        {/* Laptop Long Image */}
        <div className="hidden lg:flex justify-center">
          <img srcSet={laptop} alt="Footer Long Desktop" />
        </div>
      </div>
      {/* Mobile Long Image */}
      <div className="lg:hidden ">
        <img className="w-full h-18" src={long} alt="Footer Long" />
      </div>
      {/* Footer Bottom */}
      <div className="p-5 container">
        <div className="flex justify-center">
          <p className="text-[#797C86] text-[14px] font-normal text-center border-r border-[#1C1C21] pr-2">
            <Link>Terms & Conditions</Link>
          </p>
          <p className="text-[#797C86] text-[14px] font-normal text-center pl-2">
            <Link>Privacy Policy</Link>
          </p>
        </div>
        <p className="text-[14px] text-[#797C86] font-normal text-center pt-4 pb-4">
          &copy; Damien Braun Photography. All rights reserved
        </p>
        <div className="flex justify-center">
          <div className="border border-[#1C1C21] flex w-fit rounded-full p-[8px] xl:p-[13px] gap-[6px] bg-black">
            <Link>
              <img
                className="w-10 lg:w-6 xl:w-8 hover:bg-[#1C1C21] rounded-lg transition delay-150 duration-100 ease-in-out"
                src={Facebook}
                alt="Facebook"
              />
            </Link>
            <Link>
              <img
                className="w-10 lg:w-6 xl:w-8 hover:bg-[#1C1C21] rounded-lg transition delay-150 duration-100 ease-in-out"
                src={Twitter}
                alt="Twitter"
              />
            </Link>
            <Link>
              <img
                className="w-10 lg:w-6 xl:w-8 hover:bg-[#1C1C21] rounded-lg transition delay-150 duration-100 ease-in-out"
                src={Linkedin}
                alt="Linkedin"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

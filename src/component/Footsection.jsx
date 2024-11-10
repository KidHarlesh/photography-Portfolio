// import React from "react";
// import Sidelogo from "../assets/Damien-footLogo.svg";
// import long from "../assets/footer-longimage.svg";
// import Button from "../assets/Blue-Button.svg";
// import { Link } from "react-router-dom";
// import Facebook from "../assets/Facebook-Button.svg";
// import Twitter from "../assets/Twitter-Button.svg";
// import Linkedin from "../assets/Linkedin-Button.svg";
// import laptop from "../assets/long-Contain.svg";
// import Left from "../assets/left-Abstract.svg";
// import Right from "../assets/Right-Abstract.svg";

// const Footsection = () => {
//   return (
//     <footer className=" bg-black pt-20">
//       <div className="flex justify-end pb-5 lg:pb-16 container">
//         <img
//           className="w-[315px] lg:w-[926px]  xl h-14  lg:h-[169px] "
//           srcSet={Sidelogo}
//         />
//       </div>
//       <div className="lg:hidden ">
//         <img className="w-[100%]  h-18 " src={long} />
//       </div>
//       <div className="hidden lg:flex  justify-center">
//         <img srcSet={laptop} />
//       </div>
//       {/* 1st footer div */}
//       <div className="flex   items-center">
//         <div className="hidden lg:block ">
//           <img className="  h-[187px]" srcSet={Left} />
//         </div>
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
//             {/* Footer Links */}
//             <div className="grid  gap-12 lg:grid-cols-2 lg:gap-0 ">
//               {/* Home Navbar */}
//               <div className="grid grid-cols-2   gap-[50px] lg:gap-[50px] pr-20 lg:pr-0 pl-5 lg:pl-0">
//                 <div>
//                   <h2 className="text-[14px] font-semibold text-[#797C86] mb-4 lg:mb-[20px]">
//                     HOME
//                   </h2>
//                   <nav className="text-[16px] text-[#F2F2F3]  font-medium space-y-2">
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/about">ABOUT ME</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/works">MY WORKS</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/testimonials">TESTIMONIALS</Link>
//                     </li>
//                   </nav>
//                 </div>
//                 {/* Client Navbar */}
//                 <div className="">
//                   <h2 className="text-[14px] font-semibold text-[#797C86] mb-4 lg:mb-[20px] ">
//                     CLIENT
//                   </h2>
//                   <nav className="text-[16px] text-[#F2F2F3] font-medium space-y-2">
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/klovesto">KLOVESTO</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/nukeway">NUKEWAY</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/clovens">CLOVEN’S</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/menvol">MENVOL</Link>
//                     </li>
//                   </nav>
//                 </div>
//               </div>
//               {/* Portfolio Navbar */}
//               <div className="grid grid-cols-2 gap-12 lg:gap-[100px]  pr-20 pl-5 ">
//                 <div>
//                   <h2 className="text-[14px] font-semibold text-[#797C86] mb-4 lg:mb-[20px]">
//                     PORTFOLIO
//                   </h2>
//                   <nav className="text-[16px] text-[#F2F2F3] font-medium space-y-2">
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/events">EVENTS</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/portrait">PORTRAIT</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/branding">BRANDING</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/commerciale">COMMERCIALE</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/wedding">WEDDING</Link>
//                     </li>
//                   </nav>
//                 </div>
//                 {/* Services Navbar */}
//                 <div>
//                   <h2 className="text-[14px] font-semibold text-[#797C86] mb-4 lg:mb-[20px]">
//                     SERVICES
//                   </h2>
//                   <nav className="text-[16px] text-[#F2F2F3] font-medium space-y-2">
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/portraits">PORTRAITS</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/events">EVENTS</Link>
//                     </li>
//                     <li className="list-none border-b inline-block border-[#1C1C21] pb-1">
//                       <Link to="/commercial">COMMERCIAL</Link>
//                     </li>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* div for nav end */}
//         </div>
//         <div>
//           <img className="hidden lg:block  h-[187px]" srcSet={Right} />
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
// export default Footsection;

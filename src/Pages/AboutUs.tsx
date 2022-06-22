import React from "react";
import AboutUsSvg from "../Component/AboutUsSvg";
import Header from "../Component/Header";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white shadow-2xl md:w-[50%] md:h-[70vh] grid md:grid-cols-2 lg:p-10 ">
       
       <div>
        <AboutUsSvg/>
       </div>
       
          <div>
            {" "}
            <div className="font-bold text-lg text-center">About Us</div>
            <div className="h-full text-base font-normal flex justify-center mt-10 ml-4 pb-5">
              {" "}
              Mission Statement - This describes the purpose of your business as
              it relates to the industry or market you serve. Vision Statement -
              The future of your business is outlined in this section. Values -
              Core values help the reader connect with you and your business on
              a personal level. Target Market Summary - Your site visitors want
              to know that they're in the right place and that your company can
              help them.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

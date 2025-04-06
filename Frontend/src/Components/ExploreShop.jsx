import React from "react";
import { assets } from "../assets/assets";

export const ExploreShop = ({ category, setCategory }) => {
  return (
    <div
      id="explore-shop"
      className="relative h-[44rem] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/black-white-portrait-athlete-competing-paralympics-championship-games_23-2151492682.jpg?t=st=1743950058~exp=1743953658~hmac=95190d39a309051ff7e5c1ee13a023dadfe1df446112aa2eb4a2e29af593db71&w=1380')",
      }}
    >
      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center text-center gap-5 md:gap-6 px-6 py-12 w-[90%] md:w-[75%] xl:w-[60%] mx-auto rounded-3xl bg-transparent">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold leading-tight bg-transparent">
          Assistive Tools for Effortless Communication
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-relaxed w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] bg-transparent">
          Explore innovative speech-to-text and text-to-speech tools designed to
          enhance accessibility and make digital interaction seamless for
          everyone.
        </p>

        <button className="bg-rose-600 hover:bg-white hover:text-rose-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center gap-2 shadow-md group ">
          Try Now
        </button>
      </div> */}
    </div>
  );
};

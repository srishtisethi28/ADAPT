import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="relative w-full h-[80rem] mt-24 overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://img.freepik.com/free-photo/monochrome-portrait-athlete-competing-paralympic-games-championship_23-2151492801.jpg?t=st=1743949289~exp=1743952889~hmac=ad73b59f9107c6d0fe9905ba8f16edae931ec209a358c6e5bc69d0b4c733342d&w=1380" // <-- Make sure to place this image in your public folder
        alt="Adaptive Shopping"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center  gap-4 md:gap-6 w-[90%] md:w-[65%] lg:w-[55%] ml-8 md:ml-20 mt-56 animate-fadeIn bg-transparent ">
        <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug bg-transparent">
          Adaptive Shopping for a Barrier-Free Future
        </h2>
        <p className="text-white text-base md:text-lg lg:text-xl hidden md:block bg-transparent">
          Discover a wide range of disability aids designed to make life easier, more independent, and accessible for everyone.
        </p>
        <Link 
          to="/shop"
          className="bg-rose-600 hover:bg-white text-white hover:text-rose-600 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center gap-2 w-fit shadow-lg group"
        >
          Shop Now
          
        </Link>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-5 md:gap-6 px-6 py-12 w-[90%] md:w-[75%] xl:w-[60%] mx-auto rounded-3xl bg-transparent mt-96">
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
      </div>
    </div>
  )
}

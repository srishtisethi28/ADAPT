import React from "react";
import { assets } from "../assets/assets";
export const ExploreShop = ({ category, setCategory }) => {
  return (
    <div id='explore-shop' className="h-[34rem] w-full rounded-3xl mt-14 bg-[url('/hero.png')]  " >
      <div className="relative  mr-5 ml-5 hidden lg:block bg-transparent">
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full absolute right-72 top-[1rem] z-10 shadow-xl shadow-slate-400 "
          src={assets.hero_i_1}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full absolute right-48 top-[5rem] z-10 shadow-xl shadow-slate-400 "
          src={assets.hero_i_2}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full  absolute right-24 top-[9rem] z-10 shadow-xl shadow-slate-400  "
          src={assets.hero_3}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full  absolute right-0 top-[13rem] z-10 shadow-xl shadow-slate-400 "
          src={assets.hero_6}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full absolute left-72 top-[1rem] z-10 shadow-xl shadow-slate-400"
          src={assets.hero_1}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full absolute left-48 top-[5rem] z-10 shadow-xl shadow-slate-400 "
          src={assets.hero_2}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full  absolute left-24 top-[9rem] z-10 shadow-xl shadow-slate-400  "
          src={assets.hero_i_3}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full  absolute left-0 top-[13rem] z-10 shadow-xl shadow-slate-400 "
          src={assets.hero_6}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full  absolute left-24 top-[17rem] z-10 shadow-xl shadow-slate-400  "
          src={assets.hero_5}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full  absolute left-48 top-[21rem] z-20 shadow-xl shadow-slate-400"
          src={assets.hero_i_4}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full absolute  left-72 top-[25rem] z-10 shadow-xl  shadow-slate-400 "
          src={assets.hero_7}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full  absolute right-24 top-[17rem] z-10 shadow-xl shadow-slate-400  "
          src={assets.hero_5}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full  absolute right-48 top-[21rem] z-20 shadow-xl  shadow-slate-400 "
          src={assets.hero_4}
          alt=""
        />
        <img
          className="xl:h-32 xl:w-32 lg:h-28 lg:w-28 rounded-full  absolute  right-72 top-[25rem] z-10 shadow-xl  shadow-slate-400 "
          src={assets.hero_i_7}
          alt=""
        />
      </div>
      <div className="flex flex-col flex-wrap  md:w-[75%] md:top-1/4 xl:w-[60%] lg:w-[40%] 1216px:top-[38%] mx-auto lg:top-[35%] sm:top-[38%] top-[30%] sm:w-[90%] relative  text-center justify-center items-center gap-4 lg:gap-2 animate-fadeIn 0.3s z-100 bg-transparent" >
        <h2 className=" text-[1.5rem] md:text-[2.6rem] lg:text-[1.3rem] xl:text-[2.2rem]  font-semibold text-[#404556] bg-transparent">Assistive Tools for Effortless Communication</h2>
        <p className="w-[60%] lg:w-[75%] md:w-[75%] text-[#404556] text-[0.9rem] md:text-[1rem] lg:text-[0.8rem] xl:text-[1rem] bg-transparent ">Explore innovative speech-to-text and text-to-speech tools designed to enhance accessibility and make digital interaction seamless for everyone</p>
        <button className=' bg-rose-600 rounded-3xl p-2 px-4 text-white font-semibold hover:bg-[#404556]  w-32 transition-all duration-400 ease-in-out flex gap-3 items-center group'>
                  Try Now
                  <img src={assets.arrowhover} className='w-5 bg-transparent' alt="Arrow" />
                </button>
      </div>
    </div>
  );
};

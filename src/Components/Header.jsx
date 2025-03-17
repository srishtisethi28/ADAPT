import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="bg-[url('/header14.png')] w-full md:h-[36rem] h-[36rem]  bg-cover bg-center rounded-3xl bg-no-repeat  relative mt-[8rem] ">
      <div className=' absolute flex flex-col lg:gap-5 md:gap-4 gap-3 w-[60%] md:ml-20 ml-12 mt-20 animate-fadeIn  bg-transparent '>
        
        <h2 className='text-[#404556] font-bold xl:text-6xl lg:text-5xl md:text-4xl text-4xl bg-transparent'>Adaptive Shopping for a Barrier-Free Future</h2>
        <p className='text-[#404556] hidden lg:block md:block text-lg bg-transparent'>Discover a wide range of disability aids designed to make life easier, more independent, and accessible for everyone.</p>
        <Link to='/shop' className=' bg-rose-600 rounded-3xl pl-3 py-3 text-white font-semibold hover:bg-[#404556]  w-32 transition-all duration-600 ease-in-out flex gap-2 items-center group'>
          Shop Now
          <img src={assets.arrowhover} className='w-5 bg-transparent' alt="Arrow" />
        </Link>

      </div>
</div>

  )
}

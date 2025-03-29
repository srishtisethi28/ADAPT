import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 px-[4%] w-full h-16"> 
      <p className='text-5xl text-rose-500 font-bold'>Adapt</p>
      <img className="w-10" src={assets.profile_image} alt="Profile" />
    </div>
  )
}

export default Navbar

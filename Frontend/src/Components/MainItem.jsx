import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const MainItem = ({id,name,price,description,image}) => {
  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)
  return (
    <div className='flex flex-col   rounded-xl  shadow-[0px_0px_12px_rgba(183,150,185,0.54)]  z-10 hover:scale-105 transition-all duration-300 ease-in-out'>
      <div className='relative rounded-xl'>
        <img className='xl:w-68 xl:h-52 w-64 h-52 561px:w-56 561px:h-40 lg:h-48 md:h-48 md:w-64 lg:w-68 sm:h-40 sm:w-64 rounded-xl p-2' src={url+ '/shopImages/'+image} alt="" />

        {!cartItems[id]?
          <img className='absolute bottom-2 right-2 w-10 shadow-lg z-20 shadow-gray-100 rounded-full'  onClick={()=>addToCart(id)} src={assets.add_icon_white}/>:
          <div className='absolute bottom-2 right-2 shadow-lg shadow-gray-100 z-20 flex justify-between rounded-3xl gap-2 items-center px-2 py-1'>
            <img className='w-7' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p className='text-white'>{cartItems[id]}</p>
            <img className='w-7' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>}
      </div>
      <div className="flex flex-col p-3 rounded-b-xl ">
        <div className='flex justify-between gap-2'>
            <p className='font-semibold lg:text-[15px] md:text-[13px] sm:text-[12px] xl:text-[15px] text-white '>{name}</p>
            <p className='text-rose-600 font-semibold lg:text-[15px] md:text-[13px] sm:text-[12px] xl:text-[16px]  mb-2'>₹{price}</p>
        </div>
        <p className='text-white lg:text-[12px] md:text-[11px] sm:text-[10px]'>{description}</p>
      </div>
    </div>
  )
}

export default MainItem

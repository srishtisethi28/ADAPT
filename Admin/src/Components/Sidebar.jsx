import React from 'react';
import { assets } from "../assets/assets";
import { NavLink } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbClipboardList } from "react-icons/tb";
import { IoBasketSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-[1.5px] border-gray-400 text-[max(1vw,10px)]'>
      <div className="pt-[50px] pl-[20%] flex flex-col gap-[20px]">
        
        {/* Add Items */}
        <NavLink 
          to='/add' 
          className={({ isActive }) => `flex items-center gap-3 border border-gray-400 border-r-0 p-2 rounded-l-md cursor-pointer 
            ${isActive ? 'bg-rose-400 border-rose-500 text-black' : 'text-[#fcfcfc]'}`}>
          <IoIosAddCircleOutline className="text-white" size={24} />
          <p className='max-md:hidden'>Add In Explore</p>
        </NavLink>
        <NavLink 
          to='/shop' 
          className={({ isActive }) => `flex items-center gap-3 border border-gray-400 border-r-0 p-2 rounded-l-md cursor-pointer 
            ${isActive ? 'bg-rose-400 border-rose-500 text-black' : 'text-[#fcfcfc]'}`}>
          <IoIosAddCircleOutline className="text-white" size={24} />
          <p className='max-md:hidden'>Add In Shop</p>
        </NavLink>

        {/* List Items */}
        <NavLink 
          to='/list' 
          className={({ isActive }) => `flex items-center gap-3 border border-gray-400 border-r-0 p-2 rounded-l-md cursor-pointer 
            ${isActive ? 'bg-rose-400 border-rose-500 text-black' : 'text-[#fcfcfc]'}`}>
          <TbClipboardList className="text-white" size={24} />
          <p className='max-md:hidden'>List Explore</p>
        </NavLink>
        <NavLink 
          to='/listShop' 
          className={({ isActive }) => `flex items-center gap-3 border border-gray-400 border-r-0 p-2 rounded-l-md cursor-pointer 
            ${isActive ? 'bg-rose-400 border-rose-500 text-black' : 'text-[#fcfcfc]'}`}>
          <TbClipboardList className="text-white" size={24} />
          <p className='max-md:hidden'>List Shop</p>
        </NavLink>

        {/* Orders */}
        {/* <NavLink 
          to='/order' 
          className={({ isActive }) => `flex items-center gap-3 border border-gray-400 border-r-0 p-2 rounded-l-md cursor-pointer 
            ${isActive ? 'bg-rose-400 border-rose-500 text-black' : 'text-[#fcfcfc]'}`}>
          <IoBasketSharp className="text-white" size={24} />
          <p className='max-md:hidden'>Orders</p>
        </NavLink> */}

      </div>
    </div>
  );
};

export default Sidebar;

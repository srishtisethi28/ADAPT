import React from 'react';
import { motion } from 'framer-motion';
import { shop_list } from '../assets/assets';

export const ExploreItems = ({ category, setCategory }) => {
  return (
    <div id='explore-items' className="flex flex-col gap-4 mt-20 justify-center items-center text-center px-4">
      <h1 className='xl:text-5xl sm:text-4xl xs:text-3xl text-5xl text-white font-semibold'>Top Selling Products</h1>
      <p className='xl:text-2xl text-xl sm:text-lg text-white mb-4 max-w-2xl'>
        Discover a range of products designed to make life easier and more accessible for everyone
      </p>
      <div className='flex xl:gap-8 gap-10 sm:gap-6 overflow-x-auto whitespace-nowrap px-4 py-2 scrollbar-hide'>
        {shop_list.map((item, index) => (
          <motion.div 
            key={index} 
            onClick={() => setCategory(prevCategory => prevCategory === item.shop_name ? "All" : item.shop_name)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index* 0.2 }}
            className='flex flex-col items-center justify-center gap-4 cursor-pointer flex-shrink-0'
          >
            <img 
              className={
                category === item.shop_name
                  ? 'w-44 h-44 sm:w-36 sm:h-36 xs:w-28 xs:h-28 xl:w-48 xl:h-48 rounded-full shadow-md shadow-gray-100 hover:scale-110 transition-all duration-300 ease-in-out p-2 bg-gradient-to-b from-[#fc97b9] via-[#e2729b] to-[#2d2d2d]'
                  : 'w-44 h-44 sm:w-36 sm:h-36 xs:w-28 xs:h-28 xl:w-48 xl:h-48 rounded-full shadow-md shadow-gray-100 hover:scale-110 transition-all duration-300 ease-in-out p-2 bg-gradient-to-b from-[#fc97b9] via-[#e2729b] to-[#2d2d2d]'
              } 
              src={item.shop_img} 
              alt={item.shop_name} 
            />
            <p className='text-white text-xl sm:text-lg xs:text-base hover:text-rose-500 transition-all duration-300 ease-in-out font-semibold'>
              {item.shop_name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

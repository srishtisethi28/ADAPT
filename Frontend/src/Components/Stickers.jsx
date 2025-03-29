import React from "react";
import { motion } from "framer-motion";
import { shop_list } from "../assets/assets";

const Stickers = ({ category, setCategory }) => {
  return (
    <div className="h-[20rem] flex justify-center items-center gap-10 flex-wrap px-5 mt-6">
      {shop_list.map((item, index) => (
        <motion.div
          key={index}
          onClick={() =>
            setCategory((prevCategory) =>
              prevCategory === item.shop_name ? "All" : item.shop_name
            )
          }
          initial={{ 
            opacity: 0, 
            y: 50, 
            rotate: 0
          }}
          animate={{ opacity: 1, y: 0, rotate: index === 0 || index===1 ? -15 : index >= shop_list.length - 2 ? 15 : 0  }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          className="flex flex-col items-center justify-center gap-4 cursor-pointer flex-shrink-0 p-4  bg-gradient-to-b from-[#c86888] via-[#b13361] to-[#1e1e1e] rounded-2xl shadow-md shadow-gray-100 "
        >
          <img
            className={`w-44 h-44 sm:w-36 sm:h-36 xs:w-28 xs:h-28 xl:w-48 xl:h-48 rounded-2xl transition-all duration-300 ease-in-out ${
              category === item.shop_name ? "border-4 border-white shadow-xl" : ""
            }`}
            src={item.shop_img}
            alt={item.shop_name}
          />
          <p className="text-white text-xl sm:text-lg xs:text-base bg-transparent hover:text-gray-300 transition-all duration-300 ease-in-out font-semibold">
            {item.shop_name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stickers;

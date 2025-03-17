import React from "react";
import { shop_list } from "../assets/assets";
const MainSticker = () => {
  return (
    <div>
      {shop_list.map((item, index) => (
        <div
          key={index}
          onClick={() =>
            setCategory((prevCategory) =>
              prevCategory === item.shop_name ? "All" : item.shop_name
            )
          }
          className="flex flex-col items-center justify-center  gap-4 cursor-pointer flex-shrink-0  bg-transparent"
        >
          <img
            className={
              category === item.shop_name
                ? "w-44 h-44 sm:w-36 sm:h-36 xs:w-28 xs:h-28 xl:w-48 xl:h-48 rounded-full shadow-lg shadow-[rgba(183,150,185,0.54)] hover:scale-110 transition-all duration-300 ease-in-out"
                : "w-44 h-44 sm:w-36 sm:h-36 xs:w-28 xs:h-28 xl:w-48 xl:h-48 rounded-full shadow-lg shadow-[rgba(183,150,185,0.54)] hover:scale-110 transition-all duration-300 ease-in-out"
            }
            src={item.shop_img}
            alt={item.shop_name}
          />
          <p className="text-white sm:text-lg xs:text-base hover:text-rose-500 transition-all duration-300 ease-in-out font-semibold">
            {item.shop_name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainSticker;

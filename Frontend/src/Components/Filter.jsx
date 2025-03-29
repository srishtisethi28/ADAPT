import React from "react";
import { shop_list } from "../assets/assets";

const Filter = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-6 text-center bg-gray-200 p-3 rounded-xl">
      <div>
        <h2 className="text-xl font-semibold text-rose-600 hover:text-[#404556] transition-all duration-300 ease-in-out cursor-pointer -mb-3">
          Categories
        </h2>
      </div>

      <div>
        {shop_list.map((item, index) => (
            <div>
                <p className="border border-gray-300 mb-1"></p>
                <div
                  key={index}
                  onClick={() =>
                    setCategory((prevCategory) =>
                      prevCategory === item.shop_name ? "All" : item.shop_name
                    )
                  }
                  className="flex  items-center justify-start gap-3 font-medium mb-1 cursor-pointer flex-shrink-0"
                >
      
                  <div className=" text-[#404556] text-sm font-semibold hover:text-rose-500 transition-all duration-300 ease-in-out">
                    <img
                      className={`rounded-full shadow-[0px_0px_12px_rgba(183,150,200,1.54)] hover:scale-110 transition-all duration-300 ease-in-out
                  ${
                    category === item.shop_name
                      ? "w-24 h-24 sm:w-36 sm:h-36 xs:w-28 xs:h-28 xl:w-16 xl:h-16"
                      : "w-44 h-44 sm:w-36 sm:h-36 xs:w-28 xs:h-28 xl:w-16 xl:h-16"
                  }`}
                      src={item.shop_img}
                      alt={item.shop_name}
                    />
                  </div>
                    <p>{item.shop_name}</p>
                </div>
                
            </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

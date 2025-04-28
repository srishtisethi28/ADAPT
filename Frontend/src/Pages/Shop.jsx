import React, { useState, useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import MainItem from '../Components/MainItem';
import Stickers from '../Components/Stickers';
import bg1 from "../assets/bg1.jpg"; 

const Shop = () => {
  const [category, setCategory] = useState("All");
  const { main_shop } = useContext(StoreContext);

  return (
    <div className="mt-16 w-full flex flex-col justify-center items-center">
      {/* Background Header */}
      <div className="heading flex flex-col justify-center items-center gap-2 bg-cover bg-center bg-no-repeat w-full h-[32rem]"
        style={{ backgroundImage: `url(${bg1})` }}>
        <h2 className='text-center text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-rose-400 to-purple-500 mb-16 drop-shadow-lg animate-pulse '>
        🛍️ Our Products
        </h2>
        <p className='text-2xl text-white bg-transparent'>
          Discover a range of products designed to make life easier and more accessible for everyone
        </p>
      </div>

      {/* Filter Stickers */}
      <div className="w-[95%] pl-12 pr-6 flex flex-col gap-12">
        <Stickers category={category} setCategory={setCategory} />

        {/* Product grid */}
        <div className="mt-4 flex flex-col gap-4 items-center rounded-xl p-8">
          <div className='grid xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-3 561px:grid-cols-2 lg:gap-8 xl:gap-10 gap-8'>
            {main_shop
              .filter(item => category === "All" || item.category === category)
              .map((item, index) => (
                <MainItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

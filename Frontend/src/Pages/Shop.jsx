import React, {useState, useEffect} from 'react'
import { ExploreItems } from '../Components/ExploreItems'
import { Display } from '../Components/Display'
import MainShopDisplay from '../Components/MainShopDisplay';

const Shop = () => {
    const [category,setCategory]=useState("All");
    
    
  return (
    <div className=' mt-[8.5rem] w-full '>
      <div className="heading flex flex-col justify-center items-center gap-2">
        <h2 className='text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-rose-400 to-purple-500 mb-16 drop-shadow-lg animate-pulse mt-8'>Our Products</h2>
        <p className='text-xl text-white'>Discover a range of products designed to make life easier and more accessible for everyone</p>
        <MainShopDisplay category={category} setCategory={setCategory}/>
      </div>
    </div>
  )
}

export default Shop

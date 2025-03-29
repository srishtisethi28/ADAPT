import React, {useState, useEffect} from 'react'
import { ExploreItems } from '../Components/ExploreItems'
import { Display } from '../Components/Display'
import MainShopDisplay from '../Components/MainShopDisplay';

const Shop = () => {
    const [category,setCategory]=useState("All");
    
    
  return (
    <div className=' mt-[8.5rem] w-full '>
      <div className="heading flex flex-col justify-center items-center gap-2">
        <h2 className='text-5xl font-semibold text-white'>Our Products</h2>
        <p className='text-xl text-white'>Discover a range of products designed to make life easier and more accessible for everyone</p>
        <MainShopDisplay category={category} setCategory={setCategory}/>
      </div>
    </div>
  )
}

export default Shop

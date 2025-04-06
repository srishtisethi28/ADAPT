import React, { useState ,useEffect} from 'react'
import { Header } from '../Components/Header'
import { Display } from '../Components/Display';
import { ExploreShop } from '../Components/ExploreShop';
import { ExploreItems } from '../Components/ExploreItems';
import Footer from '../Components/Footer';

export const Home = ({showFooter,setShowFooter}) => {
  const [category,setCategory]=useState("All");
  useEffect(() => {
        
        setShowFooter(true)
      }, [showFooter])
  return (
    <div className='w-full mx-auto bg-black'>
      
        <Header/>
        {/* <ExploreShop/> */}
        <ExploreItems category={category} setCategory={setCategory}/>
        <Display category={category} />
    </div>
  )
}

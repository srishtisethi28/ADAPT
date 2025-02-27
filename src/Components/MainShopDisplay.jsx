import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import MainItem from './MainItem';
import Filter from './Filter';
import Stickers from './Stickers';
import { ExploreItems } from './ExploreItems';

const MainShopDisplay = ({ category, setCategory }) => {
    const { main_shop } = useContext(StoreContext);

    return (
        <div className='flex flex-col gap-12 w-[95%] pl-12 pr-6'>

            <Stickers category={category} setCategory={setCategory} />

            {/* Product grid - added margin to avoid overlapping with fixed filter */}
            <div className="mt-4 flex flex-col gap-4 items-center rounded-xl p-8  ">
                <div className='grid xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-3 561px:grid-cols-2 lg:gap-8 xl:gap-10 gap-8'>
                    {main_shop
                        .filter(item => category === "All" || item.category === category)
                        .map((item, index) => (
                            <MainItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default MainShopDisplay;

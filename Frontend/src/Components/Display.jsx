import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import Item from './Item'
export const Display = ({ category }) => {
  const { product_list } = useContext(StoreContext);

  return (
      <div className="mt-8 flex flex-col gap-4 items-center rounded-xl p-8 px-28 ">
          <div className='grid xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-3 561px:grid-cols-2 lg:gap-8 xl:gap-8 gap-8 rounded-xl'>
              {product_list
                  .filter(item => category === "All" || item.category === category)
                  .map((item, index) => (
                      <Item key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                  ))}
          </div>
      </div>
  );
};

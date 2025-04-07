import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const Item = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className='flex flex-col rounded-xl shadow-[0px_0px_12px_rgba(183,150,185,0.54)] z-10 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer' 
        onClick={() => setShowModal(true)}
      >
        <div className='relative rounded-xl'>
          <img className='xl:w-80 xl:h-44 w-64 h-52 561px:w-56 561px:h-40 lg:h-48 md:h-48 md:w-64 lg:w-68 sm:h-40 sm:w-64 rounded-xl p-2' src={url + "/images/" + image} alt="" />
          {!cartItems[id] ? (
            <img className='absolute bottom-2 right-2 w-10 shadow-md z-20 shadow-gray-100 rounded-full' onClick={(e) => { e.stopPropagation(); addToCart(id); }} src={assets.add_icon_white} />
          ) : (
            <div className='absolute bottom-2 right-2 shadow-lg shadow-gray-100 z-20 flex justify-between rounded-3xl gap-2 items-center px-2 py-1' onClick={(e) => e.stopPropagation()}>
              <img className='w-7' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p className='text-white'>{cartItems[id]}</p>
              <img className='w-7' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
          )}
        </div>
        <div className="flex flex-col p-3 rounded-b-xl">
          <div className='flex justify-between gap-2'>
            <p className='font-semibold text-white lg:text-[15px] md:text-[13px] sm:text-[12px] xl:text-[14px]'>{name}</p>
            <p className='text-rose-500 font-semibold lg:text-[15px] md:text-[13px] sm:text-[12px] xl:text-[16px] mb-2'>₹{price}</p>
          </div>
          <p className='text-white lg:text-[12px] md:text-[11px] sm:text-[10px]'>{description}</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center  " onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-[90%] p-6 text-center relative " onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-4 text-gray-500 text-xl bg-transparent" onClick={() => setShowModal(false)}>×</button>
            <img className="w-full rounded-xl mb-4 bg-transparent h-80" src={url + "/images/" + image} alt={name} />
            <h2 className="text-2xl font-bold mb-2 bg-transparent text-rose-500">{name}</h2>
            <p className="text-gray-600 mb-3 bg-transparent">{description}</p>
            <p className="text-lg text-rose-500 font-semibold bg-transparent mb-4">₹{price}</p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl" onClick={() => { addToCart(id); setShowModal(false); }}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Item;

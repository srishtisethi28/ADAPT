import React, { useContext,useEffect } from "react";
import { StoreContext } from "../context/StoreContext";

export const PlaceOrder = ({showFooter,setShowFooter}) => {
  const { getTotalCartAmmount } = useContext(StoreContext);
  useEffect(() => {
            
            setShowFooter(true)
          }, [showFooter])
  return (
    <form >
      <div className="flex flex-col md:flex-row justify-between gap-12 mt-36 w-[80%] mx-auto">
        {/* Left Section - Delivery Information */}
        <div className="w-full max-w-[500px]">
          <p className="text-2xl font-semibold mb-12">Delivery Information</p>
          <div className="flex gap-3 mb-4">
            <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded focus:outline-tomato" />
            <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded focus:outline-tomato" />
          </div>
          <input type="text" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-tomato" />
          <input type="text" placeholder="Street" className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-tomato" />
          
          <div className="flex gap-3 mb-4">
            <input type="text" placeholder="City" className="w-full p-2 border border-gray-300 rounded focus:outline-tomato" />
            <input type="text" placeholder="State" className="w-full p-2 border border-gray-300 rounded focus:outline-tomato" />
          </div>
          <div className="flex gap-3 mb-4">
            <input type="text" placeholder="Zip Code" className="w-full p-2 border border-gray-300 rounded focus:outline-tomato" />
            <input type="text" placeholder="Country" className="w-full p-2 border border-gray-300 rounded focus:outline-tomato" />
          </div>
          <input type="text" placeholder="Phone" className="w-full p-2 border border-gray-300 rounded focus:outline-tomato" />
        </div>

        {/* Right Section - Cart Total */}
        <div className="w-full max-w-[500px]">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
            <div className="text-gray-600">
              <div className="flex justify-between py-2">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmmount()}</p>
              </div>
              <hr />
              <div className="flex justify-between py-2">
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmmount() === 0 ? 0 : 100}</p>
              </div>
              <hr />
              <div className="flex justify-between font-bold py-2">
                <b>Total</b>
                <b>₹{getTotalCartAmmount() === 0 ? 0 : getTotalCartAmmount() + 100}</b>
              </div>
            </div>
            <button  className="w-full mt-6 py-3 bg-rose-500 text-white font-semibold rounded cursor-pointer hover:bg-rose-600">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

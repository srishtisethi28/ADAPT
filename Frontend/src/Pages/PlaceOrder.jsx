import React, { useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";

export const PlaceOrder = ({ showFooter, setShowFooter }) => {
  const { getTotalCartAmmount } = useContext(StoreContext);

  useEffect(() => {
    setShowFooter(true);
  }, [showFooter]);

  return (
    <form>
      <div className="flex flex-col md:flex-row justify-between gap-12 mt-36 w-[80%] mx-auto text-white">
        {/* Left Section - Delivery Information */}
        <div className="w-full max-w-[500px]">
          <p className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-rose-400 to-purple-500 mb-8 drop-shadow-lg animate-pulse mt-8">Delivery Information</p>
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 bg-white border border-gray-600 rounded text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 bg-white border border-gray-600 rounded text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-2 bg-white border border-gray-600 rounded mb-4 text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <input
            type="text"
            placeholder="Street"
            className="w-full p-2 bg-white border border-gray-600 rounded mb-4 text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="City"
              className="w-full p-2 bg-white border border-gray-600 rounded text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <input
              type="text"
              placeholder="State"
              className="w-full p-2 bg-white border border-gray-600 rounded text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Zip Code"
              className="w-full p-2 bg-white border border-gray-600 rounded text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full p-2 bg-white border border-gray-600 rounded text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-2 bg-white border border-gray-600 rounded text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        {/* Right Section - Cart Total */}
        <div className="w-full max-w-[500px] mt-28">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-700 text-gray-800">
            <h2 className="text-xl font-semibold mb-4 bg-transparent">Cart Total</h2>
            <div className="text-gray-800 bg-transparent">
              <div className="flex justify-between py-2 bg-transparent">
                <p className="bg-transparent">Subtotal</p>
                <p className="bg-transparent">₹{getTotalCartAmmount()}</p>
              </div>
              <hr className="border-gray-700 bg-transparent" />
              <div className="flex justify-between py-2 bg-transparent">
                <p className="bg-transparent">Delivery Fee</p>
                <p className="bg-transparent">₹{getTotalCartAmmount() === 0 ? 0 : 100}</p>
              </div>
              <hr className="border-gray-700 bg-transparent" />
              <div className="flex justify-between font-bold py-2 text-white bg-transparent">
                <b className="bg-transparent text-gray-800">Total</b>
                <b className="bg-transparent text-gray-800">₹{getTotalCartAmmount() === 0 ? 0 : getTotalCartAmmount() + 100}</b>
              </div>
            </div>
            <button className="w-full mt-6 py-3 bg-rose-600 text-white font-semibold rounded hover:bg-rose-700 transition-colors ">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

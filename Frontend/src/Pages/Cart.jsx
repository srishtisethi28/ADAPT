import React, { useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import bg1 from "../assets/bg1.jpg"; 

export const Cart = ({ showFooter, setShowFooter }) => {
  const {
    cartItems,
    removeFromCart,
    addToCart,
    product_list,
    main_shop,
    getTotalCartAmmount,
    url,
  } = useContext(StoreContext);

  const navigate = useNavigate();
  const totalAmount = getTotalCartAmmount();

  useEffect(() => {
    setShowFooter(true);
  }, [showFooter, setShowFooter]);

  return (
    <div className="mt-24 text-center w-[80%] mx-auto ">
      {totalAmount === 0 ? (
        <div className="flex flex-col items-center justify-center gap-5  bg-cover bg-center bg-no-repeat h-80 -mb-28 "
        style={{ backgroundImage: `url(${bg1})` }}>
          <h2 className="text-2xl font-semibold text-white">Your Cart is Empty</h2>
          <button
            onClick={() => {
              navigate("/shop");
              setTimeout(() => {
                const exploreSection = document.getElementById("explore-items");
                if (exploreSection) {
                  exploreSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="bg-rose-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-rose-600 transition-all"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${bg1})` }}>
          {/* Header Row */}
          <div className="text-center text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-rose-400 to-purple-500 mb-16 drop-shadow-lg animate-pulse   pt-28">🛍️ My Cart</div>
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.5fr] justify-center items-center text-center text-white font-bold text-xl mb-4 bg-transparent">
            <p className="bg-transparent">Item</p>
            <p className="bg-transparent">Title</p>
            <p className="bg-transparent">Price</p>
            <p className="bg-transparent">Quantity</p>
            <p className="bg-transparent">Total</p>
            <p className="bg-transparent">Remove</p>
            <p className="bg-transparent">Add</p>
          </div>

          {/* Product List Items */}
          {product_list.map(
            (item, index) =>
              cartItems[item._id] > 0 && (
                <div key={`product-${index}`} className="bg-transparent">
                  <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.5fr] items-center justify-center text-center text-md font-semibold text-white bg-transparent">
                    <img
                      className="p-4 w-32 h-32 rounded-full bg-transparent"
                      src={`${url}/images/${item.image}`}
                      alt="product"
                    />
                    <p className="text-wrap w-[60%] mx-auto bg-transparent">{item.name}</p>
                    <p className="bg-transparent">₹{item.price}</p>
                    <p className="bg-transparent">{cartItems[item._id]}</p>
                    <p className="bg-transparent">₹{item.price * cartItems[item._id]}</p>
                    <div className="flex justify-center bg-transparent">
                      <img
                        className="cursor-pointer w-6 h-6"
                        onClick={() => removeFromCart(item._id)}
                        src={assets.remove_icon_red}
                        alt="Remove"
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="cursor-pointer w-6 h-6"
                        onClick={() => addToCart(item._id)}
                        src={assets.add_icon_green}
                        alt="Add"
                      />
                    </div>
                  </div>
                  <hr />
                </div>
              )
          )}

          {/* Main Shop Items */}
          {main_shop.map(
            (item, index) =>
              cartItems[item._id] > 0 && (
                <div key={`shop-${index}`} className="bg-transparent">
                  <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr_0.5fr] items-center justify-center text-center text-md font-semibold text-white bg-transparent">
                    <img
                      className="p-4 w-32 h-32 rounded-full bg-transparent"
                      src={`${url}/shopImages/${item.image}`}
                      alt="shop"
                    />
                    <p className="text-wrap w-[60%] mx-auto bg-transparent">{item.name}</p>
                    <p className="bg-transparent">₹{item.price}</p>
                    <p className="bg-transparent">{cartItems[item._id]}</p>
                    <p className="bg-transparent">₹{item.price * cartItems[item._id]}</p>
                    <div className="flex justify-center bg-transparent">
                      <img
                        className="cursor-pointer w-6 h-6 bg-transparent"
                        onClick={() => removeFromCart(item._id)}
                        src={assets.remove_icon_red}
                        alt="Remove"
                      />
                    </div>
                    <div className="flex justify-center bg-transparent">
                      <img
                        className="cursor-pointer w-6 h-6 bg-transparent"
                        onClick={() => addToCart(item._id)}
                        src={assets.add_icon_green}
                        alt="Add"
                      />
                    </div>
                  </div>
                  <hr />
                </div>
              )
          )}

          {/* Cart Summary */}
          <div className="mt-20 flex flex-col-reverse md:flex-row justify-between gap-[max(12vw,20px)]">
            {/* Cart Total */}
            <div className="flex-1 flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-white">Cart Total</h2>
              <div>
                <div className="flex justify-between text-white">
                  <p>Subtotal</p>
                  <p>₹{totalAmount}</p>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-white">
                  <p>Delivery Fee</p>
                  <p>₹{totalAmount === 0 ? 0 : 100}</p>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-bold text-white">
                  <b>Total</b>
                  <b>₹{totalAmount === 0 ? 0 : totalAmount + 100}</b>
                </div>
              </div>
              <button
                onClick={() => navigate("/order")}
                className="border-none text-white bg-rose-500 w-[max(15vw,200px)] py-3 rounded cursor-pointer"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>

            {/* Promo Code Section */}
            <div className="flex-1">
              <p className="text-white">
                If you have any promo code, enter it here
              </p>
              <div className="mt-2 flex justify-between items-center bg-gray-200 rounded">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="bg-transparent border-none outline-none pl-3 flex-1"
                />
                <button className="w-[max(10vw,150px)] py-3 bg-rose-500 text-white border-none rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

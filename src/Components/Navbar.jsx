import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { getTotalCartAmmount } = useContext(StoreContext);

  useEffect(() => {
    const user = localStorage.getItem("userData");
    setIsAuthenticated(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    alert(`Logout Successful!`);
    window.location.reload(); 
  };

  return (
    <div className="flex justify-between items-center h-24 fixed top-0 left-1/2 transform -translate-x-1/2 w-full bg-white shadow-md shadow-gray-100 z-50 px-6 pr-8">
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-38 h-20 md:w-42 md:h-24 items-center cursor-pointer"
        />
      </Link>

      {/* Menu Items */}
      <div className="menu-items hidden sm:block">
        <ul className="flex md:gap-14 gap-12 font-medium text-[16px] md:text-[20px]">
          {["home", "shop", "tools", "contact"].map((item) => (
            <Link
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              onClick={() => setMenu(item)}
              className={`cursor-pointer pb-2 transition duration-200 ${
                menu === item
                  ? "border-b-2 border-rose-500 text-rose-600"
                  : "hover:text-rose-500 transition-all duration-400 ease-in"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </ul>
      </div>

      {/* Right Menu */}
      <div className="menu-right flex md:gap-x-10 gap-x-8 items-center">
        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.cart}
              className="md:h-7 md:w-7 h-6 w-6 mr-2 cursor-pointer"
              alt="Basket"
            />
          </Link>
          <div
            className={
              getTotalCartAmmount() === 0
                ? ""
                : "dot absolute h-[10px] w-[10px] bg-rose-600 rounded-full top-[-8px] right-[-0.5px]"
            }
          ></div>
        </div>
        
        {/* Login/Logout Button */}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="border-2 border-rose-600 md:px-3 md:py-2 px-2 py-1 rounded-3xl text-rose-600 font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300 ease-in-out text-[16px] md:text-[18px]"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="border-2 border-rose-600 md:px-3 md:py-2 px-2 py-1 rounded-3xl text-rose-600 font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300 ease-in-out text-[16px] md:text-[18px]"
          >
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

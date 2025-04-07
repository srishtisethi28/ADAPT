import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center h-24 fixed top-0 left-1/2 transform -translate-x-1/2 w-full  z-50 px-6 pr-8 bg-gradient-to-b from-black to-zinc-900">

      <Link to="/" className="bg-transparent">
        <h3 className="text-3xl text-white font-cherry font-bold tracking-widest bg-transparent">
          ADAPT
        </h3>
      </Link>

      {/* Menu Items */}
      <div className="menu-items hidden sm:block bg-transparent">
        <ul className="flex md:gap-14 gap-12 font-medium text-[16px] md:text-[20px] text-white bg-transparent">
          {["home", "shop", "tools", "contact"].map((item) => (
            <Link
              key={item}
              to={item === "home" ? "/" : `/${item}`}
              onClick={() => setMenu(item)}
              className={`cursor-pointer pb-2 transition duration-200 bg-transparent ${
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
      <div className="menu-right flex md:gap-x-10 gap-x-8 items-center bg-transparent">
        <div className="relative bg-transparent ">
          <Link to="/cart" >
            <PiShoppingCartSimpleFill color="white" className="bg-transparent" size={30} />
          </Link>
          <div
            className={
              getTotalCartAmmount() === 0
                ? ""
                : "dot absolute h-[10px] w-[10px] bg-rose-600 rounded-full top-[-8px] right-[-0.5px]"
            }
          ></div>
        </div>

        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition"
          >
            Sign In
          </button>
        ) : (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-10 h-10 cursor-pointer"
            />

            <ul className="absolute right-0 hidden group-hover:flex flex-col gap-2 w-28 bg-rose-200 p-4 rounded-md border border-rose-500 outline outline-2 outline-white list-none shadow-md bg-transparent">
              <li className="flex items-center gap-2 cursor-pointer text-white hover:text-rose-500 bg-transparent">
                <img src={assets.bag_icon} alt="Orders" className="w-5 bg-transparent" />
                <Link to='/cart'>
                
                <p className="bg-transparent ">Orders</p>
                </Link>
              </li>
              <hr className="border-t border-rose-400 bg-transparent" />
              <li
                onClick={logout}
                className="flex items-center gap-2 cursor-pointer text-white hover:text-rose-600 bg-transparent"
              >
                <img src={assets.logout_icon} alt="Logout" className="w-5 bg-transparent" />
                <p className="bg-transparent">Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

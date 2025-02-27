import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert(`${currState} Successful!`);
    setShowLogin(false);
    window.location.reload(); 
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[min(95%,400px)] flex flex-col gap-6 p-8 rounded-lg shadow-lg animate-fadeIn"
      >
        {/* Title and Close Button */}
        <div className="flex justify-between items-center text-black">
          <h2 className="text-xl font-semibold">{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            className="w-5 cursor-pointer"
            alt="Close"
          />
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-rose-500"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-rose-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-rose-500"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-rose-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-rose-600 transition duration-300">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <input type="checkbox" required className="mt-1" />
          <p>
            By continuing, I agree to the{" "}
            <span className="text-rose-500 font-medium cursor-pointer">
              terms of use
            </span>{" "}
            &{" "}
            <span className="text-rose-500 font-medium cursor-pointer">
              privacy policy
            </span>
            .
          </p>
        </div>

        {/* Toggle Between Login and Sign Up */}
        <p className="text-sm text-gray-600">
          {currState === "Login" ? (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className="text-rose-500 font-medium cursor-pointer"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-rose-500 font-medium cursor-pointer"
              >
                Login here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;

import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState('Login');
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = currState === 'Login' ? `${url}/api/user/login` : `${url}/api/user/register`;
    
    try {
      const response = await axios.post(newUrl, data);
      if (response) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert('Error occurred. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <form
        onSubmit={onLogin}
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm flex flex-col gap-5 animate-fadeIn"
      >
        <div className="flex justify-between items-center text-black bg-transparent">
          <h2 className="text-lg font-semibold bg-transparent">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-4 cursor-pointer bg-transparent"
          />
        </div>
        
        <div className="flex flex-col gap-4 bg-transparent">
          {currState === 'Sign Up' && (
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={data.name}
              onChange={onChangeHandler}
              required
              className="border border-gray-300 p-2 rounded-md outline-none bg-transparent"
            />
          )}
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            required
            className="border border-gray-300 p-2 rounded-md outline-none bg-transparent"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={onChangeHandler}
            required
            className="border border-gray-300 p-2 rounded-md outline-none bg-transparent"
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white py-2 rounded-md text-sm hover:bg-red-600 transition"
        >
          {currState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className="flex items-start gap-2 text-sm text-gray-600 bg-transparent">
          <input type="checkbox" required className="mt-1" />
          <p className='bg-transparent'>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>

        <p className="text-center text-sm bg-transparent">
          {currState === 'Login' ? (
            <>Create a new account? <span onClick={() => setCurrState('Sign Up')} className="text-red-500 font-medium cursor-pointer bg-transparent">Click here</span></>
          ) : (
            <>Already have an account? <span onClick={() => setCurrState('Login')} className="text-red-500 font-medium cursor-pointer bg-transparent">Login here</span></>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;

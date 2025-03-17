import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='footer mt-28 p-10 text-gray-300  z-10  border-t-2 border-t-slate-700 ' id='footer'>
      <div className="footer-content flex flex-col md:flex-row justify-between p-6 gap-6 md:gap-10 ">
        <div className="footer-content-left md:w-2/5">
          <h2 className='text-rose-500 font-bold text-3xl'>ADAPT</h2>
          <p className='text-lg'>
          Making life easier with assistive technology. At Adapt, we offer a range of disability aids and tools like speech-to-text, text-to-speech, and mobility devices. Our goal is to provide accessible and user-friendly solutions for everyone. Explore our products and find the support you need.
          </p>
          <div className="footer-social-icons flex gap-2 mt-2">
            <img className='w-8 h-8' src={assets.facebook_icon} alt="Facebook" />
            <img className='w-8 h-8' src={assets.linkedin_icon} alt="LinkedIn" />
            <img className='w-8 h-8' src={assets.twitter_icon} alt="Twitter" />
          </div>
        </div>

        <div className="footer-content-right">
          <h2 className='text-gray-200 font-semibold text-xl mb-2'>GET IN TOUCH</h2>
          <ul className='text-lg'>
            <li>7556663874</li>
            <li>contact@adapt.com</li>
          </ul>
        </div>

        <div className="footer-content-center">
          <h2 className='text-gray-200 font-semibold text-xl mb-2'>COMPANY</h2>
          <ul className='text-lg'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <hr className='mb-2 border-gray-500'/>
      <p className="footer-copyright text-center text-lg">Copyright 2025 &copy; Adapt.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;

import React from 'react';

const ContactComponent = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center px-6 py-12 -mb-28">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/black-white-portrait-athlete-competing-paralympics-championship-games_23-2151492682.jpg?t=st=1744045766~exp=1744049366~hmac=b50ba47b46484acfc9b15e0d9bf31f243f81517dd36e22b9d4d75d363520df0e&w=1380')] bg-cover bg-center brightness-50 z-0"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-xl text-center text-white border border-white/20">
        <h2 className="text-4xl font-bold mb-4 bg-transparent">Need Help or Have Questions?</h2>
        <p className="text-zinc-200 mb-6 bg-transparent">
          We're here to assist you. Get in touch with us for support, feedback, or any queries.
        </p>
        <a
          href="/contact" // Update this if needed
          className="bg-rose-600 hover:bg-white hover:text-rose-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center gap-2 shadow-md group w-32 mx-auto"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ContactComponent;

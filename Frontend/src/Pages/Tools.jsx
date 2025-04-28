import React from 'react';
import TextToSpeech from '../Components/TextToSpeech';
import SpeechToText from '../Components/SpeechToText';
import ScreenMagnifier from '../Components/ScreenMagnifier';
import bg1 from "../assets/bg1.jpg"; 

const Tools = () => {
  return (
    <div 
      className="min-h-screen py-20 px-6 md:px-10 lg:px-20 mt-24 -mb-28 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <h1 className="text-center text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-rose-400 to-purple-500 mb-24 drop-shadow-lg animate-pulse mt-8">
        🧠 Assistive Tools
      </h1>

      <div className="grid grid-cols-2 gap-20 max-w-7xl mx-auto bg-transparent">
        <TextToSpeech />
        <SpeechToText />
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <ScreenMagnifier />
      </div>
    </div>
  );
};

export default Tools;

import React from 'react';
import TextToSpeech from '../Components/TextToSpeech';
import SpeechToText from '../Components/SpeechToText';
import ScreenMagnifier from '../Components/ScreenMagnifier';

const Tools = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-950 py-20 px-6 md:px-10 lg:px-20 mt-24 -mb-28">
      <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-rose-400 to-purple-500 mb-16 drop-shadow-lg animate-pulse ">
        🧠 AI Voice Tools
      </h1>

      <div className="grid gap-20 max-w-7xl mx-auto bg-transparent w-[50%] ">
        <TextToSpeech />
        <SpeechToText />
        <ScreenMagnifier />
      </div>
    </div>
  );
};

export default Tools;
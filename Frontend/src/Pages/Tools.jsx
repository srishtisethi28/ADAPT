import React from 'react';
import TextToSpeech from '../Components/TextToSpeech';
import SpeechToText from '../Components/SpeechToText';
import ScreenMagnifier from '../Components/ScreenMagnifier';

const Tools = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-950 py-20 px-6 md:px-10 lg:px-20 mt-24 -mb-28 bg-[url('https://img.freepik.com/free-vector/background-abstract-line-digital-gradient-luxury_483537-2367.jpg?t=st=1744037307~exp=1744040907~hmac=876540d7435c4404398b8daeb8c77d3fe541264bb284e0e860276d33061fd567&w=1380')] bg-center bg-no-repeat bg-cover">
      <h1 className="text-center text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-rose-400 to-purple-500 mb-24 drop-shadow-lg animate-pulse mt-8 ">
        🧠 Assistive Tools
      </h1>

      <div>
        
      </div>
      <div className="grid grid-cols-2 gap-20 max-w-7xl mx-auto bg-transparent ">
        <TextToSpeech />
        <SpeechToText />
      </div>
      <div className='max-w-7xl mx-auto mt-12'>

        <ScreenMagnifier  />
      </div>
    </div>
  );
};

export default Tools;
import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      utterance.lang = 'en-US';

      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support speech synthesis.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto mt-32 bg-neutral-900 shadow-md rounded-xl text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Text to Speech</h2>
      <textarea
        rows="5"
        className="w-full bg-neutral-800 border border-gray-600 rounded-md p-3 focus:outline-none focus:ring focus:border-rose-500 text-white placeholder-gray-400"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={speakText}
        className="mt-4 px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition"
      >
        Speak
      </button>
    </div>
  );
};

export default TextToSpeech;

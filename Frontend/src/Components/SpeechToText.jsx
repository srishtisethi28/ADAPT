import React, { useState } from 'react';

const SpeechToText = () => {
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);

  const handleStart = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
      setText("Listening...");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.onerror = (event) => {
      setText(`Error: ${event.error}`);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div className="p-8 bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white rounded-3xl shadow-lg hover:shadow-rose-500/30 transition duration-300 ease-in-out">
      <h2 className="text-3xl font-bold mb-6 text-center text-rose-400 rounded-xl bg-transparent">🎤 Speech to Text</h2>
      <button
        onClick={handleStart}
        disabled={listening}
        className={`w-full py-3 rounded-xl font-semibold text-white transition duration-300 shadow-xl ${
          listening
            ? 'bg-gradient-to-r from-zinc-700 to-zinc-800 cursor-not-allowed'
            : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:brightness-110 hover:scale-[1.02]'
        }`}
      >
        {listening ? "🎧 Listening..." : "🎙️ Start Listening"}
      </button>
      <div className="mt-6 border border-zinc-700 bg-zinc-900 text-gray-200 rounded-xl p-4 min-h-[120px] text-sm whitespace-pre-wrap">
        {text || "Your transcribed text will appear here..."}
      </div>
    </div>
  );
};

export default SpeechToText;
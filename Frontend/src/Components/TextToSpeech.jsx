import React, { useState } from "react";
import axios from "axios";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);

  const handleSpeak = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/speak",
        { text },
        { responseType: "blob" }
      );

      if (audioUrl) URL.revokeObjectURL(audioUrl);

      const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
      const newUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(newUrl);
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white rounded-3xl shadow-lg hover:shadow-rose-500/30 transition duration-300 ease-in-out">
      <h2 className="text-3xl font-bold mb-6 text-center text-rose-400 rounded-xl bg-transparent">🗨️ Text to Speech</h2>
      <textarea
        rows="5"
        className="w-full border border-zinc-700 bg-zinc-900 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
        placeholder="Type something to convert into speech..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={handleSpeak}
        className="w-full mt-5 py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:brightness-110 hover:scale-[1.02] rounded-xl font-semibold text-white shadow-lg transition-transform duration-300"
      >
        🔊 Convert & Play
      </button>

      {audioUrl && (
        <audio key={audioUrl} controls autoPlay className="mt-6 w-full">
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default TextToSpeech;

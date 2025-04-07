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

      // Revoke old blob URL to avoid memory leaks and reload issues
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }

      const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
      const newUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(newUrl);
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto mt-28 bg-black text-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Text to Speech</h2>
      <textarea
        rows="5"
        className="w-full border border-gray-300 bg-black rounded-md p-3 text-white focus:outline-none focus:ring focus:border-rose-400"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={handleSpeak}
        className="mt-4 px-6 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition"
      >
        Convert & Play
      </button>

      {audioUrl && (
        <audio key={audioUrl} controls autoPlay className="mt-4 w-full">
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default TextToSpeech;

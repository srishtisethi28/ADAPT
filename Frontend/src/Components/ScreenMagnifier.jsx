import React, { useState } from "react";

const ScreenMagnifier = () => {
  const [zoom, setZoom] = useState(1);
  const [content, setContent] = useState("");

  const handleZoom = (e) => {
    setZoom(parseFloat(e.target.value));
  };

  return (
    <div className="p-8 bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white rounded-3xl shadow-lg hover:shadow-rose-500/30 transition duration-300 ease-in-out">
      <h2 className="text-3xl font-bold mb-6 text-center text-rose-400 bg-transparent">🔍 Screen Magnifier</h2>

      <div className="mb-6 bg-transparent">
        <label className="block text-sm mb-2 text-zinc-300 bg-transparent">Write your text below:</label>
        <textarea
          rows="5"
          className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
          placeholder="Type something here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center gap-4 bg-transparent">
        <label className="text-sm text-zinc-300 bg-transparent">Zoom: {Math.round(zoom * 100)}%</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={zoom}
          onChange={handleZoom}
          className="w-full accent-pink-500"
        />

        <div
          className="mt-6 border border-rose-500 bg-zinc-900 text-gray-200 rounded-xl p-6 text-center transition-transform duration-300 shadow-md ring-1 ring-indigo-800/50 backdrop-blur-md bg-transparent"
          style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
        >
          <p className="text-lg break-words whitespace-pre-wrap font-medium tracking-wide bg-transparent">
            {content || "Your magnified text will appear here..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScreenMagnifier;

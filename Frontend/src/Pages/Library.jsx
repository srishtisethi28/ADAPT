// src/pages/ResourceLibrary.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bg1 from "../assets/bg1.jpg"; 

const Library = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/resource");
        setResources(res.data);
      } catch (error) {
        console.error("Failed to fetch resources", error);
      }
    };
    fetchResources();
  }, []);

  return (
    <div
      className="min-h-screen py-20 px-6 md:px-10 lg:px-20"
      style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-center text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-rose-400 to-purple-500 mb-24 animate-pulse mt-36">
        📚 Resource Library
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {resources.map((resource) => (
          <div
            key={resource._id}
            className="bg-white bg-opacity-90 shadow-lg rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex flex-col justify-between"
          >
            <h2 className="text-xl font-bold mb-4 text-indigo-600 bg-transparent">{resource.title}</h2>

            {/* For Videos */}
            {resource.type === "video" ? (
              <div className="relative overflow-hidden rounded-lg mb-4" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={resource.link.replace("watch?v=", "embed/")}
                  title={resource.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              // For Articles
              resource.thumbnail && (
                <img
                  src={resource.thumbnail}
                  alt="Article thumbnail"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
              )
            )}

            <p className="text-gray-700 text-sm mb-4 bg-transparent">
              {resource.description?.substring(0, 100)}...
            </p>

            {/* Button - only for article */}
            {resource.type === "article" && (
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-to-r from-indigo-500 via-rose-500 to-purple-500 text-white py-2 rounded-lg font-semibold transition-all"
              >
                Read More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/portfolio");
      const updatedPortfolio = response.data.portfolio.map((item) => ({
        ...item,
        serviceColorClass: getServiceColorClass(item.service),
        isVideoVisible: false,
      }));
      setPortfolio(updatedPortfolio);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const colorServiceMapping = {
    "custom-software-development": "bg-[#dc2626]",
    "mobile-app-development": "bg-[#fbbf24]",
    "web-development": "bg-[#ea580c]",
    "game-development": "bg-[#84cc16]",
    "software-integration-and-migration": "bg-[#2563eb]",
    "software-maintenance-and-support": "bg-[#9333ea]",
  };

  const getServiceColorClass = (service) => {
    return colorServiceMapping[service] || "bg-[#a1a1aa]";
  };

  const handleVideoToggle = (id) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.map((item) =>
        item._id === id
          ? { ...item, isVideoVisible: !item.isVideoVisible }
          : { ...item, isVideoVisible: false }
      )
    );
  };

  const toTitleCase = (str) => {
    if (typeof str !== "string") {
      return str;
    }
    const words = str.split("-");
    const titleCasedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return titleCasedWords.join(" ");
  };

  return (
    <div>
      <div className="portfolio-header-box py-16 lg:py-28 relative text-white">
        <div className="header-overlay"></div>
        <h2
          data-aos="flip-left"
          className="text-2xl md:text-4xl font-semibold text-center relative z-[1] header-text mb-2"
        >
          Portfolio
        </h2>
        <p
          data-aos="fade-right"
          className="text-center font-sans text-lg md:text-2xl font-medium"
        >
          Focusing on seamless functionality and visually
        </p>
        <p
          data-aos="fade-left"
          className="text-center font-sans text-lg md:text-2xl font-medium"
        >
          appealing designs for every project.
        </p>
      </div>
      <div className="container mx-auto">
        <div
          data-aos="zoom-in"
          className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12  md:px-0 py-24"
        >
          {portfolio.map((item) => (
            <div
              key={item._id}
              className="border-2 border-solid border-gray-100 hover:border-[#CEFF05] group bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <div className="relative">
                {!item.isVideoVisible ? (
                  <div
                    className="cursor-pointer h-[315px] relative overflow-hidden group-hover:opacity-90"
                    onClick={() => handleVideoToggle(item._id)}
                  >
                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      alt={item.title}
                      className="w-full h-[315px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-play text-4xl text-white animate-pulse"></i>
                    </div>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="315"
                    src={item.url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="rounded-t-lg"
                  ></iframe>
                )}
              </div>
              <div className="p-6 bg-gray-900 group-hover:bg-gray-800 transition-colors duration-500">
                <span className="px-3 py-1 text-center font-medium uppercase text-xs bg-[#b0d1f1] border border-[#C6E2F8] rounded-full text-[#0d6ac0] mb-4 inline-block">
                  {toTitleCase(item.service)}
                </span>
                <div className="text-lg md:text-xl font-medium my-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {item.title}
                </div>
                <div className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300 line-clamp-4">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

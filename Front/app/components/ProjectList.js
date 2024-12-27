"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Blogs({ service }) {
  const [portfolios, setPortfolios] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/portfolio");
      const filterdPortfolio = response.data.portfolio.filter((item) => {
        return item.service == service;
      });
      setPortfolios(filterdPortfolio);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {portfolios.length && (
        <section className="py-16 lg:py-20 text-gray-300">
          <div className="mb-12">
            <div
              data-aos="flip-right"
              className="text-center mb-4 font-sans text-3xl md:text-5xl font-bold"
            >
              Our Project
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="mx-auto grid max-w-screen-lg xl:max-w-screen-xl grid-cols-1 px-8 lg:px-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10"
          >
            {portfolios.map((item) => {
              return (
                <article
                  key={item._id}
                  className="group h-full overflow-hidden rounded-lg border-2 border-solid border-gray-100 hover:border-[#CEFF05] shadow-lg"
                >
                  <img
                    className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
                    src={`http://localhost:5000/uploads/${item.image}`}
                    alt="Our Project"
                  />
                  <div className="py-2 px-6">
                    <div className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-300 group-hover:text-[#CEFF05]">
                      {item.title}
                    </div>
                    <p className="line-clamp-4 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

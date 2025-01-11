"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function Blogs() {
  const serverHost = process.env.SERVER_HOST;
  const [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${serverHost}/blog`);
      setBlogs(response.data.blogs);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="blog-header-box py-28 relative text-white">
        <div className="header-overlay"></div>
        <h2 className="text-2xl md:text-4xl font-semibold text-center relative z-[1] header-text">
          Blogs
        </h2>
        <p
          data-aos="fade-up"
          className="text-center font-sans text-lg md:text-xl font-medium px-4 mt-4"
        >
          Explore our blog for insightful articles, expert tips,{" "}
          <br className="hidden md:block" /> and the latest updates to inspire
          and empower your journey.
        </p>
      </div>
      <div className="container mx-auto px-6">
        <div
          data-aos="zoom-in"
          className="py-12 lg:py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10"
        >
          {blogs.map((item) => {
            const date = new Date(item.date);
            const options = { year: "numeric", month: "short", day: "numeric" };
            const formattedDate = date.toLocaleDateString("en-US", options);
            const description = JSON.parse(item.description);
            return (
              <article
                key={item._id}
                className="group h-full overflow-hidden rounded-lg border-2 border-solid border-gray-100 hover:border-[#CEFF05] shadow-lg"
              >
                <Link href={`/blogs/${item._id}`}>
                  <div className="flex flex-col">
                    <div className="pb-image-wrap">
                      <img
                        className="transition duration-500 ease-in-out group-hover:scale-105"
                        src={`${serverHost}/uploads/${item.image}`}
                        alt="blog"
                      />
                    </div>
                    <div className="py-2 px-6">
                      <div className="title-font my-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-300 group-hover:text-[#CEFF05]">
                        {item.title}
                      </div>
                      <p className="line-clamp-4 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-400">
                        {description[0].children[0].text}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4 mt-auto">
                      <div className="flex flex-wrap text-sm text-gray-400">
                        <span className="mr-1">{formattedDate}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

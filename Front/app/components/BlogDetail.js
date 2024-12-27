"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BlogDetail({ id }) {
  const [blog, setBlog] = useState([]);
  const [description, setDescription] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/blog/${id}`);
      setBlog(response.data.blog);
      setDescription(JSON.parse(response.data.blog.description));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col  items-center p-6 md:p-12">
        <img
          src={`http://localhost:5000/uploads/${blog.image}`}
          alt="A black car parked in a modern garage with green plants in the foreground"
          className="rounded-lg md:w-9/12 mb-8"
          data-aos="zoom-in"
        />
        <div className="text-gray-300">
          <div
            data-aos="zoom-in"
            className="text-2xl md:text-3xl font-semibold mb-4 text-white"
          >
            {blog.title}
          </div>
          {description.map((item) => (
            <div key={item.id}>
              <p
                data-aos="fade-right"
                className="text-xl md:text-2xl mb-3 text-white"
              >
                {item.text}
              </p>
              <div data-aos="fade-left" className="mb-5">
                {item.children.map((child) => (
                  <p className="mb-2 text-base text-gray-300" key={child.id}>
                    {child.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

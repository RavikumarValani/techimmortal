"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BlogDetail({ id }) {
  const serverHost = process.env.SERVER_HOST;
  const [blog, setBlog] = useState({});
  const [description, setDescription] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${serverHost}/blog/${id}`);
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
    <>
      {Object.keys(blog).length > 0&& (
        <div className="container mx-auto px-6">
          <div className="flex flex-col  items-center py-12 lg:py-20">
          <div className="blog-detail-image-wrap">
            <img
              src={`${serverHost}/uploads/${blog.image}`}
              alt={blog.title}
              className=""
              data-aos="zoom-in"
            />
          </div>
            <div className="text-gray-300 mt-6">
              <div
                data-aos="zoom-in"
                className="text-2xl md:text-3xl font-semibold mb-4 text-white"
              >
                {blog.title}
              </div>
              {description.map((item) => (
                <div key={item.id}>
                  <p
                    data-aos="fade-down"
                    className="text-xl md:text-2xl mb-3 text-white"
                  >
                    {item.text}
                  </p>
                  <div data-aos="fade-up" className="mb-5">
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
      )}
    </>
  );
}

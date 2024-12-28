import React, { useState, useEffect } from "react";
import axios from "axios";

import TableDropdown from "@/components/Dropdowns/TableDropdown.js";
import Admin from "@/layouts/Admin.js";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_HOST}/blog`);
      setBlogs(response.data.blogs);
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="w-full mb-12 px-4">
        <div
          className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-white"
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className="font-semibold text-lg text-white"
                >
                  Blogs
                  <span class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    Total: {blogs.length}
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Title
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Author
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Image
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Date
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={index} className="hover:bg-gray-700 transition duration-150">
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      <span
                        className={
                          "ml-3 font-bold text-white"
                        }
                      >
                        {blog.title}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {blog.author}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex">
                        <img
                          src={`${process.env.SERVER_HOST}/uploads/${blog.image}`}
                          alt="..."
                          className="w-20 h-10 border-2 border-blueGray-50 shadow"
                        ></img>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {blog.date}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <TableDropdown
                        editurl={`/admin/blogs/new/${blog._id}`}
                        deleteurl={`${process.env.SERVER_HOST}/blog/${blog._id}`}
                        gridurl="/admin/manageBlogs"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

Blogs.layout = Admin;
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

const email = 'contact@immortalgroups.com';

const Career = () => {
  const serverHost = process.env.SERVER_HOST;
  const [career, setCareer] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${serverHost}/career`);
      setCareer(response.data.careers);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="my-5 flex flex-col gap-12 md:px-10 py-24">
      {career.map((item) => {
        const responsibilities = JSON.parse(item.responsibility);
        return (
          <div key={item._id} className="group relative" data-aos="zoom-in">
            <div className="absolute -inset-px bg-gradient-to-r from-emerald-800 to-lime-800 rounded-lg blur opacity-25 group-hover:opacity-30 transition duration-1000" />
            <div className="relative h-full bg-slate-900 border border-slate-800 rounded-lg p-8 transition-all duration-300 text-white">
              <div className="items-center gap-4 mb-6">
                <h2 className="text-white text-xl md:text-3xl font-semibold">
                  {item.title}
                </h2>
                <p className="mt-2 text-md md:text-xl font-semibold text-gray-400">
                  Experience: {item.experience} | Location: {item.location} | Salary: {item.salary}
                </p>
              </div>
              <ul className="list-disc list-inside mt-2">
                {responsibilities.slice(0, 3).map((responsibility) => (
                  <li key={responsibility.id}>{responsibility.text}</li>
                ))}
              </ul>
              <p className="mt-2">
                If you are interested in joining us, share your resume at{' '}
                <a href={`mailto:${email}`} className="text-[#CEFF05]">{email}</a>.
              </p>
              <Link
                href={`/career/${item._id}`}
                className="bg-[#CEFF05] text-black px-3 py-2 md:px-4 md:py-2 mt-4 inline-block rounded transform transition-all duration-500 ease-in-out hover:bg-black hover:text-white text-xs md:text-sm font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Career;

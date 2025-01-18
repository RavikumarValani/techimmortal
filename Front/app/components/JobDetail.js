"use client";
import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import axios from "axios";
import UploadCv from "./UploadCv";

export default function JobDetail({ id }) {
  const serverHost = process.env.SERVER_HOST;
  const [showForm, setShowForm] = useState(false);
  const handleForm = () => setShowForm(!showForm);
  const [job, setJob] = useState([]);
  const [responsibilities, setResponsibilities] = useState([]);
  const [skills, setSkills] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${serverHost}/career/${id}`);
      setJob(response.data.career);
      setResponsibilities(JSON.parse(response.data.career.responsibility));
      setSkills(JSON.parse(response.data.career.skill));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const email = "contact@immortalgroups.com";

  return (
    <div className="container mx-auto px-6">
      <div className="items-center py-12">
        <div className="text-gray-300 mt-6">
          <div data-aos="fade-up">
            <div className="text-2xl md:text-3xl font-semibold mb-4 text-white">
              {job.title}
            </div>
            <p className="mt-2 text-sm md:text-lg text-gray-400">
              <span className="font-semibold">Location: </span>{job.location}
            </p>
            <p className="mt-2 text-sm md:text-lg text-gray-400">
              <span className="font-semibold">Experience: </span>{job.experience}
            </p>
          </div>
          <div className="mt-8" data-aos="fade-up" >
            <p className="text-xl md:text-2xl mb-2 text-white">
              About Us:
            </p>
            <div className="mb-5">
              <p className="mb-2 text-base text-gray-300">
                {job.about}
              </p>
            </div>
          </div>

          <div className="mt-8" data-aos="fade-up">
            <p className="text-xl md:text-2xl mb-2 text-white">
              Key Responsibilities:
            </p>
            <div className="mb-5">
              <ul className="list-disc list-inside mt-2">
                {responsibilities.map((responsibility) => (
                  <li key={responsibility.id}>{responsibility.text}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8" data-aos="fade-up">
            <p className="text-xl md:text-2xl mb-2 text-white">
              Key Skills:
            </p>
            <div className="mb-5">
              <ul className="list-disc list-inside mt-2">
                {skills.map((skill) => (
                  <li key={skill.id}>{skill.text}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8" data-aos="fade-up">
            <p>
              If you're a driven B2B tech sales professional, we want you on our team! Apply at
              <a href={`mailto:${email}`} className="text-[#CEFF05]"> {email}</a>.
            </p>
            <button
              onClick={handleForm}
              className="bg-[#CEFF05] text-black px-4 py-3 md:px-5 md:py-3 mt-4 inline-block rounded transform transition-all duration-500 ease-in-out hover:bg-black hover:text-white text-sm md:text-md font-semibold"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <Dialog open={showForm} onClose={setShowForm} className="relative z-10">
        <UploadCv handleOpen={handleForm} jobId={id} />
      </Dialog>
    </div>
  );
}

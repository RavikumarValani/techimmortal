"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { DialogBackdrop, DialogPanel } from "@headlessui/react";
import axios from "axios";
import ImageUploader from "../components/Uploader";

const ReviewForm = () => {
  const fileInputRef = useRef(null);
  const serverHost = process.env.SERVER_HOST;
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const changeSelectedFile = (file) => {
    setSelectedFile(file);
    setFormData({ ...formData, ["image"]: file });
  };

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    rating: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rating") {
      if (value === "" || (/^(?:[0-5](?:\.[0-9]?)?)$/.test(value) && value <= 5)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitReview = async (event) => {
    event.preventDefault();
    for (const key in formData) {
      const value = formData[key];
      if (key !== 'image' && (value === null || value === "" || value === undefined)) {
        setErrorMsg("Please fill all fields!");
        setSuccessMsg(null);
        return;
      }
    }
    var reviewData = { ...formData, rating: parseFloat(formData.rating) };
    const response = await axios.post(
      `${serverHost}/testimonial`,
      reviewData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data.success) {
      setSuccessMsg("Your review has been submitted successfully!");
      setErrorMsg(null);
      changeSelectedFile(null);
      setFormData({
        name: "",
        position: "",
        rating: "",
        description: "",
        image: "",
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset file input directly
      }
    } else {
      setErrorMsg("Something went Wrong !");
      setSuccessMsg(null);
    }
  };
  return (
    <>
    <section>
      <div className="review-header-box py-12 lg:py-24 relative text-white">
        <div className="header-overlay"></div>
        <h2
          className="text-2xl md:text-4xl font-semibold text-center relative z-[1] header-text"
        >
          Review
        </h2>
        <p
          data-aos="fade-up"
          className="text-center font-sans text-base md:text-xl font-medium px-4 mt-4"
        >
          We believe every client’s story is unique and valuable <br className="hidden md:block"/> By sharing your experience, you help us improve and contribute to our growth and success!
        </p>
      </div>
      <div className="container mx-auto px-6">
        <div data-aos="zoom-in" className="flex items-center justify-center  py-12 lg:py-20">
          <div className="rounded-lg flex flex-col md:flex-row border border-grey-100 p-4">
            <div className="text-white">
              

              {successMsg && <div id="alert-border-3" className="mt-3 flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div className="ms-3 text-sm font-medium">{successMsg}</div>
            </div>}

              {errorMsg && (
                <div
                  id="alert-border-2"
                  className="mt-3 flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <div className="ms-3 text-sm font-medium">{errorMsg}</div>
                </div>
              )}
              <form className="">
                <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full p-2 mb-4 bg-gray-700 rounded border border-gray-700"
                />
                <input
                  onChange={handleChange}
                  value={formData.position}
                  name="position"
                  type="text"
                  required
                  placeholder="Position"
                  className="w-full p-2 mb-4 bg-gray-700 rounded border border-gray-700"
                />
                <input
                  onChange={handleChange}
                  value={formData.rating}
                  name="rating"
                  type="text"
                  required
                  placeholder="Rating"
                  className="w-full p-2 mb-4 bg-gray-700 rounded border border-gray-700"
                />
                <textarea
                  onChange={handleChange}
                  value={formData.description}
                  name="description"
                  required
                  placeholder="Your Review..."
                  className="w-full p-2 mb-4 bg-gray-700 rounded border border-gray-700 h-24"
                ></textarea>
                <ImageUploader
                  selectedFile={selectedFile}
                  setSelectedFile={changeSelectedFile}
                  fileInputRef={fileInputRef}
                />
                <button
                  onClick={submitReview}
                  type="button"
                  className="w-full p-2 bg-[#CEFF05] text-black font-bold rounded"
                >
                  SUBMIT REVIEW
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default ReviewForm;

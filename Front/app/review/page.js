"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DialogBackdrop, DialogPanel } from "@headlessui/react";
import axios from "axios";
import ImageUploader from "../components/Uploader";

const ReviewForm = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);
  const changeSelectedFile = (file) => {
    setSelectedFile(file);
    setCheckFile(true);
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
      if (value === "" || /^(10|[1-9])$/.test(value)) {
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
      if (value === null || value === "" || value === undefined) {
        setErrorMsg("Please fill all fields!");
        return;
      }
    }
    var reviewData = { ...formData, rating: formData.rating / 2 };
    const response = await axios.post(
      `http://localhost:5000/testimonial`,
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
    } else {
      setErrorMsg("Something went Wrong !");
      setErrorMsg(null);
    }
  };
  return (
    <>
    <section>
      <div className="review-header-box py-28 relative text-white">
        <div className="header-overlay"></div>
        <h2
          className="text-2xl md:text-4xl font-semibold text-center relative z-[1] header-text"
        >
          Review
        </h2>
        <p
          data-aos="fade-up"
          className="text-center font-sans text-lg md:text-2xl font-medium px-4 lg:px-0"
        >
          We believe every client’s story is unique and valuable.
        </p>
        <p
          data-aos="fade-up"
          className="text-center font-sans text-lg md:text-2xl font-medium"
        >
          By sharing your experience, you help us improve and contribute to our growth and success!
        </p>
      </div>
      <div className="container mx-auto">
        <div data-aos="zoom-in" className="flex items-center justify-center">
          <div className="rounded-lg flex flex-col md:flex-row">
            <div className="p-6 text-white">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">Share Your Feedback...</div>
              </div>

              {successMsg && <div id="alert-border-3" class="mt-3 flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div class="ms-3 text-sm font-medium">{successMsg}</div>
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
              <form className="mt-4">
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
                  isEdit={checkFile ? false : true}
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
            <Image
              src="/team.jpeg"
              className="hidden md:block"
              alt="Woman with headset working on a laptop"
              width={380}
              height={585}
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default ReviewForm;

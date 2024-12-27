"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DialogBackdrop, DialogPanel } from "@headlessui/react";
import axios from "axios";
import ImageUploader from "./Uploader";

const ReviewForm = ({ handleOpenReviewForm }) => {
  const [errorMsg, setErrorMsg] = useState(null);
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
    console.log(reviewData);
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
      handleOpenReviewForm();
    } else {
      setErrorMsg("Something went Wrong !");
    }
  };
  return (
    <>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center items-center md:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl 
            transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out 
            data-[leave]:ease-in m-4 md:m-12 sm:w-full sm:max-w-4xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex items-center justify-center bg-gray-900">
              <div className="rounded-lg shadow-lg flex flex-col md:flex-row">
                <div className="p-6 text-white">
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Share your reviews</div>
                    <button onClick={handleOpenReviewForm} className="text-xl">
                      &times;
                    </button>
                  </div>
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
          </DialogPanel>
        </div>
      </div>
    </>
  );
};
export default ReviewForm;

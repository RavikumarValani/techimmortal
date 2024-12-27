"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useRouter } from "next/navigation";
import axios from "axios";

const ContactUs = ({ handleOpen }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitReview = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("message", formData.message);
    const response = await axios.post(
      `http://localhost:5000/contact`,
      formData
    );
    if (response.data.success) {
      handleOpen();
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
                <Image
                  src="/team.jpeg"
                  className="hidden md:block"
                  alt="Woman with headset working on a laptop"
                  width={380}
                  height={585}
                />
                <div className="p-6 text-white">
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                      Talk to Our Experts
                    </div>
                    <button onClick={handleOpen} className="text-xl">
                      &times;
                    </button>
                  </div>
                  <p className="text-gray-400 mt-2 font-bold">
                    Get a free consultation tailored to your business needs.
                  </p>
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
                      value={formData.email}
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className="w-full p-2 mb-4 bg-gray-700 rounded border border-gray-700"
                    />
                    <input
                      onChange={handleChange}
                      value={formData.phone}
                      name="phone"
                      type="tel"
                      required
                      placeholder="Phone"
                      className="w-full p-2 mb-4 bg-gray-700 rounded border border-gray-700"
                      pattern="[0-9]*"
                      maxLength={10}
                    />
                    <input
                      onChange={handleChange}
                      value={formData.company}
                      name="company"
                      type="text"
                      required
                      placeholder="Company Name"
                      className="w-full p-2 mb-4 bg-gray-700 rounded border border-gray-700"
                    />
                    <textarea
                      onChange={handleChange}
                      value={formData.message}
                      name="message"
                      required
                      placeholder="Message"
                      className="w-full p-2 mb-4 bg-gray-700 rounded border border-gray-700 h-24"
                    ></textarea>
                    <button
                      onClick={submitReview}
                      type="button"
                      className="w-full p-2 bg-[#CEFF05] text-black font-bold rounded"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </>
  );
};
export default ContactUs;

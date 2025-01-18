"use client";
import React, { useState } from "react";
import { DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useRouter } from "next/navigation";
import axios from "axios";

const UploadCv = ({ handleOpen, jobId, jobTitle }) => {
  const serverHost = process.env.SERVER_HOST;
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    career_id: jobId,
    title: jobTitle,
    myFile: null,
  });

  const handleChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const value = formData.myFile;
    if (value === null || value === "" || value === undefined) {
      setErrorMsg("Please upload your CV!");
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("careerId", formData.career_id);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("myFile", formData.myFile);
    console.log(formDataToSend)
    const response = await axios.post(
      `${serverHost}/career/job-request`,
      formDataToSend
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
            data-[leave]:ease-in m-4 md:m-12 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex items-center justify-center bg-gray-900">
              <div className="rounded-lg shadow-lg flex flex-col md:flex-row">
                <div className="p-6 text-white">
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">
                      Drop Your CV Here
                    </div>
                    <button onClick={handleOpen} className="text-xl">
                      &times;
                    </button>
                  </div>
                  <p className="text-gray-400 mt-2 font-bold">
                    We will consider your Profile for future Jobs
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
                      name="myFile"
                      type="file"
                      required
                      className="w-full p-2 mb-4"
                    />
                    <button
                      onClick={submitForm}
                      type="button"
                      className="w-full p-2 bg-[#CEFF05] text-black font-bold rounded"
                    >
                      Drop CV
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
export default UploadCv;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// components
import Uploader from "@/components/Image/Uploader.js";

import Admin from "@/layouts/Admin.js";
import { getCookie } from '@/utils/auth.js';
import { validateData } from "@/utils/form/validate.js";
import Message from "@/utils/message.js";

export default function AddReview() {
  const router = useRouter();
  const { id } = router.query
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);
  const changeSelectedFile = (file) => {
    setSelectedFile(file);
    setCheckFile(true);
  };
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    description: "",
    image: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [error, setError] = useState("");

  const submitReview = async () => {
    const validate = validateData(formData);
    if(validate.success) {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("rating", formData.rating);
      formDataToSend.append("image", checkFile ? selectedFile : formData.image);
      const response = await axios.put(`${process.env.SERVER_HOST}/testimonial/${id}`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${getCookie('token')}`
        }
      });
      if (response.data.success) {
          router.push('/admin/manageReviews');
      } else{
        setError(response.data.message);
      }
    } else {
      setError(validate.message);
    }
}
useEffect(() => {
    if (id) {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.SERVER_HOST}/testimonial/${id}`);
                setSelectedFile(`${process.env.SERVER_HOST}/uploads/${response.data.testimonial.image}`);
                setFormData(response.data.testimonial);
            } catch (e) {
                console.error("Error fetching review data", e);
            }
        };

        fetchData();
    }
}, [id]);

  return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Edit Review</h6>
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={submitReview}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              {error && <Message variant="red" message={error} />}
              <div className="flex flex-wrap mt-3">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Rating
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      rows="4"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Image
              </h6>
              <Uploader
                  selectedFile={selectedFile}
                  setSelectedFile={changeSelectedFile}
                  isEdit={checkFile ? false : true}
              />
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex items-center justify-center">
                <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={submitReview}
                >
                  Submit
                </button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </>
    );
}

AddReview.layout = Admin;
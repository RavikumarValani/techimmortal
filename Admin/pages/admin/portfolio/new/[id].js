import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie } from "@/utils/auth.js";

// components
import Uploader from "@/components/Image/Uploader.js";
import Admin from "@/layouts/Admin.js";
import Message from "@/utils/message.js";

export default function AddPortfolio() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);
  const changeSelectedFile = (file) => {
    setSelectedFile(file);
    setCheckFile(true);
  };
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    image: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [error, setError] = useState("");

  const submitPortfolio = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("url", formData.url);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("service", formData.service);
    formDataToSend.append("image", checkFile ? selectedFile : formData.image);
    const response = await axios.put(
      `${process.env.SERVER_HOST}/portfolio/${id}`,
      formDataToSend,
      {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    );
    if (response.data.success) {
      router.push('/admin/managePortfolio');
    } else {
      setError(response.data.message);
    }
  };
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.SERVER_HOST}/portfolio/${id}`
          );
          setSelectedFile(
            `${process.env.SERVER_HOST}/uploads/${response.data.portfolio.image}`
          );
          setFormData(response.data.portfolio);
        } catch (e) {
          console.error("Error fetching portfolio data", e);
        }
      };

      fetchData();
    }
  }, [id]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={submitPortfolio}>
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Edit Portfolio
                </h6>
                <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
            {error && <Message variant="red" message={error} />}
            <div className="flex flex-wrap mt-3">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="title"
                    required={true}
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    htmlFor="service"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="service"
                    value={formData.service}
                    required={true}
                    onChange={handleChange}
                  >
                    <option value="">Choose a service</option>
                    <option value="custom-software-development">
                      Custom Software Development
                    </option>
                    <option value="mobile-app-development">
                      Mobile App Development
                    </option>
                    <option value="web-development">Web Development</option>
                    <option value="game-development">Game Development</option>
                    <option value="software-integration-and-migration">
                      Software Integration And Migration
                    </option>
                    <option value="software-maintenance-and-support">
                      Software Maintenance And Support
                    </option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="url"
                  >
                    Url
                  </label>
                  <input
                    type="url"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    name="description"
                    required={true}
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
              isRequired={false}
            />
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex items-center justify-center">
                <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
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

AddPortfolio.layout = Admin;

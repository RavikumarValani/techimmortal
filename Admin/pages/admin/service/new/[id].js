import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Admin from "@/layouts/Admin.js";
import Message from "@/utils/message.js";
import { getCookie } from "@/utils/auth.js";

export default function AddService() {
  const router = useRouter();
  const { id } = router.query
  const [formData, setFormData] = useState({
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [error, setError] = useState("");

  const submitService = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${process.env.SERVER_HOST}/service/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${getCookie('token')}`
      }
    });
    if (response.data.success) {
      router.push('/admin/manageServices');
    } else {
      setError(response.data.message);
    }
  }

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.SERVER_HOST}/service/${id}`);
          setFormData(response.data.service);
        } catch (e) {
          console.error("Error fetching service data", e);
        }
      };

      fetchData();
    }
  }, [id]);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={submitService}>
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">Edit Service</h6>
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
              <div className="w-full lg:w-5/12 px-4">
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
                    value={formData.title}
                    required={true}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="sort_order"
                  >
                    Sort order
                  </label>
                  <input
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="sort_order"
                    value={formData.sort_order}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

AddService.layout = Admin;
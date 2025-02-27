import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie } from "@/utils/auth.js";

// components
import Uploader from "@/components/Image/Uploader.js";
import Desc from "./desc.js";
import Admin from "@/layouts/Admin.js";
import { validateData } from "@/utils/form/validate.js";
import Message from "@/utils/message.js";

export default function Addblog() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: [],
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [descriptions, setDescriptions] = useState([
    { id: 1, text: "", children: [] },
  ]);

  const [selectedFile, setSelectedFile] = useState();
  const changeSelectedFile = (file) => {
    setSelectedFile(file);
    setFormData((prev) => ({ ...prev, ["image"]: file }));
  };

  const addNewDescription = () => {
    setDescriptions((prev) => [
      ...prev,
      { id: Date.now(), text: "", children: [] },
    ]);
  };

  const deleteDescription = (idToDelete) => {
    const deleteNode = (nodes) =>
      nodes
        .filter((node) => node.id !== idToDelete)
        .map((node) => ({
          ...node,
        }));

    const updatedDescriptions = deleteNode([...descriptions]);
    setDescriptions(updatedDescriptions);
  };

  // Update descriptions state from Desc component
  const handleDescriptionsChange = (id, newDescription) => {
    if (Array.isArray(newDescription)) {
      id = newDescription[0].id;
      newDescription = newDescription[0];
    }
    setDescriptions((prev) =>
      prev.map((desc) => (desc.id === id ? newDescription : desc))
    );
    setFormData((prev) => ({
      ...prev,
      ["description"]: JSON.stringify(descriptions),
    }));
  };
  const [error, setError] = useState("");
  const submitPost = async (e) => {
    e.preventDefault();
    const validate = validateData(formData);
    if (validate.success) {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("author", formData.author);
      formDataToSend.append("description", JSON.stringify(descriptions)); // Convert to string if needed
      formDataToSend.append("image", selectedFile);
      const response = await axios.post(
        `${process.env.SERVER_HOST}/blog`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );
      if (response) {
        router.push("/admin/manageBlogs");
      }
    } else {
      setError(validate.message);
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form
            encType="multipart/form-data"
            method="post"
            name="fileinfo"
            id="fileinfo"
            onSubmit={submitPost}
          >
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">New Blog</h6>
                <button
                  className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
            {error && <Message variant="red" message={error} />}
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Author Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="author"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="author"
                    required={true}
                    value={formData.author}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Description
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
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
              {descriptions.map((desc) => (
                <>
                  <Desc
                    key={desc.id}
                    descriptions={Array.isArray(desc) ? desc : [desc]} // Wrap desc in an array to match the expected prop type
                    setDescriptions={(newDesc) =>
                      handleDescriptionsChange(newDesc.id, newDesc)
                    }
                    deleteDesc={deleteDescription}
                  />
                </>
              ))}

              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-5 ease-linear transition-all duration-150"
                type="button"
                onClick={addNewDescription}
              >
                Add new description
              </button>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Image
            </h6>
            <Uploader
              selectedFile={selectedFile}
              setSelectedFile={changeSelectedFile}
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

Addblog.layout = Admin;

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { getCookie } from "@/utils/auth.js";

// components
import Desc from "./desc.js";
import Admin from "@/layouts/Admin.js";
import { validateData } from "@/utils/form/validate.js";
import Message from "@/utils/message.js";

export default function AddCareer() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    responsibility: [],
    salary: "",
    experience: "",
    about: "",
    skill: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [responsibility, setResponsibility] = useState([
    { id: 1, text: "", children: [] },
  ]);
  const [skills, setSkills] = useState([
    { id: 1, text: "", children: [] },
  ]);

  const addNewDescription = () => {
    setResponsibility((prev) => [
      ...prev,
      { id: Date.now(), text: "", children: [] },
    ]);
  };

  const addNewSkill = () => {
    setSkills((prev) => [
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

    const updatedDescriptions = deleteNode([...responsibility]);
    setResponsibility(updatedDescriptions);
  };

  const deleteSkill = (idToDelete) => {
    const deleteNode = (nodes) =>
      nodes
        .filter((node) => node.id !== idToDelete)
        .map((node) => ({
          ...node,
        }));

    const updatedDescriptions = deleteNode([...skills]);
    setSkills(updatedDescriptions);
  };

  // Update descriptions state from Desc component
  const handleDescriptionsChange = (id, newDescription) => {
    if (Array.isArray(newDescription)) {
      id = newDescription[0].id;
      newDescription = newDescription[0];
    }
    setResponsibility((prev) =>
      prev.map((desc) => (desc.id === id ? newDescription : desc))
    );
    setFormData((prev) => ({
      ...prev,
      ["responsibility"]: JSON.stringify(responsibility),
    }));
  };

  const handleSkillChange = (id, newDescription) => {
    if (Array.isArray(newDescription)) {
      id = newDescription[0].id;
      newDescription = newDescription[0];
    }
    setSkills((prev) =>
      prev.map((desc) => (desc.id === id ? newDescription : desc))
    );
    setFormData((prev) => ({
      ...prev,
      ["skill"]: JSON.stringify(skills),
    }));
  };
  const [error, setError] = useState("");
  const submitPost = async (e) => {
    e.preventDefault();
    const validate = validateData(formData);
    if (validate.success) {
      const formDataToSend = {};
      formDataToSend["title"] = formData.title;
      formDataToSend["salary"] = formData.salary;
      formDataToSend["location"] = formData.location;
      formDataToSend["experience"] = formData.experience;
      formDataToSend["about"] = formData.about;
      formDataToSend["responsibility"] = JSON.stringify(responsibility);
      formDataToSend["skill"] = JSON.stringify(skills);
      const response = await axios.post(
        `${process.env.SERVER_HOST}/career`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );
      if (response) {
        router.push("/admin/manageCareers");
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
                <h6 className="text-blueGray-700 text-xl font-bold">Add New Position</h6>
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
              Basic Information
            </h6>
            <div className="flex flex-wrap">
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
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="location"
                    required={true}
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="salary"
                  >
                    Salary
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="salary"
                    required={true}
                    value={formData.salary}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="experience"
                  >
                    Experience
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="experience"
                    required={true}
                    value={formData.experience}
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
                    htmlFor="about"
                  >
                    About Position
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    rows="2"
                    cols="50"
                    required={true}
                    name="about"
                    placeholder="Description About position"
                    value={formData.about}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  {responsibility.map((desc) => (
                    <>
                      <Desc
                        key={desc.id}
                        title="Responsibility"
                        descriptions={Array.isArray(desc) ? desc : [desc]}
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
                    Add new responsibility
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  {skills.map((skill) => (
                    <>
                      <Desc
                        key={skill.id}
                        title="Skills"
                        descriptions={Array.isArray(skill) ? skill : [skill]}
                        setDescriptions={(newDesc) =>
                          handleSkillChange(newDesc.id, newDesc)
                        }
                        deleteDesc={deleteSkill}
                      />
                    </>
                  ))}
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ml-5 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addNewSkill}
                  >
                    Add new skill
                  </button>
                </div>
              </div>

            </div>
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

AddCareer.layout = Admin;

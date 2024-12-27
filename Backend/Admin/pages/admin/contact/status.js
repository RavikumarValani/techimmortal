import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { getCookie } from "@/utils/auth.js";
import Message from "@/utils/message.js";

export default function ContactStatus({ isOpen, setIsOpen, data, contacts, contactError }) {
    const router = useRouter();
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        status: data.status,
        description: data.description,
    });
    useEffect(() => {
        setFormData({ status: data.status, description: data.description })
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }
    const submitStatus = async () => {
        if (formData.description) {
            const response = await axios.put(`${process.env.SERVER_HOST}/contact/${data.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${getCookie('token')}`
                }
            });
            if (response.data.success) {
                toggleModal();
                const contactData = await axios.get(`${process.env.SERVER_HOST}/contact`);
                contacts(contactData.data.contact);
                console.log(response.data.message);
                contactError(response.data.message)
            } else {
                toggleModal();
                contactError(response.data.message)
            }
        } else {
            setError("Please add description.");
        }
    }
    return (
        <>
            {(isOpen && data.id) && (

                <div id="crud-modal" tabIndex="-1" className="place-items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Update Status
                                </h3>
                                <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <form className="p-4 md:p-5">
                                {error && <Message variant="red" message={error} isContact={true} />}
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                        <select onChange={handleChange} value={formData.status} name="status" id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option value="0">On Hold</option>
                                            <option value="1">Completed</option>
                                            <option value="2">Pending</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                        <textarea onChange={handleChange} value={formData.description} name="description" id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write description here"></textarea>
                                    </div>
                                </div>
                                <button type="button" onClick={submitStatus} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Update Status
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

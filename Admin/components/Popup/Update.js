import React, { useState, useEffect } from "react";
import axios from "axios";

import { getCookie } from "@/utils/auth.js";
import Message from "@/utils/message.js";

export default function UpdatePopup({ isOpen, setIsOpen, stats }) {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({});
    useEffect(() => {
        setFormData({ [stats.data.field]: stats.data.count || 0 })
        setError("");
    }, [stats]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ [name]: value });
    };
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }
    const submitStatus = async () => {
        let slug = 'stats';
        if(stats.data.id){
            slug = `stats/${stats.data.id}`;
        }
        const response = await axios.post(`${process.env.SERVER_HOST}/${slug}`, formData, {
            headers: {
                Authorization: `Bearer ${getCookie('token')}`
            }
        });
        if (response.data.success) {
            stats.setUpdatedStats(response.data.stats);
            toggleModal();
        } else {
            toggleModal();
            setError(response.data.message)
        }
    }
    return (
        <>
            {(isOpen) && (

                <div id="crud-modal" tabIndex="-1" className="place-items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Update {stats.title}
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
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor={stats.data.field}
                                        >
                                            {stats.title}
                                        </label>
                                        <input
                                            type="number"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            name={stats.data.field}
                                            required={true}
                                            onChange={handleChange}
                                            value={formData[stats.data.field]}
                                        />
                                    </div>
                                </div>
                                <button type="button" onClick={submitStatus} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

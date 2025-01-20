import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const JobViewer = ({ showurl, deleteurl, filename }) => {
  const router = useRouter();
  const handleDelete = async () => {
    if (deleteurl) {
      try {
        console.log(deleteurl);
        const response = await axios.delete(deleteurl);
        router.reload();
      } catch (e) {
        console.error("Error deleting data", e);
      }
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get(showurl, { responseType: "blob" });
      const url = window.URL.createObjectURL(response.data);

      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };
  return (
    <>
      <div className="relative inline-block w-full  items-stretch">
        <button onClick={handleDownload} className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Download
        </button>
        <button onClick={handleDelete} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Delete
        </button>
      </div>
    </>
  );
};

export default JobViewer;

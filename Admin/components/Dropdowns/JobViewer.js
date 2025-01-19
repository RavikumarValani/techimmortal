import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const JobViewer = ({ showurl, deleteurl }) => {
  const router = useRouter();
  const [display, setDisplay] = useState(false);
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

  const displayPdf = async () => {
    setDisplay(true);
  };
  const closepdf = async () => {
    setDisplay(false);
  };
  return (
    <>
        <div className="relative inline-block w-full  items-stretch">
        <button onClick={displayPdf} className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Show
        </button>
          <button onClick={handleDelete} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Delete
          </button>
        </div>
        {display && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-4/5 h-5/6 bg-white rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              onClick={closepdf}
              className="absolute top-3 right-3 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600"
            >
              X
            </button>

            {/* PDF Viewer */}
            <div style={{ width: "100%", height: "100vh" }}>
            <iframe
                src={showurl}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="File Viewer"
            ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobViewer;

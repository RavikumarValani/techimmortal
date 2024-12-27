import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const NotificationDropdown = ({ editurl, deleteurl, gridurl }) => {
  const router = useRouter();
  const handleDelete = async () => {
    if (deleteurl) {
      try {
        const response = await axios.delete(deleteurl);
        router.push(gridurl);
        router.reload();
      } catch (e) {
        console.error("Error deleting data", e);
      }
    }
  };
  return (
    <>
        <div className="relative inline-block w-full  items-stretch">
          <Link
            href={editurl}
          >
            <button type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Edit
            </button>
          </Link>
          <button onClick={handleDelete} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Delete
          </button>
        </div>
    </>
  );
};

export default NotificationDropdown;

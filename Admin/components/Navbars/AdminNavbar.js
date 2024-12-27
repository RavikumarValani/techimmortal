import React from "react";
import { useRouter } from "next/router";
import { logout } from "@/utils/auth.js";

export default function Navbar() {
  const router = useRouter();
  const logoutUser = async () => {
    logout();
    router.push('/');
  }
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className={"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4 " + (router.pathname === "/admin/dashboard" ? "" : "hidden")}>
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <button onClick={logoutUser} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

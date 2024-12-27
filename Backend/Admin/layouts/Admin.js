import React, { useEffect } from "react";
import { isLogin } from "@/utils/auth.js";
import { useRouter } from "next/router";

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";

export default function Admin({ children }) {
  const router = useRouter();
  const fetchData = async () => {
    if(! await isLogin()){
      router.push('/');
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
        </div>
      </div>
    </>
  );
}

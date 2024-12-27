import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// components
import CardStats from "../Cards/CardStats.js";

export default function HeaderStats() {
  const router = useRouter();
  const currentUrl = router.pathname;
  const [response, setResponse] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_HOST}/contact/status`);
      setResponse(response.data);
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    if(currentUrl === "/admin/dashboard"){
      fetchData();
    }
  }, []);
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className={"flex flex-wrap " + 
              (currentUrl === "/admin/dashboard" ? "" : "hidden")}
            >
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <a href="/admin/contacts">
                  <CardStats
                    statSubtitle="User Enquiry"
                    statTitle={response.count}
                    statArrow="up"
                    statPercent={`${response.per} %`}
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last month"
                    statIconName="fas fa-users"
                    statIconColor="bg-red-500"
                  />
                </a>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Completed Project"
                  statTitle="15+"
                  statPercentColor="text-red-500"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-green-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Ongoing Project"
                  statTitle="2"
                  statPercentColor="text-red-500"
                  statIconName="fas fa-project-diagram"
                  statIconColor="bg-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

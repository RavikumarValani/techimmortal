import React, { useState, useEffect } from "react";
import axios from "axios";

import JobViewer from "@/components/Dropdowns/JobViewer.js";
import Admin from "@/layouts/Admin.js";
import Status from "@/pages/admin/career/jobRequest/status.js";

export default function JobRquest() {
  const [careers, setCareers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [error, setError] = useState("");
  const [popup, setPopup] = useState(false);
  const [popupid, setPopupid] = useState("");
  const [popupstatus, setPopupstatus] = useState("");
  const [popupdescription, setPopupdescription] = useState("");
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const [hold, setHold] = useState(0);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_HOST}/career/job/all`);
      setCareers(response.data.careers);
      setFilteredData(response.data.careers);
    } catch (e) {
      console.log(e)
    }
  }

  const toggleModal = (id, status, description) => {
    setPopupid(id);
    setPopupstatus(status);
    setPopupdescription(description ? description : "");
    setPopup(!popup);
  };

  const applyFilter = async (filter, status = null) => {
    const updatedFilters = activeFilters.includes(filter)
      ? activeFilters.filter((f) => f !== filter)
      : [...activeFilters, filter];

    setActiveFilters(updatedFilters);

    if (updatedFilters.length === 0) {
      setFilteredData(careers);
    } else {
      let newFilteredData;
      if (status && updatedFilters.includes(filter)) {
        newFilteredData = careers.filter((item) => {
          return updatedFilters.some((filter) => {
            if (filter == item.status) {
              return true;
            } else {
              return false;
            }
          })
        });
      } else {
        newFilteredData = careers.filter((item) => {
          return updatedFilters.some((filter) => {
            if (filter === item.title) {
              return true;
            } else {
              return false;
            }
          })
        });
      }
      setFilteredData(newFilteredData);
    }
  };

  const filters = () => {
    const titleCount = {};

    careers.forEach(item => {
      const title = item.title;
      titleCount[title] = (titleCount[title] || 0) + 1;
    });

    return Object.entries(titleCount).map(([title, count]) => ({ title, count }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (careers.length > 0) {
      const statusCounts = careers.reduce(
        (acc, career) => {
          if (career.status === 1) acc.completed += 1;
          else if (career.status === 2) acc.pending += 1;
          else if (career.status === 0) acc.hold += 1;
          return acc;
        },
        { completed: 0, pending: 0, hold: 0 }
      );

      setCompleted(statusCounts.completed);
      setPending(statusCounts.pending);
      setHold(statusCounts.hold);
    }
  }, [careers]);
  return (
    <>
      <div className="w-full mb-12 px-4">
        <div
          className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-white"
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className="font-semibold text-lg text-white"
                >
                  Job Application
                </h3>
              </div>
              <div className="flex-wrap gap-2">
                <span className="transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  Total: {careers.length}
                </span>
                {filters().map((filter, index) => (
                  <span key={index} onClick={() => applyFilter(filter.title)} className={"me-2 cursor-pointer border border-orange-500 transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-2 py-1 rounded-full " + (activeFilters.includes(filter.title) ? 'bg-orange-500' : '')}>
                    {filter.title}: {filter.count}
                  </span>
                ))}
              </div>
              <div className="flex-wrap gap-2">
                <span onClick={() => applyFilter('1', 'status')} className={"me-2 cursor-pointer border border-green-500 transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-2 py-1 rounded-full " + (activeFilters.includes('1') ? 'bg-green-500' : '')}>
                  Completed: {completed}
                </span>
                <span onClick={() => applyFilter('2', 'status')} className={"me-2 cursor-pointer border border-orange-500 transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-2 py-1 rounded-full " + (activeFilters.includes('2') ? 'bg-orange-500' : '')}>
                  Pending: {pending}
                </span>
                <span onClick={() => applyFilter('0', 'status')} className={"me-2 cursor-pointer border border-red-500 transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-2 py-1 rounded-full " + (activeFilters.includes('0') ? 'bg-red-500' : '')}>
                  Hold: {hold}
                </span>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Title
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Status
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Date
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Action
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Comment
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((career, index) => (
                  <tr key={index} className="hover:bg-gray-700 transition duration-150">
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      <span
                        className={
                          "ml-3 font-bold text-white"
                        }
                      >
                        {career.title}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 cursor-pointer">
                      <div
                        onClick={() =>
                          toggleModal(
                            career._id,
                            career.status,
                            career.comment
                          )
                        }
                      >
                        <i
                          data-tooltip-target="tooltip-light"
                          data-tooltip-style="light"
                          className={
                            "fas fa-circle mr-2 " +
                            (career.status == 1
                              ? "text-green-500"
                              : career.status == 2
                                ? "text-orange-500"
                                : "text-red-500")
                          }
                        ></i>{" "}
                        {career.status == 2
                          ? `Pending`
                          : career.status == 1
                            ? `Completed`
                            : `On Hold`}
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {career.date}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <JobViewer
                        showurl={`${process.env.SERVER_HOST}/uploads/${career.myFile}`}
                        deleteurl={`${process.env.SERVER_HOST}/career/job/${career._id}`}
                      />
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 overflow-auto h-24 inline-block w-12/12 content-center">
                      {career.comment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Status
              isOpen={popup}
              careerError={setError}
              setIsOpen={setPopup}
              careers={setCareers}
              filterData={setFilteredData}
              data={{
                id: popupid,
                status: popupstatus,
                description: popupdescription,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

JobRquest.layout = Admin;
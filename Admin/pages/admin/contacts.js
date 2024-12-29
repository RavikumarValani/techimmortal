import React, { useState, useEffect } from "react";
import axios from "axios";

import Message from "@/utils/message.js";
import Admin from "@/layouts/Admin.js";
import Status from "@/pages/admin/contact/status.js";

export default function Contact() {
  const [contact, setContact] = useState([]);
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");
  const [popupid, setPopupid] = useState("");
  const [popupstatus, setPopupstatus] = useState("");
  const [popupdescription, setPopupdescription] = useState("");
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);
  const [hold, setHold] = useState(0);

  const toggleModal = (id, status, description) => {
    setPopupid(id);
    setPopupstatus(status);
    setPopupdescription(description ? description : "");
    setPopup(!popup);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_HOST}/contact`);
      setContact(response.data.contact);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (contact.length > 0) {
      const statusCounts = contact.reduce(
        (acc, _contact) => {
          if (_contact.status === 1) acc.completed += 1;
          else if (_contact.status === 2) acc.pending += 1;
          else if (_contact.status === 0) acc.hold += 1;
          return acc;
        },
        { completed: 0, pending: 0, hold: 0 }
      );

      setCompleted(statusCounts.completed);
      setPending(statusCounts.pending);
      setHold(statusCounts.hold);
    }
  }, [contact]);

  return (
    <>
      <div className="w-full mb-12 px-4">
        <div
          className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-white"
        >
          {error && (
            <Message variant="green" message={error} isContact={true} />
          )}
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className="font-semibold text-lg text-white"
                >
                  Contact US
                </h3>
              </div>
              <div class="flex flex-wrap gap-4">
                <span class="transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  Total: {contact.length}
                </span>
                <span class="bg-green-500 transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Completed: {completed}
                </span>
                <span class="bg-orange-500 transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Pending: {pending}
                </span>
                <span class="bg-red-500 transform translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Hold: {hold}
                </span>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Name
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Email
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Phone
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    company
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Message
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Date
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Status
                  </th>
                  <th
                    className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                  >
                    Comment
                  </th>
                </tr>
              </thead>
              <tbody>
                {contact.map((_contact, index) => (
                  <tr key={index} className="hover:bg-gray-700 transition duration-150">
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      <span className={"ml-3 font-bold text-white"}>
                        {_contact.name}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {_contact.email}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/12">
                      {_contact.phone}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {_contact.company}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 overflow-auto h-24 inline-block w-10/12 content-center">
                      {_contact.message}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 w-1/12">
                      {_contact.date}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 cursor-pointer">
                      <div
                        onClick={() =>
                          toggleModal(
                            _contact._id,
                            _contact.status,
                            _contact.description
                          )
                        }
                      >
                        <i
                          data-tooltip-target="tooltip-light"
                          data-tooltip-style="light"
                          className={
                            "fas fa-circle mr-2 " +
                            (_contact.status == 1
                              ? "text-green-500"
                              : _contact.status == 2
                                ? "text-orange-500"
                                : "text-red-500")
                          }
                        ></i>{" "}
                        {_contact.status == 2
                          ? `Pending`
                          : _contact.status == 1
                            ? `Completed`
                            : `On Hold`}
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 overflow-auto h-24 inline-block w-12/12 content-center">
                      {_contact.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Status
              isOpen={popup}
              contactError={setError}
              setIsOpen={setPopup}
              contacts={setContact}
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

Contact.layout = Admin;

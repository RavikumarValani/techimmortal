import React from "react";

export default function PageChange(props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-blueGray-800 ">
      <div className="flex flex-col items-center space-y-6">
        <div className="animate-spin text-white">
          <i className="fas fa-circle-notch text-6xl"></i>
        </div>
        <h4 className="text-lg font-semibold text-white">
          Loading page contents for: <span className="font-bold">{props.path}</span>
        </h4>
      </div>
    </div>
  );
}
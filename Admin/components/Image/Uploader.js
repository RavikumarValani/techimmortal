import { useState } from "react";

export default function ImageUploader({selectedFile, setSelectedFile, isEdit, isRequired = true}) {
    const [checkFile, setCheckFile] = useState(false);
    const imageHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        setCheckFile(true);
    }

    return (
        <>
  <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-4 lg:space-y-0 lg:space-x-4">
    {/* File Upload Input */}
    <label
      htmlFor="dropzone-file"
      className="lg:w-1/3 w-full flex flex-col items-center justify-center h-64 border-2 border-dashed border-primary bg-lightprimary rounded-lg cursor-pointer hover:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-gray-800 dark:border-gray-600 dark:bg-gray-700 transition duration-300 ease-in-out"
    >
      <input
        required={isRequired}
        onChange={imageHandler}
        className="opacity-0 h-64 w-full lg:w-1/3 absolute"
        id="dropzone-file"
        type="file"
        accept="image/png, image/jpeg, image/gif, image/svg+xml"
      />
      <div className="flex flex-col items-center justify-center text-center">
        <svg
          className="w-12 h-12 text-cyan-500 mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 16l-4-4m0 0l4-4m-4 4h16M4 4h16v16H4z"
          />
        </svg>
        <p className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-200">
          Click to upload or drag and drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG, or GIF
        </p>
      </div>
    </label>

    {selectedFile && (
  <div className="flex items-center justify-center lg:w-1/3 w-full">
    <img
      className="h-64 max-h-64 w-auto max-w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 object-contain"
      src={isEdit ? selectedFile : URL.createObjectURL(selectedFile)}
      alt="Selected"
    />
  </div>
)}
  </div>
</>

    );
}

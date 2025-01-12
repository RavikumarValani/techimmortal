import { useState } from "react";

export default function ImageUploader({
  selectedFile,
  setSelectedFile,
  fileInputRef,
}) {
  const [checkFile, setCheckFile] = useState(false);

  const imageHandler = (file) => {
    setSelectedFile(file);
    setCheckFile(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      imageHandler(file);
    }
    e.target.value = null;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      imageHandler(file);
    }
  };

  const removePreview = () => {
    setSelectedFile("");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="md:flex w-full justify-between mb-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label
          className="md:w-1/2 text-sm font-semibold text-gray-300 dark:text-white flex cursor-pointer flex-col items-center justify-center rounded-lg bg-lightprimary"
          data-testid="flowbite-label"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="mb-4 text-sm text-darklink">
              Click to upload or drag and drop
            </p>
          </div>
          <div className="hidden">
            <div className="relative w-full">
              <input
                ref={fileInputRef}
                onChange={handleFileChange}
                className="block w-full overflow-hidden rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 text-sm"
                id="dropzone-file"
                type="file"
              />
            </div>
          </div>
        </label>
        <div className={`md:w-1/2 ${selectedFile ? "" : "hidden"}`}>
          <div className="m-auto flex justify-center">
            <div className="relative">
              <img
                width="250px"
                height="250px"
                src={selectedFile ? URL.createObjectURL(selectedFile) : null}
                alt="Uploaded Preview"
              />
              <button
                type="button"
                onClick={removePreview}
                className="absolute top-0 right-0 bg-white text-black border border-black p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

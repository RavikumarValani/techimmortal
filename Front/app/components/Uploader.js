import { useState } from "react";

export default function ImageUploader({
  selectedFile,
  setSelectedFile,
  isEdit,
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
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      imageHandler(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="flex w-6/6 justify-between mb-4"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label
          className="w-4/12 text-sm font-semibold text-gray-300 dark:text-white flex cursor-pointer flex-col items-center justify-center rounded-lg bg-lightprimary"
          data-testid="flowbite-label"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="mb-2 text-sm text-darklink">
              Click to upload or drag and drop
            </p>
          </div>
          <div className="hidden">
            <div className="relative w-full">
              <input
                onChange={handleFileChange}
                className="block w-full overflow-hidden rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 text-sm"
                id="dropzone-file"
                type="file"
              />
            </div>
          </div>
        </label>
        <div
          className={`flex justify-center items-center lg:w-4/12 lg:h-4/12 gap-2 ${
            selectedFile ? "" : "hidden"
          }`}
        >
          <img
            className="h-50 w-50"
            src={
              isEdit
                ? selectedFile
                : selectedFile
                ? URL.createObjectURL(selectedFile)
                : null
            }
            alt="Uploaded Preview"
          />
        </div>
      </div>
    </>
  );
}

// src/components/CustomToast.js
import React, { useEffect } from "react";

const CustomToast = ({ closeToast, color }) => {
  useEffect(() => {
    const timer = setTimeout(closeToast, 2000);
    return () => clearTimeout(timer);
  }, [closeToast]);

  return (
    <div
      className={`bg-green-500 text-white p-3 rounded-lg flex items-center absolute right-4 bottom-4`}
    >
      <span className="font-semibold ml-2">Success!</span>
      <button onClick={closeToast} className="ml-auto text-white">
        <svg
          className="w-5 h-5 text-red-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default CustomToast;

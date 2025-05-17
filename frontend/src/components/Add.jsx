import React from "react";

const Add = () => {
  return (
    <button
      type="button"
      className="fixed end-6 bottom-6 flex items-center justify-center text-white bg-[#04aa9e] rounded-lg w-14 h-14 hover:bg-[#02635c] focus:outline-none"
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
      <span className="sr-only">Add</span>
    </button>
  );
};

export default Add;
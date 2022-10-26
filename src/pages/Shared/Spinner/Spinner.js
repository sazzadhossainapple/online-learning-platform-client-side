import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-[100vh] items-center justify-center space-x-2">
      <div className="w-4 h-4 rounded-full animate-pulse bg-gray-500"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-gray-500"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-gray-500"></div>
    </div>
  );
};

export default Spinner;

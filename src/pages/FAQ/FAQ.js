import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <>
      <div className="max-w-screen-xl p-5 mx-auto text-gray-100">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
            style={{
              backgroundImage: `url("https://source.unsplash.com/random/240x320")`,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>

            <h2 className="z-10 p-5">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md hover:underline text-gray-100"
              >
                Autem sunt tempora mollitia magnam non voluptates
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

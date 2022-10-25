import React from "react";
import { Link } from "react-router-dom";

const RightCourseCard = ({ course }) => {
  const { id, picture, title } = course;
  return (
    <Link to={`/courseDetails/${id}`}>
      <div
        className="relative rounded-xl flex items-end justify-start w-full text-left bg-center bg-cover h-96 "
        style={{
          backgroundImage: `url(${picture})`,
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 rounded-xl bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>

        <h2 className="z-10 p-5">
          <button
            rel="noopener noreferrer"
            to={`/courseDetails/${id}`}
            className="font-medium text-xl hover:underline text-gray-100 hover:text-[#f23276]"
          >
            {title}
          </button>
        </h2>
      </div>
    </Link>
  );
};

export default RightCourseCard;

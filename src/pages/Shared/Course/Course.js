import React from "react";
import { Link } from "react-router-dom";
import RightCourseCard from "../RightCourseCard/RightCourseCard";

const Course = ({ courses }) => {
  return (
    <>
      <div className="col-span-1 bg-[#1e467f] p-7 rounded-md lg:mb-0 md:mb-4 sm:mb-4 mb-4">
        {courses.map((courseTitle) => (
          <Link to={`/courseDetails/${courseTitle.id}`} key={courseTitle.id}>
            <h2 className="  mb-8 text-base hover:bg-gray-800 italic  font-bold bg-[#f23276] py-4 px-5 text-white text-center rounded-lg ">
              {courseTitle.title}
            </h2>
          </Link>
        ))}
      </div>
      <div className="col-span-3 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
          {courses.map((course) => (
            <RightCourseCard key={course.id} course={course}></RightCourseCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;

import React from "react";
import { Link } from "react-router-dom";
import RightCourseCard from "../RightCourseCard/RightCourseCard";

const Course = ({ courses }) => {
  return (
    <>
      <div className="col-span-1 ">
        {courses.map((courseTitle) => (
          <h2
            key={courseTitle.id}
            className=" lg:mb-8 md:mb-8 sm:mb-4 mb-4 text-xl font-bold "
          >
            <Link
              to={`/courseDetails/${courseTitle.id}`}
              className="hover:text-[#f23276]"
            >
              {courseTitle.title}
            </Link>
          </h2>
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

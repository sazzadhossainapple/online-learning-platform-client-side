import React from "react";
import { Link } from "react-router-dom";
import RightCourseCard from "../RightCourseCard/RightCourseCard";

const Course = ({ courses }) => {
  console.log(courses);
  return (
    <>
      <div className="col-span-1 border-r-2">
        {courses.map((courseTitle) => (
          <Link to={`/courseDetails/${courseTitle.id}`} key={courseTitle.id}>
            <h2 className="mb-5 text-xl font-bold">{courseTitle.title}</h2>
          </Link>
        ))}
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-4">
          {courses.map((course) => (
            <RightCourseCard key={course.id} course={course}></RightCourseCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;

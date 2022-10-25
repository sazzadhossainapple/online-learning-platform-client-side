import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Shared/Course/Course";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="md:px-16 py-16 grid grid-cols-3 gap-4">
      <Course courses={courses}></Course>
    </div>
  );
};

export default Courses;

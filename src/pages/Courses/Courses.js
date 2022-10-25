import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Shared/Course/Course";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="lg:px-16 md:px-16 sm:px-8 px-8 py-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1  gap-4">
      <Course courses={courses}></Course>
    </div>
  );
};

export default Courses;

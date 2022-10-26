import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Shared/Course/Course";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="lg:px-16 md:px-16 sm:px-8 px-8 lg:py-16 md:py-16 sm:py-10 py-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1  lg:gap-12  ">
      <Course courses={courses}></Course>
    </div>
  );
};

export default Courses;

import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../../asserts/Images/codeing.png";
import Image2 from "../../../asserts/Images/writting.jpg";

const ProgramminAndCourses = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-7 lg:px-16 md:px-16 sm:px-8 px-8 lg:pb-16 md:pb-16 sm:pb-10 pb-10">
      <div
        className="w-full rounded-md flex justify-center items-center bg-gray-500 "
        style={{
          backgroundImage: `url(${Image1})`,
          backgroundBlendMode: "multiply",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container text-white  p-4  mx-auto md:p-10 mt-12">
          <h2 className="text-2xl uppercase font-semibold mb-2">Best Coding</h2>
          <p className=" text-lg">Your Programming Coding Skills.</p>
          <Link
            to="/courses"
            className="btn mt-4 bg-[#f23276] border-[#f23276] rounded-md"
          >
            Let's Start
          </Link>
        </div>
      </div>
      <div
        className="w-full rounded-md flex justify-center items-center bg-gray-500  "
        style={{
          backgroundImage: `url(${Image2})`,
          backgroundBlendMode: "multiply",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container text-white  p-4  mx-auto md:p-10 mt-12">
          <h2 className="text-2xl uppercase font-semibold mb-2">New Blogs</h2>
          <p className=" text-lg">Programming related new blog.</p>
          <Link
            to="/blog"
            className="btn mt-4 bg-[#f23276] border-[#f23276] rounded-md"
          >
            Let's See
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramminAndCourses;

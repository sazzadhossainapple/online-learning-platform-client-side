import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);

  const { title, id, picture, price, description } = courseDetails;

  return (
    <div className="lg:px-16 md:px-16 sm:px-8 px-8 lg:py-16 md:py-16 sm:py-10 py-8">
      <div className="flex justify-end mb-8">
        <button className="btn bg-[#f23276] border-[#f23276] rounded-md">
          Download To Pdf
        </button>
      </div>
      <div className="">
        <h1
          className="text-center text-3xl font-bold
         mb-10"
        >
          {title}
        </h1>
        <div className="lg:w-96 md:w-96 sm:w-full w-full mx-auto">
          <img className="mb-10" src={picture} alt="" />
        </div>
        <div>
          {description.map((details, index) => (
            <p key={index} className="flex  gap-2 mb-4 text-gray-600">
              <span className="mt-1">
                <AiOutlineArrowRight className="text-[#1e467f]" />
              </span>
              <span>{details}</span>
            </p>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to={`/checkout/${id}`}
            className="btn bg-[#f23276] border-[#f23276] rounded-md"
          >
            Get premium access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Pdf from "react-to-pdf";

const ref = createRef();

const CourseDetails = () => {
  const courseDetails = useLoaderData();

  const { title, id, picture, description } = courseDetails;

  return (
    <div className="lg:px-16 md:px-16 sm:px-8 px-8 lg:py-16 md:py-16 sm:py-10 py-8">
      <div className="flex justify-end mb-8">
        <Pdf targetRef={ref} filename={`${title}.pdf`} x={2} y={2} scale={0.6}>
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="btn bg-[#f23276] border-[#f23276] rounded-md"
            >
              Download To Pdf
            </button>
          )}
        </Pdf>
      </div>

      <div ref={ref}>
        <div className="border p-8">
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
    </div>
  );
};

export default CourseDetails;

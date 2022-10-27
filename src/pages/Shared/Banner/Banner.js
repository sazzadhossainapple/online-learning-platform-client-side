import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../asserts/Images/bg2.jpg";

const Banner = () => {
  return (
    <div
      className="w-full -mt-[84px] lg:h-[100vh] md:h-[80vh] sm:h-[80vh] h-[80vh] flex justify-center items-center bg-gray-600 from-slate-300 "
      style={{
        backgroundImage: `url(${Image})`,
        backgroundBlendMode: "multiply",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col flex-wrap content-center items-center justify-center p-4  mx-auto md:p-10 mt-12">
        <h1 className="lg:text-5xl md:text-4xl sm:text-2xl text-2xl antialiased font-bold leading-none text-center text-gray-100 uppercase  mb-1">
          Learning <span className="text-[#f23276]">&</span> Reactive
        </h1>
        <p className="pt-2 pb-8 italic text-lg antialiased text-center  text-gray-100">
          Find out about our courses and{" "}
          <span className="text-[#f23276]"> other blogs.</span>
        </p>
        <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse gap-6">
          <Link
            to="/courses"
            className="btn bg-[#f23276] border-[#f23276] rounded-md"
          >
            Started Course
          </Link>
          <Link
            to="/blog"
            className="btn bg-transparent border-[#f23276] rounded-md"
          >
            Explore Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

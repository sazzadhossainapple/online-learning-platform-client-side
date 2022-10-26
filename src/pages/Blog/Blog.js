import React from "react";
import QuestionAndAnswer from "../Shared/QuestionAndAanwer/QuestionAndAnswer";

const Blog = () => {
  return (
    <div>
      <div
        className="w-full -mt-[84px] lg:h-[100vh] md:h-[80vh] sm:h-[50vh] h-[50vh] flex justify-center items-center bg-gray-600 from-slate-300 "
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          backgroundBlendMode: "multiply",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container flex flex-col flex-wrap content-center justify-center p-4  mx-auto md:p-10 mt-12">
          <h1 className="lg:text-5xl md:text-4xl sm:text-2xl text-2xl antialiased font-bold leading-none text-center text-gray-100 uppercase mb-1">
            Blogs <span className="text-[#f23276]">&</span> Details
          </h1>
          <p className="pt-2 pb-8 italic text-lg antialiased text-center  text-gray-100">
            Find out about Questions and{" "}
            <span className="text-[#f23276]"> other news.</span>
          </p>
        </div>
      </div>
      <div className="lg:px-16 md:px-16 sm:px-8 px-8 lg:py-16 md:py-16 sm:py-10 py-10">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl antialiased font-bold leading-none text-center  mb-10">
          Questions & <span className="text-[#f23276]"> Answers</span>
        </h1>
        <div>
          <QuestionAndAnswer></QuestionAndAnswer>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import { MdAutoAwesomeMotion } from "react-icons/md";
import { GiInnerSelf, GiClassicalKnowledge } from "react-icons/gi";

const LearnigObjective = () => {
  return (
    <div className="lg:px-16 md:px-16 sm:px-8 px-8 lg:py-16 md:py-16 sm:py-10 py-10">
      <div className="text-center mb-10">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl antialiased font-bold leading-none text-center  mb-2">
          Learning Objectives
        </h1>
        <p className="text-gray-600 text-lg">
          So many academic goals that we expect you to achieve.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-10">
        <div className="text-center flex flex-col justify-center items-center border px-6 py-10 rounded-md hover:border-[#f23276]">
          <p>
            <MdAutoAwesomeMotion className="text-7xl mb-4" />
          </p>

          <h2 className="text-xl font-semibold mb-2">Free Updates</h2>
          <p className="text-gray-700 text-lg">
            Improved skills for building site to sell online courses successful,
            how to take that opportunity.
          </p>
        </div>
        <div className="text-center flex flex-col justify-center items-center border px-6 py-10 rounded-md hover:border-[#f23276]">
          <p>
            <GiInnerSelf className="text-7xl mb-4" />
          </p>

          <h2 className="text-xl font-semibold mb-2">Self Learning</h2>
          <p className="text-gray-700 text-lg">
            The most important thing we expect that you will be able to learn
            anything just by your self.
          </p>
        </div>
        <div className="text-center flex flex-col justify-center items-center border px-6 py-10 rounded-md hover:border-[#f23276] ">
          <p>
            <GiClassicalKnowledge className="text-7xl mb-4" />
          </p>

          <h2 className="text-xl font-semibold mb-2">Knowledge</h2>
          <p className="text-gray-700 text-lg">
            Get knowledge about online business, trend analysis, customer
            approaches, products marketing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnigObjective;

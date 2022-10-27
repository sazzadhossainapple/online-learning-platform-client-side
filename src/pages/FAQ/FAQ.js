import React from "react";

const FAQ = () => {
  return (
    <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100 lg:px-0 md:px-0 sm:px-5 px-5 lg:py-8 md:py-8 sm:py-5 py-5">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl antialiased font-bold leading-none text-center  mb-10">
          Frequently Asked <span className="text-[#f23276]"> Questions</span>
        </h1>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className=" text-xl font-semibold">
              What are the technology requirements to take an online course?
            </h3>
            <p className="mt-1 text-gray-700">
              You will need a computer, a high speed Internet connection, a
              newer version of a web browser, and access to common tools and
              software like word processors, email, etc. Some courses may have
              other software or technology requirements as well.
            </p>
          </div>
          <div>
            <h3 className=" text-xl font-semibold">
              How do I contact my course instructor?
            </h3>
            <p className="mt-1 text-gray-700">
              Instructors stay in touch with their Online Learning students in a
              variety of ways, depending on the course design. Your instructor
              will explain the best way to reach him or her within the course
              home pages. You may communicate with your instructor through
              discussion groups, bulletin boards, chat rooms, assignment
              submissions, through email, or by telephone.
            </p>
          </div>
          <div>
            <h3 className=" text-xl font-semibold">
              What happens if my internet connection doesn’t work during the
              live online lesson?
            </h3>
            <p className="mt-1 text-gray-700">
              Don’t worry. We know that internet connections can be unreliable
              and we understand that there might be lots of people trying to use
              the internet at the same time. Your teacher will have some
              practical suggestions to help solve the problem while the lesson
              is taking place. You can download the videos to watch offline so
              you don't miss the entire lesson
            </p>
          </div>
          <div>
            <h3 className=" text-xl font-semibold">
              How long do I have to complete a course?
            </h3>
            <p className="mt-1 text-gray-700">
              Fall and spring semester courses will be completed during the
              stated weeks of the designated term in which they are offered.
              Most Summer Term courses are five weeks in length; a few are ten
              weeks. Assignments and course requirements must be completed by
              the due dates set by your instructor in the course syllabus. Any
              variance in this timeframe would need to be pre-approved by the
              instructor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

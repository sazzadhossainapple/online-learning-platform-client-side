import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../asserts/Images/bg1.jpg";
import Logo from "../../../asserts/Images/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${Image})`,
        backgroundBlendMode: "multiply",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="px-4 py-8 bg-gray-500 text-gray-200"
    >
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:dark:bg-violet-400">
            <img src={Logo} alt="" />
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <Link className="hover:text-[#f23276]" to="">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#f23276]" to="">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <Link className="hover:text-[#f23276]" to="">
              Instagram
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#f23276]" to="">
              Facebook
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#f23276]" to="">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
      <hr className="text-white my-2" />
      <div className="text-center">
        <p className="italic text-xs">
          © 2022 <span className="text-[#f23276]">Programming </span>Learning
          Reactive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

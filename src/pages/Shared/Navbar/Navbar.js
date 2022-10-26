import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../asserts/Images/logo.png";
import { AuthContext } from "../../../context/UserContext/UserContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [darkToggle, setDarkToggle] = useState(false);

  //user logout
  const logOutUser = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-[#1e467f] md:px-16 py-4 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <Link>Item 1</Link>
            </li>

            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link className=" normal-case text-xl">
          <div className="flex gap-3 relative ">
            <img src={Logo} alt="" />
            <h1 className="font-bold -mt-1 ">Programmig</h1>
            <div
              className="absolute  mt-5 flex ml-11
             "
            >
              <small className="text-xs italic text-[#f23276]">
                Learning Reactive
              </small>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="mr-3 text-lg ">
            <Link className="hover:text-[#f23276] bg-transparent" to="/">
              Home
            </Link>
          </li>
          <li className="mr-3 text-lg">
            <Link className="hover:text-[#f23276] bg-transparent" to="/courses">
              Courses
            </Link>
          </li>
          <li className="mr-3 text-lg">
            <Link className="hover:text-[#f23276] bg-transparent" to="/faq">
              FAQ
            </Link>
          </li>
          <li className="mr-3 text-lg">
            <Link className="hover:text-[#f23276] bg-transparent" to="/blog">
              Blog
            </Link>
          </li>

          <li className="text-lg">
            <Link className="hover:text-[#f23276] bg-transparent">
              <input
                type="checkbox"
                onClick={() => setDarkToggle(!darkToggle)}
                className={
                  darkToggle ? "toggle  bg-gray-700" : "toggle  bg-gray-400"
                }
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <div
              className="dropdown dropdown-end text-black tooltip tooltip-left tooltip-secondary"
              data-tip={user.displayName}
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://placeimg.com/80/80/people"
                    }
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="mb-3">
                  <Link className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link>Settings</Link>
                </li>
                <li className="mb-3">
                  <Link
                    onClick={logOutUser}
                    className="btn bg-[#f23276] border-[#f23276] text-white rounded-md"
                  >
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#f23276] border-[#f23276] rounded-md"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

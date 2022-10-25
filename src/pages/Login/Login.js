import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../context/UserContext/UserContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState("");
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // submit for handle
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center lg:px-0 md:px-0 sm:px-8 px-8 lg:py-16 md:py-16 sm:py-10 py-8">
      <div className="w-full  max-w-md p-8 space-y-3 rounded-xl bg-[#1e467f] text-gray-100">
        <h1 className="text-2xl font-bold text-center">Sing In</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md   text-black border border-white focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-300">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                placeholder="Password"
                className="w-full  pl-4 pr-12 py-3 rounded-md border border-white  text-black focus:border-violet-400"
              />
              {showPassword ? (
                <>
                  <AiFillEye
                    onClick={(e) => setShowPassword(e)}
                    className="text-gray-400 absolute  mr-3 right-0 text-2xl "
                  ></AiFillEye>
                </>
              ) : (
                <>
                  <AiFillEyeInvisible
                    onClick={(e) => setShowPassword(e)}
                    className="text-gray-400 absolute  mr-3 right-0 text-2xl "
                  ></AiFillEyeInvisible>
                </>
              )}
            </div>

            <div className="flex justify-end text-xs text-gray-300 hover:underline">
              <Link rel="noopener noreferrer" to="/">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button className="btn w-full bg-[#f23276] border-[#f23276] rounded-md">
            Sing in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-100">
            Singin with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <FaGoogle />
          </button>
          <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <FaGithub />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-300">
          Don't have an account?
          <Link
            rel="noopener noreferrer"
            to="/register"
            className="underline  hover:text-[#f23276] text-white font-bold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

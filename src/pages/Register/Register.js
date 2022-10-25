import { async } from "@firebase/util";
import React from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext/UserContext";

const Register = () => {
  const { userCreate, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    userCreate(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile(name, photoURL);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateUserProfile = async (name, photoURL) => {
    updateUserProfile(name, photoURL)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center lg:px-0 md:px-0 sm:px-8 px-8 lg:py-16 md:py-16 sm:py-10 py-8">
      <div className="w-full  max-w-md p-8 space-y-3 rounded-xl bg-[#1e467f] text-gray-100">
        <h1 className="text-2xl font-bold text-center">Create new account</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="fullName" className="block text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="fullName"
              required
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md   text-black border border-white focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photo"
              required
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md   text-black border border-white focus:border-violet-400"
            />
          </div>
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
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              className="w-full  pl-4 pr-12 py-3 rounded-md border border-white  text-black focus:border-violet-400"
            />
          </div>
          <button className="btn w-full bg-[#f23276] border-[#f23276] rounded-md">
            Sing up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-100">
            Singup with social accounts
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
          Already have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline  hover:text-[#f23276] text-white font-bold"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

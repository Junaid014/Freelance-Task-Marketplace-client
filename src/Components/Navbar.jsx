import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import btn_logo from "../assets/user.png"
import logo from "../assets/logo.webp"
import Loading from '../Pages/Loading';

const Navbar = () => {
  const { user, signOutUser,loading } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("SignOut Successfully");
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <Loading/>; // Or use a loading spinner here
  }

  const links = (
    <div className="flex text-[#0F0F0FB3] font-medium">
      <li className="mr-2 text-sm font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-[#3B82F6] underline'
              : 'text-[#1E293B] hover:text-[#2563EB] hover:underline'
          }
        >
          Home
        </NavLink>
      </li>

      

      <li className="mr-2 text-sm font-semibold">
        <NavLink
          to="/addtask"
          className={({ isActive }) =>
            isActive
              ? 'text-[#3B82F6] underline'
              : 'text-[#1E293B] hover:text-[#2563EB] hover:underline'
          }
        >
          AddTask
        </NavLink>
      </li>
    </div>
  );

  return (
    <div className="w-full bg-gray-200  fixed top-0 left-0 right-0 shadow-sm z-50">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <img className="w-10 h-10 border border-sky-100 cursor-pointer" src={logo} alt="" />
            <a className="text-2xl text-white font-extrabold">Workly</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {user ? (
          <div className="navbar-end flex gap-3">
            <NavLink to="">
              <img
                className="w-12 h-11 rounded-full"
                src={user?.photoURL || btn_logo}
                alt="user"
              />
            </NavLink>

            <button
              className="px-5 py-2.5 cursor-pointer bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white rounded-lg font-medium shadow-md hover:from-[#2563EB] hover:to-[#3B82F6] transition duration-300"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </div>
        ) : (
          <div className="navbar-end flex gap-3">
            <Link
              to="/auth/login"
              className="px-4 cursor-pointer font-medium py-2 border border-[#3B82F6] text-[#3B82F6] hover:bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:text-white rounded-md transition"
            >
              Login
            </Link>

            <Link
              to="/auth/signUp"
              className="px-5 py-2.5 cursor-pointer bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white rounded-lg font-medium shadow-md hover:from-[#2563EB] hover:to-[#3B82F6] transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

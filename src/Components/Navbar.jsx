import React, { use, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import btn_logo from "../assets/user.png"
import logo from "../assets/logo1.jpg"
import Loading from '../Pages/Loading';
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';


const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
  document.querySelector("html").setAttribute("data-theme", theme);
}, [theme]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

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
    return <Loading />; // Or use a loading spinner here
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
      <li className="mr-2 text-sm font-semibold">
        <NavLink
          to="/browsejobs"
          className={({ isActive }) =>
            isActive
              ? 'text-[#3B82F6] underline'
              : 'text-[#1E293B] hover:text-[#2563EB] hover:underline'
          }
        >
          BrowseTask
        </NavLink>
      </li>
      <li className="mr-2 text-sm font-semibold">
        <NavLink
          to="/mycart"
          className={({ isActive }) =>
            isActive
              ? 'text-[#3B82F6] underline'
              : 'text-[#1E293B] hover:text-[#2563EB] hover:underline'
          }
        >
          My Posted Jobs
        </NavLink>
      </li>
    </div>
  );



  return (
    <div className="w-full bg-[#f0f0f0]  fixed top-0 left-0 right-0 shadow-sm z-50">

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
            <a className="text-2xl  text-black font-extrabold">Workly</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
  



        <div className='flex navbar-end gap-5'>
           {/*  Dark Light theme */}
  <label className="swap swap-rotate ">
  {/* This hidden checkbox controls the state */}
  <input
    type="checkbox"
    onChange={(e) => setTheme(e.target.checked ? "synthwave" : "light")}
    checked={theme === "synthwave"}
  />

  {/* Sun icon (light mode) */}
  <svg
    className="swap-off fill-current w-8 h-8"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M5.64 17.66L4.22 19.08a1 1 0 0 0 1.42 1.42l1.42-1.42a1 1 0 0 0-1.42-1.42zM3 13H1a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2zm10 8a1 1 0 0 0 1 1v2a1 1 0 1 0-2 0v-2a1 1 0 0 0 1-1zm7.36-1.64a1 1 0 1 0-1.42 1.42l1.42 1.42a1 1 0 1 0 1.42-1.42l-1.42-1.42zM21 13h2a1 1 0 0 0 0-2h-2a1 1 0 1 0 0 2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-6a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1zM5.64 6.34A1 1 0 0 0 4.22 4.92L2.8 6.34a1 1 0 0 0 1.42 1.42L5.64 6.34zM18.36 6.34l1.42-1.42a1 1 0 0 0-1.42-1.42l-1.42 1.42a1 1 0 0 0 1.42 1.42z" />
  </svg>

 {/* Moon icon (dark mode) */}
<svg
  className="swap-on w-8 h-8 fill-black"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 0 1-10.45-10.5 1 1 0 0 0-1.58-1.06A10 10 0 1 0 22 14.05a1 1 0 0 0-.36-1.05z" />
</svg>

</label>
          <div>
            {user ? (
          <div className=" flex gap-3 relative" ref={dropdownRef}>
            <img
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-12 h-11 rounded-full cursor-pointer border border-gray-300"
              src={user?.photoURL || btn_logo}
              alt="user"
            />
            <button
              className="px-5 py-2.5 cursor-pointer bg-gradient-to-r from-[#00a7ac] to-[#00cfc3] text-white rounded-lg font-medium shadow-md hover:from-[#008f92] hover:to-[#00b5a9]
 transition duration-300"
              onClick={handleSignOut}
            >
              SignOut
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-44 shadow-xl border-black  w-64 py-4  bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="p-3 border-b border-gray-100 text-gray-700 font-semibold">
                  {user.displayName}
                </div>
               <div className=''>
                 <button
                  onClick={() => {
                    handleSignOut();
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-1 font-semibold px-3  rounded-lg cursor-pointer text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  SignOut 
                  <HiArrowLeftOnRectangle />
                </button>
                
               </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/auth/login"
              className="px-4 cursor-pointer font-medium py-2 border border-[#00a7ac] text-[#00a7ac]   duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#00a7ac] hover:to-[#00cfc2] hover:text-white
 rounded-md transition"
            >
              Login
            </Link>

            <Link
              to="/auth/signUp"
              className="px-5 py-2.5 cursor-pointer bg-gradient-to-r from-[#00a7ac] to-[#00cfc3] text-white rounded-lg font-medium shadow-md hover:from-[#008f92] hover:to-[#00b5a9]
transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

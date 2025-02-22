import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className=" shadow-md p-4 flex justify-between items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-2xl font-bold text-black tracking-wide ${
            isActive ? "border-b-2 border-black" : ""
          }`
        }
      >
        APEX
      </NavLink>
      <div className="space-x-6">
        <NavLink
          to="/career"
          className={({ isActive }) =>
            `text-black hover:underline font-medium transition duration-300 ${
              isActive ? "border-b-2 border-orange-400" : ""
            }`
          }
        >
          Careers
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `text-black hover:underline font-medium transition duration-300 ${
              isActive ? "border-b-2 border-orange-400" : ""
            }`
          }
        >
          Support
        </NavLink>
        <NavLink
          to="/our-culture"
          className={({ isActive }) =>
            `text-black hover:underline font-medium transition duration-300 ${
              isActive ? "border-b-2 border-orange-400" : ""
            }`
          }
        >
          Our Culture
        </NavLink>
      </div>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          `bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ${
            isActive ? "bg-gray-300" : ""
          }`
        }
      >
        Login
      </NavLink>
    </nav>
  );
}

export default Nav;

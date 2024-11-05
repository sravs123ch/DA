import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaInbox,
  FaBook,
  FaTasks,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:static bg-white shadow-lg w-60 h-screen flex flex-col p-4`}
      >
        <div className="flex justify-between items-center mb-8 text-purple-600">
          {/* Logo */}

          <div className="flex items-center space-x-1">
            <h1 className="text-3xl font-bold tracking-tight">C!</h1>
            <h3 className="text-sm font-bold">COURSEUE</h3>
          </div>

          {/* Close Icon (only visible on mobile when sidebar is open) */}
          <button
            className="lg:hidden p-2 text-purple-600 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* <div className="flex flex-col justify-between h-[700px] sm:h-[700px] md:h-[740px] lg:h-full"> */}
        <div className="flex flex-col justify-between h-[600px] sm:h-[700px] md:h-[740px] lg:h-full">
          {/* Overview Section */}
          <div>
            <h2 className="text-gray-400 mb-4">OVERVIEW</h2>
            <ul>
              <li className="flex items-center mb-4 text-purple-600">
                <FaTachometerAlt className="mr-4" />
                <span>Dashboard</span>
              </li>
              <li className="flex items-center mb-4 text-gray-600 hover:text-purple-600 cursor-pointer">
                <FaInbox className="mr-4" />
                <span>Inbox</span>
              </li>
              <li className="flex items-center mb-4 text-gray-600 hover:text-purple-600 cursor-pointer">
                <FaBook className="mr-4" />
                <span>Lesson</span>
              </li>
              <li className="flex items-center mb-4 text-gray-600 hover:text-purple-600 cursor-pointer">
                <FaTasks className="mr-4" />
                <span>Task</span>
              </li>
              <li className="flex items-center mb-4 text-gray-600 hover:text-purple-600 cursor-pointer">
                <FaUsers className="mr-4" />
                <span>Group</span>
              </li>
            </ul>
          </div>

          {/* Settings Section - Stays at the bottom */}
          <div>
            <h2 className="text-gray-400 mb-4">SETTINGS</h2>
            <ul>
              <li className="flex items-center mb-4 text-gray-600 hover:text-purple-600 cursor-pointer">
                <FaCog className="mr-4" />
                <span>Settings</span>
              </li>
              <li className="flex items-center text-red-600 hover:text-red-700 cursor-pointer">
                <FaSignOutAlt className="mr-4" />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hamburger Icon (only visible on mobile) */}
      <div className="lg:hidden flex items-center p-2">
        <button
          className="p-2 text-purple-600 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sample;

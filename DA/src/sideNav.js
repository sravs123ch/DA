import React, { useState } from "react";
import {
  FaHome,
  FaBook,
  FaUsers,
  FaCog,
  FaBars,
  FaEnvelope,
  FaTachometerAlt,
  FaTasks,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt className="text-purple-600" />,
      link: "#",
    },
    { name: "Inbox", icon: <FaEnvelope />, link: "#" },
    { name: "Lesson", icon: <FaBook />, link: "#" },
    { name: "Task", icon: <FaTasks />, link: "#" },
    { name: "Group", icon: <FaUsers />, link: "#" },
    { name: "Settings", icon: <FaCog />, link: "#" },
    { name: "Logout", icon: <FiLogOut className="text-red-500" />, link: "#" },
  ];

  return (
    <>
      {/* Sidebar toggle button for small screens */}
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <MdClose size={30} /> : <FaBars size={30} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-gray-700 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64 w-64 shadow-lg z-50`}
      >
        {/* Sidebar Header */}
        <div className="p-6 text-2xl font-semibold text-center border-b border-gray-200">
          <span className="text-purple-600">C!</span>{" "}
          <span className="text-gray-700">COURSEUE</span>
        </div>

        {/* Navigation Items */}
        <nav className="mt-8">
          <p className="ml-5 text-gray-500 uppercase text-sm">Overview</p>
          <ul>
            {menuItems.slice(0, 5).map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href={item.link}
                  className="flex items-center py-2 px-5 hover:bg-gray-100 transition-colors"
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Settings and Logout Section */}
          <p className="ml-5 mt-40 text-gray-500 uppercase text-sm">Settings</p>
          <ul>
            {menuItems.slice(5).map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href={item.link}
                  className={`flex items-center py-2 px-5 hover:bg-${
                    item.name === "Logout" ? "red-100" : "gray-100"
                  } transition-colors`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideNav;

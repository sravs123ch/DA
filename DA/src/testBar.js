import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserCog, FaSignOutAlt, FaHome, FaInfoCircle } from "react-icons/fa"; // Additional icons

const TestBar = () => {
  const [isOpen, setIsOpen] = useState(true); // Toggle state
  const location = useLocation(); // To track the current location

  // Dummy data for navigation items
  const mainItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
  ];

  const settingsItems = [
    { name: "Settings", path: "/settings", icon: <FaUserCog /> },
    { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
  ];

  // Reusable Logo Component
  const Logo = () => <span className="text-xl font-bold">My Logo</span>;

  const SectionHeading = ({ title }) => {
    return (
      <h2 className="text-lg font-semibold text-gray-300 my-2 px-4">{title}</h2>
    );
  };

  return (
    <div
      className={`flex flex-col h-full w-64 bg-blue-800 text-white transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } md:translate-x-0`}
    >
      <div className="flex items-center justify-between h-16 border-b border-gray-700 px-4">
        <Logo />
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-gray-400 hover:text-white"
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      <nav className="flex-1 flex flex-col overflow-y-auto">
        <ul className="p-4 flex-1">
          {/* Main Items Section */}
          <SectionHeading title="Main Menu" />
          {mainItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center p-2 rounded mb-2 hover:bg-gray-700 ${
                location.pathname === item.path ? "bg-gray-600" : ""
              }`}
              aria-label={item.name}
            >
              <span className="flex items-center justify-center w-8">
                {item.icon}
              </span>
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </ul>

        {/* Settings Section positioned at the bottom */}
        <div className="mt-auto p-4">
          <SectionHeading title="Settings" />
          {settingsItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center p-2 rounded mb-2 hover:bg-gray-700 ${
                location.pathname === item.path ? "bg-gray-600" : ""
              }`}
              aria-label={item.name}
            >
              <span className="flex items-center justify-center w-8">
                {item.icon}
              </span>
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default TestBar;

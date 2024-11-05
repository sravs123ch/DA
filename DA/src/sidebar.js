import React from "react";
import {
  AiOutlineDashboard,
  AiOutlineInbox,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  MdOutlineGroup,
  MdOutlineSettings,
  MdOutlineTask,
} from "react-icons/md";
import { BiBook } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-white shadow-lg w-64 p-5">
      {/* Logo */}
      <div>
        <div className="text-purple-600 font-bold text-2xl flex items-center mb-10">
          <span className="text-4xl mr-2">C!</span> COURSEUE
        </div>

        {/* Menu */}
        <div>
          <p className="text-gray-400 text-sm uppercase mb-4">Overview</p>
          <ul className="space-y-4">
            <li className="flex items-center text-purple-600 cursor-pointer">
              <AiOutlineDashboard className="mr-3" size={24} />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center text-gray-500 cursor-pointer">
              <AiOutlineInbox className="mr-3" size={24} />
              <span>Inbox</span>
            </li>
            <li className="flex items-center text-gray-500 cursor-pointer">
              <BiBook className="mr-3" size={24} />
              <span>Lesson</span>
            </li>
            <li className="flex items-center text-gray-500 cursor-pointer">
              <MdOutlineTask className="mr-3" size={24} />
              <span>Task</span>
            </li>
            <li className="flex items-center text-gray-500 cursor-pointer">
              <MdOutlineGroup className="mr-3" size={24} />
              <span>Group</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Settings and Logout */}
      <div>
        <p className="text-gray-400 text-sm uppercase mb-4">Settings</p>
        <ul className="space-y-4">
          <li className="flex items-center text-gray-500 cursor-pointer">
            <MdOutlineSettings className="mr-3" size={24} />
            <span>Settings</span>
          </li>
          <li className="flex items-center text-red-600 cursor-pointer">
            <AiOutlineLogout className="mr-3" size={24} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

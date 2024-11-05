import React from "react";
import { Outlet } from "react-router-dom";
import Sample from "./sample";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="lg:w-60 md:w-12">
        <Sample />
      </div>
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

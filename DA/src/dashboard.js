import React from "react";
import Sidebar from "./sidebar";
import Banner from "./banner";
import ContinueWatching from "./sections";
import Sample from "./sample";

const DashboardLayout = () => {
  return (
    <div className="h-screen lg:flex">
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-6">
          <Banner />
          <ContinueWatching />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

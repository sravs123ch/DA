import React from "react";
import { useRoutes } from "react-router-dom";
import DashboardLayout from "./dashboard";
import LoginTwo from "./loginTwo";
import NotFound from "./notFound";
import VideoPlayback from "./videoPlayback";
import TopicsGrid from "./TopicsGrid";
import VideoDetail from "./VideoDetail";
import ValidateUser from "./validateUser";
import MainLayout from "./mainLayout";
import ColorsPallete from "./colorsPallete";
import TestBar from "./testBar";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <LoginTwo />,
    },
    {
      path: "/validateuser",
      element: <ValidateUser />,
    },
    {
      element: <MainLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardLayout />,
        },
        {
          path: "/test",
          element: <TestBar />,
        },
        {
          path: "/colors",
          element: <ColorsPallete />,
        },
        {
          path: "/topicsgrid",
          element: <TopicsGrid />,
        },
        // {
        //   path: "/playback/:id",
        //   element: <VideoPlayback />,
        // },
        {
          path: "/playback/:courseId/:videoId",
          element: <VideoPlayback />,
        },

        // {
        //   path: "/video/:id",
        //   element: <VideoDetail />,
        // },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default AppRoutes;

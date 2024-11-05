import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";

const videoData = {
  1: {
    title: "React Basics",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description:
      "Learn the basics of React, including components, JSX, and state management.",
  },
  2: {
    title: "Node.js Fundamentals",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description:
      "Understand the fundamentals of Node.js, including Express, middleware, and routing.",
  },
  3: {
    title: "CSS Styling",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description:
      "Master modern CSS techniques like Flexbox, Grid, and CSS animations.",
  },
};

function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setVideo(videoData[id]);
  }, [id]);

  useEffect(() => {
    if (video && videoRef.current) {
      const savedTime = localStorage.getItem(`video-progress-${id}`);
      videoRef.current.src = video.videoUrl;
      videoRef.current.load();
      videoRef.current.onloadedmetadata = () => {
        if (savedTime) {
          videoRef.current.currentTime = parseFloat(savedTime);
        }
      };
    }
  }, [id, video]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (videoRef.current) {
        localStorage.setItem(
          `video-progress-${id}`,
          videoRef.current.currentTime
        );
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [id]);

  if (!video) {
    return <div>Loading...</div>;
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem(
        `video-progress-${id}`,
        videoRef.current.currentTime
      );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 w-72 h-full bg-white shadow-lg z-20
                transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0 transition-transform duration-300 ease-in-out
                flex-shrink-0`}
      >
        <div className="h-full overflow-y-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Topics</h2>
            <button className="text-black md:hidden" onClick={toggleSidebar}>
              &times; {/* Close button for mobile view */}
            </button>
          </div>
          <ul className="space-y-2">
            {Object.keys(videoData).map((key) => (
              <li key={key} className="border p-2 rounded hover:bg-gray-100">
                <Link
                  to={`/video/${key}`}
                  onClick={() => setSidebarOpen(false)}
                  className="block"
                >
                  <h3 className="font-semibold">{videoData[key].title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col h-full overflow-hidden">
        {/* Sidebar Toggle Button for mobile view */}
        <button
          className="md:hidden relative top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? "Close" : "Menu"}
        </button>

        <div className="flex-grow flex flex-col overflow-hidden p-4">
          <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
          <div className="flex-grow relative">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              controls
              onTimeUpdate={handleTimeUpdate}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="mt-4">{video.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;

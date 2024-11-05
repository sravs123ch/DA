// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import VideoPlayer from "./components/videoPlayer";
// import Playlist from "./components/playlist";
// import { routeNames } from "./Constants/constants";
// import { videoUrls } from "./Constants/videoUrl";

// function VideoPlayback() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const videoId = id ? parseInt(id) : 1;
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const videos = [
//     {
//       courseId: 101,
//       videoId: 1,
//       title: "Sample Video 1",
//       url: videoUrls[1],
//     },
//     {
//       courseId: 101,
//       videoId: 2,
//       title: "Sample Video 2",
//       url: videoUrls[2],
//     },
//     {
//       courseId: 102,
//       videoId: 3,
//       title: "Sample Video 3",
//       url: videoUrls[3],
//     },
//   ];

//   useEffect(() => {
//     const video = videos.find((video) => video.id === videoId);
//     setSelectedVideo(video);
//   }, [videoId]);

//   const handleVideoSelect = (video) => {
//     // Change the route to the selected video's ID
//     navigate(routeNames.videoPlayback(video.id));
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-600 text-white relative">
//       {/* Video Player Section */}
//       <div className="flex-1 flex flex-col justify-center items-center p-6 relative">
//         <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
//           Course Title
//         </h1>
//         {selectedVideo ? (
//           <>
//             <div className="relative w-full h-full">
//               {/* Video Player */}
//               <VideoPlayer video={selectedVideo} />

//               {/* Watermark */}
//               <div className="absolute bottom-4 right-4 text-gray-300 opacity-70 text-xs md:text-sm lg:text-base font-semibold pointer-events-none">
//                 User: ID123 | {new Date().toLocaleString()}
//               </div>
//             </div>
//             <h2 className="text-xl font-semibold mt-6 mb-4 text-center md:text-left">
//               Topic Description
//             </h2>
//             <p className="text-gray-200 text-sm text-center md:text-left">
//               This is a brief description of the topic covered in the video.
//               Learn more as you watch!
//             </p>
//           </>
//         ) : (
//           <p className="text-center text-gray-400">Video not found</p>
//         )}
//       </div>

//       {/* Playlist Section */}
//       <div className="w-full md:w-1/3 h-1/3 md:h-full overflow-y-auto bg-gray-400 p-6 rounded-t-3xl md:rounded-none">
//         <Playlist
//           videos={videos}
//           onVideoSelect={handleVideoSelect}
//           selectedVideo={selectedVideo}
//         />
//       </div>
//     </div>
//   );
// }

// export default VideoPlayback;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoPlayer from "./components/videoPlayer";
import Playlist from "./components/playlist";
import { routeNames } from "./Constants/constants";
import { videoUrls } from "./Constants/videoUrl";

// Define the video data outside the component to avoid re-creation on each render
const videos = [
  {
    // courseId: 101,
    videoId: 1,
    title: "Sample Video 1",
    url: videoUrls[1],
  },
  {
    // courseId: 101,
    videoId: 2,
    title: "Sample Video 2",
    url: videoUrls[2],
  },
  {
    // courseId: 101,
    videoId: 3,
    title: "Sample Video 3",
    url: videoUrls[3],
  },
];

function VideoPlayback() {
  const { courseId, videoId } = useParams(); // retrieve both courseId and videoId from the route
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Parse the videoId to ensure it’s a number
    const id = videoId ? parseInt(videoId) : 1;
    const video = videos.find((video) => video.videoId === id);
    setSelectedVideo(video || null); // Set to null if video not found to handle gracefully
  }, [videoId]); // Only depend on videoId to avoid the infinite loop

  const handleVideoSelect = (video) => {
    // Change the route to the selected video's ID
    navigate(routeNames.videoPlayback(video.courseId, video.videoId));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-600 text-white relative">
      {/* Video Player Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 relative">
        <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
          Course Title
        </h1>
        {selectedVideo ? (
          <>
            <div className="relative w-full h-full">
              {/* Video Player */}
              <VideoPlayer video={selectedVideo} />

              {/* Watermark */}
              <div className="absolute bottom-4 right-4 text-gray-300 opacity-70 text-xs md:text-sm lg:text-base font-semibold pointer-events-none">
                User: ID123 | {new Date().toLocaleString()}
              </div>
            </div>
            <h2 className="text-xl font-semibold mt-6 mb-4 text-center md:text-left">
              Topic Description
            </h2>
            <p className="text-gray-200 text-sm text-center md:text-left">
              This is a brief description of the topic covered in the video.
              Learn more as you watch!
            </p>
          </>
        ) : (
          <p className="text-center text-gray-400">Video not found</p>
        )}
      </div>

      {/* Playlist Section */}
      <div className="w-full md:w-1/3 h-1/3 md:h-full overflow-y-auto bg-gray-400 p-6 rounded-t-3xl md:rounded-none">
        <Playlist
          videos={videos}
          onVideoSelect={handleVideoSelect}
          selectedVideo={selectedVideo}
        />
      </div>
    </div>
  );
}

export default VideoPlayback;

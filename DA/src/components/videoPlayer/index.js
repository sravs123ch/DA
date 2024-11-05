// // src/components/VideoPlayer.js

import React, { useRef, useState, useEffect } from "react";

import {
  BsPlayFill,
  BsPauseFill,
  BsVolumeUp,
  BsFullscreen,
} from "react-icons/bs";

import { MdVolumeOff } from "react-icons/md";

function VideoPlayer({ video }) {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [isMuted, setIsMuted] = useState(false);

  const [volume, setVolume] = useState(1);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Set duration when metadata is loaded

    const handleLoadedMetadata = () => {
      setDuration(videoElement.duration);
    };

    // Update current time during playback

    const handleTimeUpdate = () => {
      setCurrentTime(videoElement.currentTime);
    };

    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);

    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);

      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  // Reset play state when the video source changes

  useEffect(() => {
    setIsPlaying(false);

    videoRef.current.pause();

    setCurrentTime(0); // Reset the current time to 0 when a new video is selected
  }, [video]);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);

    videoRef.current.muted = !isMuted;
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;

    setVolume(newVolume);

    videoRef.current.volume = newVolume;
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Format time to MM:SS format

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)

      .toString()

      .padStart(2, "0");

    const seconds = Math.floor(time % 60)

      .toString()

      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg bg-black">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={video.url}
        className="w-full h-full rounded-lg"
        controls={false}
        onClick={togglePlayPause}
      />

      {/* Initial Play Button */}

      {!isPlaying && (
        <button
          onClick={togglePlayPause}
          className="absolute inset-0 flex items-center justify-center text-white text-6xl bg-black bg-opacity-50 rounded-lg transition-all duration-300 hover:scale-105"
        >
          <BsPlayFill />
        </button>
      )}

      {/* Controls Overlay */}

      {isPlaying && (
        <div className="absolute bottom-0 w-full p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-black/70 to-transparent">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="text-white text-3xl hover:scale-110 transition-transform"
          >
            {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          </button>

          {/* Time Display */}
          <div className="text-white text-sm mx-4">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="text-white text-2xl hover:scale-110 transition-transform"
            >
              {isMuted || volume === 0 ? <MdVolumeOff /> : <BsVolumeUp />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-28 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={handleFullscreen}
            className="text-white text-2xl hover:scale-110 transition-transform"
          >
            <BsFullscreen />
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;

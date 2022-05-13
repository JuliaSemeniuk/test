import React from "react";
import VideoDetails from "./video-details/video-details";
import VideoHeader from "./video-header/video-header";
import VideoPlayer from "./video-player/video-player";

const QuizVideo = () => {
  return (
    <div className="container">
      <VideoHeader />
      <VideoPlayer />
      <VideoDetails />
    </div>
  );
};

export default QuizVideo;

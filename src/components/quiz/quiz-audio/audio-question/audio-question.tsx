import React from "react";
// import ReactAudioPlayer from "react-audio-player";
import AudioCover from "./audio-cover/audio-cover";
import AudioQuestionPlayer from "./audio-player/audio-player";
import AudioQuestionForm from "./audio-question-form/audio-question-form";

const AudioQuestion = () => {
  return (
    <div>
      <AudioCover />
      <AudioQuestionPlayer />
      <AudioQuestionForm />
    </div>
  );
};

export default AudioQuestion;

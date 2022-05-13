import React from "react";
import ReactAudioPlayer from "react-audio-player";

const AudioQuestionPlayer = () => {
  return (
    <div>
      <ReactAudioPlayer
        src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ce/d6/58/ced65843-c1d9-5592-08dd-acb86fdb93ac/mzaf_17338138310136790226.plus.aac.ep.m4a"
        autoPlay
        controls
      />
    </div>
  );
};

export default AudioQuestionPlayer;

import React from "react";
import QuizAudio from "../quiz/quiz-audio/quiz-audio";
import QuizHeader from "../quiz/quiz-header/quiz-header";
import Welcome from "../welcome/welcome";
import { shazam } from "../../services/shazam-service";

import "./main.css";
import QuizVideo from "../quiz/quiz-video/quiz-video";
import QuizFooter from "../quiz/quiz-footer/quiz-footer";
import Scores from "../scores/scores";

const Main = () => {
  const results = shazam.getTopTracksList().then((body) => {
    body.tracks.map((track: any) => {
      console.log(track.title, track.url, track.images.coverart);
    });

    return body.tracks;
  });
  return (
    <div className="container">
      <Welcome />
      <QuizHeader />
      <div>
        <div>
          <QuizAudio />
        </div>
        <div>
          <QuizVideo />
        </div>
        <div>
          <QuizFooter />
        </div>
      </div>

      <div>
        <Scores />
      </div>
    </div>
  );
};

export default Main;

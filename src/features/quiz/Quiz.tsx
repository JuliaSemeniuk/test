import React from "react";

import { useAppSelector } from "../../app/hooks";

import QuizAudio from "components/quiz/quiz-audio/quiz-audio";
import QuizHeader from "components/quiz/quiz-header/quiz-header";
import QuizVideo from "components/quiz/quiz-video/quiz-video";
import QuizFooter from "components/quiz/quiz-footer/quiz-footer";

const Quiz = () => {
  const quiz = useAppSelector((state) => state.quizData.quiz);
  console.log("quiz", quiz);
  return (
    <div>
      <QuizHeader />
      <QuizAudio />
      <QuizVideo />
      <QuizFooter />
    </div>
  );
};

export default Quiz;

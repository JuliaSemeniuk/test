import Question from "components/question/question";
import React from "react";

import { useAppSelector } from "../../app/hooks";

import { QuizItem } from "./quizSlice";

const currentQuiz = (quizesArr: QuizItem[]) => {
  const filteredQuizes = quizesArr.filter((quiz) => quiz.isFinished === false);
  return filteredQuizes[0];
};

const Quiz: React.FC = () => {
  const quizes = useAppSelector((state) => state.quizData.quiz);
  console.log("quiz", quizes);

  const quiz = currentQuiz(quizes);

  return (
    <div>
      <Question />
    </div>
  );
};

export default Quiz;

import Question from "components/question/question";
import React from "react";

import { useAppSelector } from "app/hooks";

import { QuizItem } from "./quizSlice";

const currentQuiz = (quizesArr: QuizItem[]) => {
  const filteredQuizes = quizesArr.filter((quiz) => quiz.isFinished === false);
  return filteredQuizes[0];
};

const Quiz: React.FC = () => {
  const quizes = useAppSelector((state) => state.quizData.quiz);

  const quiz = currentQuiz(quizes);
  console.log("quiz", quiz);

  if (!quiz) {
    return null;
  }

  return (
    <div>
      <Question quiz={quiz} />
    </div>
  );
};

export default Quiz;

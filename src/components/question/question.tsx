import Option from "components/option/option";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import Button from "components/shared/button/button";
import { QuizItem } from "features/quiz/quizSlice";

interface Props {
  quiz: QuizItem;
}

const Question: React.FC<Props> = ({ quiz }) => {
  const correctAnswer = quiz.data.filter(
    (currentAnswer) => currentAnswer.id === quiz.correctAnswerId
  )[0];

  return (
    <div className="question-container">
      <div className="question-header">
        <div className="question-title"></div>
        <div className="question-subtitle"></div>
      </div>
      <div className="question-player">
        <ReactAudioPlayer
          src={quiz.questionAudioUrl}
          autoPlay={false}
          controls
        />
      </div>
      <form className="question-form">
        {quiz.data.map((answer) => {
          return (
            <Option
              key={answer.id}
              {...answer}
              correctAnswerId={quiz.correctAnswerId}
              isCorrectSelected={correctAnswer.isAnswered}
            />
          );
        })}
      </form>
      {/* <div className="answer-container">
        <div className="answer-title"></div>
        <div className="answer-video">
          <ReactPlayer url="https://www.youtube.com/watch?v=KwIC6B_dvW4&ab_channel=JohnColtrane" />
        </div>
        <div className="answer-description"></div>
      </div> */}
      <div className="footer">
        <Button isCorrectAnswerSelected={correctAnswer.isAnswered} />
      </div>
    </div>
  );
};

export default Question;

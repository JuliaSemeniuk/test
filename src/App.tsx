import { useEffect } from "react";
import "./App.css";
import Quiz from "features/quiz/QuizPage";
import { QuizState, BackendQuiz } from "features/quiz/quizSlice";
import { useAppDispatch } from "app/hooks"; // global setState
import { setInitialData } from "features/quiz/quizSlice";

const url = "https://levi9-song-quiz.herokuapp.com/api/data";
const audioBaseUrl = "https://levi9-song-quiz.herokuapp.com/api/";
const dataForStore = (result: BackendQuiz[]): QuizState["quiz"] => {
  return result.map((item, index) => {
    return {
      ...item,
      questionAudioUrl: audioBaseUrl + item.data[0].audio,
      isFinished: false,
      isCorrectAnswerSelected: false,
      correctAnswerId: `${index + 1}-1`,
      data: item.data.map((song) => {
        return {
          ...song,
          isAnswered: false,
          isActive: false,
        };
      }),
    };
  });
};

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(url);
      const resultJson = await result.json();
      const data = dataForStore(resultJson);

      dispatch(setInitialData(data));
    };

    getData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        {/* <Welcome /> */}
        <Quiz />
        {/* <Scores /> */}
      </div>
    </div>
  );
}

export default App;

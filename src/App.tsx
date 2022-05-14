import React, { useEffect } from "react";
import "./App.css";
import Quiz from "features/quiz/QuizPage";

const url = "https://levi9-song-quiz.herokuapp.com/api/data";

function App() {
  useEffect(() => {
    const getData = async () => {
      const result = await fetch(url);
      const resultJson = await result.json();
      console.log("result:", resultJson);
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

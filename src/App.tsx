import React from "react";
import "./App.css";
import Quiz from "features/quiz/Quiz";

function App() {
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

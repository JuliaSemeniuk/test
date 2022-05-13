import React from "react";
import Arrow from "../../shared/arrow/arrow";
import Logo from "../../shared/logo/logo";

import HeaderItem from "./quiz-header-item/quiz-header-item";
import Scores from "./quiz-header-scores/quiz-header-scores";
import UserName from "./quiz-header-username/quiz-header-username";

import "./quiz-header.css";
import ProgressBar from "./quiz-progress/quiz-progress";

const QuizHeader = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Logo />
        </div>
        <div className="col-md-auto text-end">
          <UserName />
        </div>
        <div className="col col-lg-1 text-end">
          <Scores />
        </div>
      </div>
      <ProgressBar />
      <div className="row text-center">
        <div className="col ">
          <HeaderItem />
        </div>
        <div className="col">
          <Arrow />
        </div>
        <div className="col">
          <HeaderItem />
        </div>
        <div className="col">
          <Arrow />
        </div>
        <div className="col">
          <HeaderItem />
        </div>
        <div className="col">
          <Arrow />
        </div>
        <div className="col">
          <HeaderItem />
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;

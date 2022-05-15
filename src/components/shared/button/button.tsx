import React from "react";
import Arrow from "../arrow/arrow";

interface Props {
  isCorrectAnswerSelected: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { isCorrectAnswerSelected } = props;
  return (
    <div>
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="button">
        Toggle button
      </button>
      <button
        type="button"
        className="btn btn-primary active"
        data-bs-toggle="button"
        aria-pressed="true"
      >
        Active toggle button
      </button> */}
      <button
        type="button"
        className="btn btn-primary"
        disabled={!isCorrectAnswerSelected}
        data-bs-toggle="button"
      >
        Next
        {<Arrow />}
      </button>
    </div>
  );
};

export default Button;

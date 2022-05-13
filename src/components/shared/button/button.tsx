import React from "react";
import Arrow from "../arrow/arrow";

const Button = () => {
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
        disabled
        data-bs-toggle="button"
      >
        Disabled
        {<Arrow />}
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import Button from "../shared/button/button";
import Logo from "../shared/logo/logo";

const Scores = () => {
  return (
    <div>
      <Logo />
      <div>
        <div>Final Score</div>
        <div>
          <div>
            <h1>Iryna, did so great!</h1>
            <p>
              You got 13 out of 20 points. You are definitely a music lover!
            </p>
          </div>
          <div>{/* <Button /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Scores;

import React from "react";
import Button from "../shared/button/button";
import Logo from "../shared/logo/logo";

const Welcome = () => {
  return (
    <div>
      <Logo />

      <h1>Welcome!</h1>
      <p>Please enter your name and lets start our quiz! </p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type your name here..."
          aria-label="username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Welcome;

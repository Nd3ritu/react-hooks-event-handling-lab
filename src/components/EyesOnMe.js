// Code EyesOnMe Component Here<
import React, { useState } from "react";

function EyesOnMe() {
  const [focus, setFocus] = useState(false);
  function focussing() {
    console.log("Good!");
    setFocus(true);
  }

  function blurring() {
    setFocus(false);
    console.log("Hey! Eyes on me!");
  }

  return (
    <div>
      <button onFocus={focussing} onBlur={blurring}>
        {focus ? console.log("Good!") : console.log("Hey! Eyes on me!")}
        <p>Eyes on me</p>
      </button>
    </div>
  );
}

export default EyesOnMe;

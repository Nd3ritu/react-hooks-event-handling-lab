// Code Keypad Component Here
import React, { useState } from "react";

function Keypad() {
  const [pass, setPass] = useState("");

  function handlePass(e) {
    console.log("Entering password...");
    setPass(e.target.value);
  }
  return (
    <div>
      <input type="password" value={pass} onChange={handlePass} />
    </div>
  );
}

export default Keypad;

import React from "react";
import NumPad from "./src/NumPad";

const App = () => {
  return (
    <NumPad
      width="100%"
      rounded={true}
      editable={true}
      backgroundColor="#ffffff"
      btnColor="#e7e7e7"
      editable={false}
      roundedInput
      fontColor="#000000"
    />
  );
};

export default App;

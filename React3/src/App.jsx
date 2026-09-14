import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(1);

  const handle = () => {
    setNum(()=>{
      return num+1
    });
  };
  console.log("Night")

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handle}>Add</button>
    </div>
  );
};

export default App;

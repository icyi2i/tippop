import React, { useState } from "react";
import TipPop from "./components/TipPop";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>TipPop</h1>

      <button onClick={() => setShow(!show)}>Toggle Tip</button>

      <TipPop tip="A tip to be shown" show={show} />
    </div>
  );
};

export default App;

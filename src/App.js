import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const subtrair = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="contador">
      <h1 className="titulo">{count}</h1>
      <div className="acoes">
        <button disabled={count === 0} onClick={() => subtrair()}>
          -
        </button>
        <button disabled={count === 0} onClick={() => setCount(0)}>
          Zerar
        </button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;

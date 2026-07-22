import { useState } from "react";
import "./App.css";
import { usePrev } from "./hooks/useprev";

function App() {
  const [state, setState] = useState(0); // 2=>3
  const prev = usePrev(state); // 1=>2

  return (
    <>
      <p>{state}</p>

      <button
        onClick={() => {
          setState((curr) => curr + 1);
        }}
      >
        Click Me
      </button>

      <p>The previous value was {prev}</p>
    </>
  );
}

export default App;

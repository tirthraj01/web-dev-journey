import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function focusOnInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      Username: <input ref={inputRef} type="text" />
      <br />
      Password: <input type="password" />
      <br />
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {
  return (
    <div style={{ background: "White", height: "100vh" }}>
      <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
  let [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>

      {isVisible && (
        <p>This message is conditionally rendered!</p>
      )}
    </div>
  );
};

export default App;

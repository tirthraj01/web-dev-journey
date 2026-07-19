import { useState } from "react";

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return (
    <div>
      {bulbOn ? (
        <img
          src="https://i.pinimg.com/736x/4c/71/c1/4c71c165d931eadfc8556b7757779c03.jpg"
          width={300}
        />
      ) : (
        <img
          src="https://i.pinimg.com/1200x/cc/5d/d4/cc5dd4f6e7ff813bfd04c6733f7a01a8.jpg"
          width={300}
        />
      )}
    </div>
  );
}

function ToggleBulbState({ bulbOn, setBulbOn }) {
  function toggleOn() {
    setBulbOn(true);
  }

  function toggleOff() {
    setBulbOn(false);
  }

  return (
    <div>
      <button
        onClick={toggleOn}
        style={{
          backgroundColor: bulbOn ? "green" : "white",
          color: bulbOn ? "white" : "black",
        }}
      >
        Turn it on
      </button>

      <button
        onClick={toggleOff}
        style={{
          backgroundColor: bulbOn ? "white" : "green",
          color: bulbOn ? "black" : "white",
        }}
      >
        Turn it off
      </button>
    </div>
  );
}

export default App;

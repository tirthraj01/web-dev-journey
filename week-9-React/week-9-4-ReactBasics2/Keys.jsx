import React from "react";

function App() {
  return (
    <div>
      {[
        <Todo key={1} title={"Eat Healthy Food"} done={true} />,
        <Todo key={2} title={"Go to gym"} done={false} />,
        <Todo key={3} title={"Explored blockchain and ETH"} done={true} />
      ]}
    </div>
  );
}

function Todo({ title, done }) {
  return (
    <div>
      <br></br>
      {title} - {done ? "Yes Donee!" : "Do it Quickly!!"}
    </div>
  );
}

export default App;

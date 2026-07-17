import { useState } from "react";

function App() {
  return (
    <div style={{ background: "Pink", height: "100vh" }}>
      <Notification />
    </div>
  );
}

const Notification = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(notificationCount + 1);
  }

  return (
    <div>
      <div>
        <button onClick={increment}>
          Increase Count
        </button>
      </div>

      <div>
        {notificationCount}
      </div>
    </div>
  );
};

export default App;

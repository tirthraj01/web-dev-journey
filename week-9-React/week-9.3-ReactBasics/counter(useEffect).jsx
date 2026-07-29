import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  function increaseCount() {
    setCount(function(currentValue) {
      console.log("how many times it runs " + currentValue);
      return currentValue + 1;
    })
  }

  useEffect(function() {
    console.log("How many times useEffect runs");

    const interval = setInterval(increaseCount, 1000);

    return function() {
      clearInterval(interval);
    };
  }, [])

  return (
    <div>
      {count}
    </div>
  )
}

export default App

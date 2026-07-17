import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  function increaseCount(){
    setCount (function(currentValue){
      console.log("how many times it runs " + currentValue);
      return currentValue+ 1;
    })
  }

  useEffect (function(){
    console.log("How many times it runs")
    setInterval(increaseCount,1000);
  },[])

  return <div>
    {count}
  </div>
}


export default App

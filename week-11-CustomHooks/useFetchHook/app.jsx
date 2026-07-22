import { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const {finalData, loading} = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
    + currentPost);

    if(loading) {
      return <div>
        Loading......
      </div>
    }

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  );
}

export default App; 

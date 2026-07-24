import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Otp } from "./components/Otp";

function App() {
  return (
    <div  className="h-screen bg-blue-700 flex justify-center items-center">
      <br/><br/><br/><br/>
      <Input type={"text"} placeholder={"Username"} />
      <Button disabled={false}>Sign up</Button>
      
    </div>
  );
}

export default App;

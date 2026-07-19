import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div style={{background:"gray", borderTop: "2px solid black", paddingTop: "10px" }}>
        <Link to="/">Allen</Link> | 
        <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
      </div>

      <div style={{ borderTop: "2px solid black", paddingTop: "10px" }}> </div>

        <Routes>
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          />
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function ErrorPage() {
  return <div> 
    <br/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNz0qeZZ1qNjBbEtOoTHPSy5qHXGCUTDmVMyWQd1f6g&s=10"></img>
  </div>
}

function Landing() {
  return <div>Welcome to Allen
    <br/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-X33n3-Gtp4oXv9qZDqmoRYTHiczUbuiBdsqX6J5TgQ&s=10"></img>
  </div>
}

function Class11Program() {
    return <div>NEET programs for Class 11th
     <br/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREGTB_kCswcubdM3YU1JLkC4L5Ya6ySSnvuRvG3Djgg&s=10"></img>
  </div>
}

function Class12Program() {

  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }
  return <div>NEET programs for Class 12th
    <br/>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPMenHJahBZoUpp-j6ht4zpGPGbAcCDgDINPp_mdO3A&s=10"></img>
  <button onClick={redirectUser}>Go back to Landing page</button>
  </div>
}

export default App;

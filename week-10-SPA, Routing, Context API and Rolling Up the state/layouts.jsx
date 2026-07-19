import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />}>

            <Route index element={<Landing />} />

            <Route
              path="neet/online-coaching-class-11"
              element={<Class11Program />}
            />

            <Route
              path="neet/online-coaching-class-12"
              element={<Class12Program />}
            />

            <Route path="*" element={<ErrorPage />} />

          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <div style={{height:"90vh"}}>

      <Header/>
        <div style={{ borderTop: "2px solid black", paddingTop: "10px", background:"darkgray" }}></div>

        <div style={{height:"80vh", background:"darkgray"}}>
          <Outlet />
        </div>
      <Footer/>
    </div>
  );
}

function Header(){
  return <div style={{background:"gray", borderTop: "2px solid black", paddingTop: "10px" }}>

          <Link to="/" ><b style={{fontSize:30, marginLeft:20,marginRight:20}}> Allen </b></Link> 
          <Link to="/neet/online-coaching-class-11"><b style={{fontSize:20,fontfamily: "Helvetica", marginLeft:20,marginRight:20}}>|Class 11|</b></Link>
          <Link to="/neet/online-coaching-class-12"><b onClick={{background:"gray"}}style={{fontSize:20, marginLeft:20,marginRight:20}}>|Class 12|</b></Link>
        </div>
}

function Footer(){
  return <div style={{fontSize:20,background:"gray", borderTop: "2px solid black", paddingTop: "10px" }}>
    Thanks for Visiting ! <br/>
    Contact us | Details 
        </div>
}

function ErrorPage() {
  return (
    <div>
      <br />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNz0qeZZ1qNjBbEtOoTHPSy5qHXGCUTDmVMyWQd1f6g&s=10" style={{height:"70vh"}}/>
    </div>
  );
}

function Landing() {
  return (
    <div>
      <div style={{fontSize:20}}>
        Welcome to Allen
      </div>
      <br />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-X33n3-Gtp4oXv9qZDqmoRYTHiczUbuiBdsqX6J5TgQ&s=10" style={{height:"70vh"}} />
    </div>
  );
}

function Class11Program() {
  return (
    <div>
      NEET programs for Class 11th
      <br />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREGTB_kCswcubdM3YU1JLkC4L5Ya6ySSnvuRvG3Djgg&s=10" />
    </div>
  );
}

function Class12Program() {

  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      NEET programs for Class 12th
      <br />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPMenHJahBZoUpp-j6ht4zpGPGbAcCDgDINPp_mdO3A&s=10" />
      <br />
      <button onClick={redirectUser}>Go back to Landing page</button>
    </div>
  );
}

export default App;

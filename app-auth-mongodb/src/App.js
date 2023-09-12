import Connexion from "./Composants/auth/Connexion";
import './App.css'
import Incription from "./Composants/auth/Inscription";
import Home from "./Composants/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/* <Connexion/> */}
     {/* <Incription/> */}
     <Router>
        <Routes>
          <Route path="/" element={<Incription/>}/>
          <Route path="/signup" element={<Connexion/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

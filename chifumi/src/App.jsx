import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login"
import CreateAcc from "./Pages/CreateAcc"
import Profile from "./Pages/Profile"
import Game from "./Pages/Game";


function App() {
  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/CreateAcc" element={<CreateAcc />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Game" element={<Game/>} />
        </Routes>
      </div>
    </Router>
         
    
    </>
  );
}

export default App
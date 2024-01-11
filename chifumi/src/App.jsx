import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login"
import CreateAcc from "./CreateAcc"


function App() {

  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/CreateAcc" element={<CreateAcc />} />
        </Routes>
      </div>
    </Router>
         
    
    </>
  );
}

export default App
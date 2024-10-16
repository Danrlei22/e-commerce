
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
    </div>
    </Router>
  );
}

export default App;

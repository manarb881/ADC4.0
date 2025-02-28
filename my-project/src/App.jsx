import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/page-1/Welcome";
import Challenges from "./pages/page-2/Challenges";

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/Challenges" element={<Challenges/>} />

      </Routes>
    </Router>
  );
}

export default App;

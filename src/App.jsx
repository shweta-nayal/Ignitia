import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import Events from "./components/Events";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only if not on Home page */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;

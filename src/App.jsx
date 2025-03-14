import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import Events from "./components/Events";
import Coordinators from "./components/Coordinators";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only if not on Home page */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/coordinators" element={<Coordinators />} />
      </Routes>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;

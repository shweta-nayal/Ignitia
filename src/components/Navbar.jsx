import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import enigmaLogo from "../assets/enigma.jpg"; 
import dseuLogo from "../assets/dseu.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center w-100">
      
        <div className="d-flex align-items-center">
          <img src={enigmaLogo} alt="Enigma Society" className="nav-logo" />
          <Link className="navbar-brand ms-2" to="/">Ignitia X Amogh</Link>
        </div>

        <div className="d-flex align-items-center">
          <Link className="btn btn-outline-light me-3" to="/events">Events</Link>
          <img src={dseuLogo} alt="College Logo" className="nav-logo" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import enigmaLogo from "../assets/dseu1.png";
import dseuLogo from "../assets/dseu1.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        {/* Left Side - Enigma Logo & Title */}
        <div className="navbar-left">
          <img src={enigmaLogo} alt="Enigma Society" className="nav-logo" />
          <Link className="navbar-brand" to="/">Ignitia X Amogh</Link>
        </div>

        {/* Right Side - Events Button & DSEU Logo */}
        <div className="navbar-right">
          <Link className="btn btn-outline-light" to="/events">Events</Link>
          <img src={dseuLogo} alt="College Logo" className="nav-logo" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

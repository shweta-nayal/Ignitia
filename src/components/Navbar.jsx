import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Ignitia X Amogh</Link>
        <Link className="btn btn-outline-light" to="/events">Events</Link>
      </div>
    </nav>
  );
}

export default Navbar;

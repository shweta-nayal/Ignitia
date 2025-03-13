import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Import custom styling

function Home() {
  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center vh-100 vw-100 text-center">
      <h1 className="event-name">Ignitia X Amogh</h1>
      <Link to="/events" className="btn btn-primary btn-lg mt-4">Visit Events Page</Link>
    </div>
  );
}

export default Home;

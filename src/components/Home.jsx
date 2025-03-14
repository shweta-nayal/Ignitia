import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/events"); 
    }, 1500);
  };

  return (
    <div className={`home-container ${loading ? "blurred" : ""}`}>
      <div class="background-blur"></div>  
      <div className="background"></div>
      <div className={`overlay ${loading ? "hidden" : ""}`}>
        <h1 className="event-name">Ignitia X Amogh</h1>
        <button className="btn btn-primary btn-lg mt-4" onClick={handleButtonClick}>
          Visit Events Page
        </button>
      </div>

      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
}

export default Home;

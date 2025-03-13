import React, { useState } from "react";
import "../styles/Events.css";
import ideathonImg from "../assets/ideathon.jpeg";
import bgmiImg from "../assets/bgmi.jpeg";
import webImg from "../assets/web.jpeg";
import logoImg from "../assets/logo.jpeg";
import quizImg from "../assets/quiz.jpeg";
import spellbeeImg from "../assets/spellbee.jpeg";

const eventsData = [
  { 
    name: "Think-A-Ton", 
    image: ideathonImg, 
    description: (
      <>
        🚀 <strong>IDEATHON 2025 – Unleash Your Innovation..!!</strong> 💡 <br /><br />
        Enigma presents IDEATHON 2025, a platform for forward-thinking individuals to ideate, collaborate, and innovate.
        <br /><br />
        <strong>Why Participate?</strong>
        <ul>
          <li>💡 Innovate with Purpose – Tackle global issues with groundbreaking ideas.</li>
          <li>🤝 Collaborate & Network – Work with like-minded individuals and industry experts.</li>
          <li>🏆 Compete & Win – Showcase your potential and earn recognition with exciting prizes.</li>
        </ul>
        <strong>What Awaits You?</strong>
        <ul>
          <li>🌍 Impact-Driven Innovation – Create solutions with real-world applications.</li>
          <li>📈 Skill Development – Enhance your problem-solving and analytical abilities.</li>
          <li>🔗 Exclusive Opportunities – Gain exposure, build connections, and learn from professionals.</li>
        </ul>
        <strong>📅 DATE:</strong> 20th March 2025 <br />
        <strong>📍 VENUE:</strong> Bhai Parmanand Shakarpur Campus: II, DSEU
      </>
    ),
    registerLink: "https://docs.google.com/forms/d/1xqKOC0z25l1a83syNHJcvGcGZ2IM6lHTVaqwUh-a-io/edit",
  },
  { 
    name: "BGMI", 
    image: bgmiImg, 
    description: "Battle it out in the ultimate BGMI tournament!", 
    registerLink: "https://forms.gle/your-bgmi-link" 
  },
  { 
    name: "Logo Designing", 
    image: logoImg, 
    description: "Showcase your creativity in our logo design contest!", 
    registerLink: "https://forms.gle/your-logo-link" 
  },
  { 
    name: "Tech Quiz", 
    image: quizImg, 
    description: "Test your tech knowledge in this fun quiz!", 
    registerLink: "https://forms.gle/your-techquiz-link" 
  },
  { 
    name: "Spell Bee", 
    image: spellbeeImg, 
    description: "Compete in a spelling challenge like never before!", 
    registerLink: "https://forms.gle/your-spellbee-link" 
  },
  { 
    name: "Business Quiz", 
    image: "/images/business-quiz.jpg", 
    description: "Prove your business acumen with this quiz!", 
    registerLink: "https://forms.gle/your-businessquiz-link" 
  },
  { 
    name: "Digital Poster Design", 
    image: "/images/digital-poster.jpg", 
    description: "Create stunning posters using digital tools!", 
    registerLink: "https://forms.gle/your-digitalposter-link" 
  },
  { 
    name: "Web Designing", 
    image: webImg, 
    description: "Design beautiful, responsive websites!", 
    registerLink: "https://forms.gle/your-webdesign-link" 
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className={`events-page ${selectedEvent ? "blurred" : ""}`}>
      <h1 className="events-heading">OUR EVENTS</h1>
      <div className="events-container">
        {eventsData.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <h2>{event.name}</h2>
            <button onClick={() => setSelectedEvent(event)}>Register</button>
          </div>
        ))}
      </div>

      {/* Pop-up Window */}
      {selectedEvent && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={() => setSelectedEvent(null)}>✖</button>
            <h2>{selectedEvent.name}</h2>
            <p>{selectedEvent.description}</p>
            <a href={selectedEvent.registerLink} target="_blank" rel="noopener noreferrer">
              <button className="register-button">Register Now</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;

import React, { useState } from "react";
import "../styles/Events.css";
import ideathonImg from "../assets/ideathon.jpeg";
import bgmiImg from "../assets/bgmi.jpeg";
import webImg from "../assets/web.jpeg";
import logoImg from "../assets/logo.jpeg";
import quizImg from "../assets/quiz.jpeg";
import spellbeeImg from "../assets/spellbee.jpeg";
import buisnessImg from "../assets/buisness.jpeg";

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
        <strong>📅 DATE:</strong> 20<sup>th</sup> March 2025 <br />
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
    name: "LOGOVATION", 
    image: logoImg, 
    description: `🎨 LOGOVATION 2025 – Innovate, Design & Conquer! ✨

        Enigma presents LOGOVATION 2025, a digital logo design contest that celebrates creativity and innovation. 
        This is your chance to craft the identity of tomorrow, showcasing your artistic skills and visionary ideas.
        
        💡 Why Participate?
        🎨 Design with Purpose – Create logos that leave a lasting impression.
        🌟 Showcase Your Talent – Put your creative genius on display & get recognized.
        🏆 Compete & Win – Clear 3 rounds, stand out, and win exciting prizes!
        
        🚀 What Awaits You?
        🎭 Creative Impact – Develop designs that resonate with the world using Canva & Figma.
        📈 Skill Enhancement – Sharpen your design & branding abilities.
        🌐 Exclusive Opportunities – Build your portfolio & gain industry recognition.
        
        📅 DATE: 20th March 2025
        🕛 TIMINGS: 12 PM - 2 PM
        📍 VENUE: Bhai Parmanand Shakarpur Campus-II, DSEU`,
        registerLink: "https://your-registration-link.com",
    },
  { 
    name: "QUIZORA", 
    image: quizImg, 
    description: `🌟 QUIZORA 2025 – Think. Answer. Conquer! 🧠💻

        Enigma presents QUIZORA 2025, the ultimate Tech Quiz Challenge where knowledge meets competition! 
        Whether you're a tech geek, coding wizard, or trivia enthusiast, this is your chance to prove your 
        expertise and win exciting prizes!
        
        💡 Why Participate?
        🔍 Test Your Tech IQ – Challenge yourself with mind-bending tech trivia.
        🤝 Compete & Collaborate – Go head-to-head with the sharpest minds.
        🏆 Win Big – Earn recognition, prizes, and the title of Tech Quiz Champion!
        
        🚀 What Awaits You?
        📚 Diverse Topics – Covering programming, AI, cybersecurity, and more!
        💡 Brainstorm & Strategize – Use logic, speed, and teamwork to dominate.
        🔗 Exclusive Opportunities – Network with fellow tech enthusiasts and experts.
        
        📅 DATE: 20th March 2025
        📍 VENUE: Bhai Parmanand, Shakarpur Campus-II, DSEU`,
        registerLink: "https://your-registration-link.com",
    },
  { 
    name: "SPELLBOUND", 
    image: spellbeeImg, 
    description: `📚 SPELLBOUND – The Ultimate Spell Bee Contest! 🧠

        Join SPELLBOUND, a prestigious spelling competition designed to enhance language proficiency, 
        expand vocabulary, and boost cognitive skills. This event offers a fun yet competitive platform 
        for participants to showcase their linguistic abilities.
        
        🌟 Why Participate?
        📖 Comprehensive Vocabulary Challenges – Test & expand your linguistic knowledge.
        🧠 Cognitive Development – Enhance mental agility, concentration & quick thinking.
        📚 Educational Enrichment – Learn about word origins, etymology & advanced vocabulary.
        
        🚀 How to Prepare?
        ✔ Register Now: Secure your participation by signing up [here](https://docs.google.com/forms/d/1PPZ6TzNgEuKtUFl1mzEk0JdWCXmjooJMokxpeeYgvUY/edit).
        ✔ Enhance Your Vocabulary: Dedicate time to word learning & spelling practice.
        ✔ Compete with Confidence: Approach the contest with enthusiasm & a willingness to learn!
        
        📍 Join us and celebrate the power of words & the pursuit of linguistic excellence!`,
        registerLink: "https://docs.google.com/forms/d/1PPZ6TzNgEuKtUFl1mzEk0JdWCXmjooJMokxpeeYgvUY/edit",
    },
  { 
    name: "Business Quiz", 
    image: buisnessImg, 
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

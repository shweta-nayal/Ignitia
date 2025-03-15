import React, { useState } from "react";
import "../styles/Events.css";
import ideathonImg from "../assets/ideathon.jpeg";
import bgmiImg from "../assets/bgmi.jpeg";
import webImg from "../assets/web.jpeg";
import logoImg from "../assets/logo.jpeg";
import posterImg from "../assets/poster.jpeg";
import quizImg from "../assets/quiz.jpeg";
import spellbeeImg from "../assets/spellbee.jpeg";
import buisnessImg from "../assets/buisness.jpeg";

const eventsData = [
  { 
    name: "THINK-A-TON", 
    image: ideathonImg, 
    description: (
      <>
        🚀 <strong>IDEATHON 2025 – Unleash Your Innovation..!!</strong> 💡 <br /><br />
        Enigma presents IDEATHON 2025, a platform for forward-thinking individuals to ideate, collaborate, and innovate.
        <br /><br />
        <strong>Why Participate..??</strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li>💡 <strong>Innovate with Purpose –</strong> Tackle global issues with groundbreaking ideas.</li>
          <li>🤝 <strong>Collaborate & Network –</strong> Work with like-minded individuals and industry experts.</li>
          <li>🏆 <strong>Compete & Win –</strong> Showcase your potential and earn recognition with exciting prizes.</li>
        </ul>
        <strong>What Awaits You..??</strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li>🌍 <strong>Impact-Driven Innovation –</strong> Create solutions with real-world applications.</li>
          <li>📈 <strong>Skill Development –</strong> Enhance your problem-solving and analytical abilities.</li>
          <li>🔗 <strong>Exclusive Opportunities –</strong> Gain exposure, build connections, and learn from professionals.</li>
        </ul>
        <strong>📅 DATE:</strong> 20<sup>th</sup> March 2025 <br />
        <strong>🕒 Timings:</strong> 11 a.m. – 4 p.m. <br />
        <strong>📍 VENUE:</strong> Bhai Parmanand Shakarpur Campus: II, DSEU
      </>
    ),
    registerLink: "https://docs.google.com/forms/d/1xqKOC0z25l1a83syNHJcvGcGZ2IM6lHTVaqwUh-a-io/edit",
  },
  { 
    name: "BGMI", 
    image: bgmiImg, 
    description: (
  <>
    🚀 <strong>Loot, Shoot, Dominate...!!</strong> 🎮 <br /><br />
    The <strong>BGMI Tournament – March 20, 2025</strong> is here! Get ready for high-intensity battles, top-tier competition, and epic rewards.  
    <br /><br />
    <strong>Why Join?</strong>
    <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
      <li>🏆 <strong>Epic Showdowns</strong> – Test your skills in heart-pounding battles.</li>
      <li>💥 <strong>Top-Tier Competition</strong> – Face off against the best players.</li>
      <li>🎁 <strong>Big Prizes</strong> – More than just bragging rights await!</li>
    </ul>
    <strong>What Awaits You?</strong>
    <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
      <li>🌟 <strong>Unleash Your Inner Warrior</strong> – Prove your dominance.</li>
      <li>🔥 <strong>Squad Up & Win</strong> – Teamwork is the key to victory.</li>
      <li>🎮 <strong>Unforgettable Moments</strong> – Learn from the best & make history.</li>
    </ul>
    <strong>📅 DATE:</strong> 20<sup>th</sup> March 2025 <br />
        <strong>🕒 Timings:</strong> 2 p.m. – 4 p.m. <br />
    <strong>📍 VENUE:</strong> Bhai Parmanand Shakarpur Campus: II, DSEU
  </>
),
 
    registerLink: "https://docs.google.com/forms/d/1n4P6SydYcjOMHGeB8PHbNZBsw8jGsHf9ngH04aiJ0aM/edit" 
  },
  { 
    name: "LOGOVATION", 
    image: logoImg, 
    description: (
      <>
        🚀 <strong>Logovation 2025 - Inovate your own logos and unleash your Creativity..!!✨</strong> 💡 <br /><br />
        Enigma presents Logovation 2025, a digital logo design contest that celebrates the power of design and creativity. 
        <br /><br />
        <strong>Why Participate..??</strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li>🎨<strong>Design with Purpose -</strong> Create logos that leave a lasting impression and inspire. </li>
          <li>🤝 <strong>Showcase Your Talent -</strong> Put your creative genius mind on display and get recognized.</li>
          <li>🏆<strong>Compete & Win -</strong> Clear all the 3 rounds, stand out and win exciting prizes while gaining exposure.</li>
        </ul>
        <strong>What Awaits You..??</strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li>🌍 <strong>Creative Impact –</strong> Develop a design that resonates with the world using Canva and Figma. </li>
          <li>📈 <strong>Skill Enhancement –</strong> Enhance your problem-solving and analytical abilities.</li>
          <li>🔗 Exclusive Opportunities – Build your portfolio and gain recognition from industry experts.</li>
        </ul>
        <strong>📅 DATE:</strong> 20<sup>th</sup> March 2025 <br />
        <strong>🕒 Timings:</strong> 12 p.m. – 2 p.m. <br />
        <strong>📍 VENUE:</strong> Bhai Parmanand Shakarpur Campus: II, DSEU
      </>
    ),
    registerLink: "https://docs.google.com/forms/d/1wS21e_8Cln1Fg1UuuOLhWJi2DigaNf23jGr9IPZClTY/edit",
    },
  { 
    name: "QUIZORA", 
    image: quizImg, 
    description: (
      <>
        🌟 <strong>QUIZORA 2025 – Think. Answer. Conquer! 🧠💻</strong> 💡 <br /><br />
        Enigma presents QUIZORA 2025, the ultimate Tech Quiz Challenge where knowledge meets competition..!!
        <br /><br />
        <strong>Why Participate..??</strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li>🔍 <strong>Test Your Tech IQ –</strong> Challenge yourself with mind-bending tech trivia.</li>
          <li>🤝 <strong>Compete & Collaborate –</strong> Go head-to-head with the sharpest minds.</li>
          <li>🏆 <strong>Win Big –</strong> Earn recognition, prizes, and the title of Tech Quiz Champion!</li>
        </ul>
        <strong>What Awaits You..??</strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li><strong>📚 Diverse Questions –</strong> Covering programming, AI, cybersecurity, and more!</li>
          <li><strong>💡 Brainstorm & Strategize –</strong> Use logic, speed, and teamwork to dominate.</li>
          <li><strong>🔗 Exclusive Opportunities –</strong> Network with fellow tech enthusiasts and experts.</li>
        </ul>
        <strong>📅 DATE:</strong> 20<sup>th</sup> March 2025 <br />
        <strong>🕒 Timings:</strong> 12 p.m. – 1 p.m. <br />
        <strong>📍 VENUE:</strong> Bhai Parmanand Shakarpur Campus: II, DSEU
      </>
    ),
    registerLink: "https://docs.google.com/forms/d/1WvSbKAXDG8ypLaz3SbGpeRc_9vcGiPcQPX1eGa-HV_I/edit",
    },
  { 
    name: "SPELLBOUND", 
    image: spellbeeImg, 
    description: (
      <>
        🚀 <strong>📚 Spellbound Spell Bee Contest</strong> 💡 <br /><br />
         Cultivating Communication and Cognitive Excellence 
         <br /><br />
        <strong>Why Participate..??</strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li>
            ✅ <strong>Comprehensive Vocabulary Challenges –</strong> Engage in spelling rounds designed to test and expand linguistic knowledge.
          </li>
          <li>
            ✅ <strong>Cognitive Development –</strong> Boost mental agility, concentration, and the ability to perform under pressure.
          </li>
          <li>
            ✅ <strong>Educational Enrichment – </strong> Learn about etymology, word origins, and the nuances of the English language.
          </li>
          <li>
            ✅ <strong>Showcase Linguistic Abilities –</strong> Compete in an engaging environment to enhance language proficiency.
          </li>
        </ul>
        
        <strong>📅 DATE:</strong> 20<sup>th</sup> March 2025 <br />
        <strong>🕒 Timings:</strong> 11 a.m. – 12 p.m. <br />
        <strong>📍 VENUE:</strong> Bhai Parmanand Shakarpur Campus: II, DSEU
      </>
    ),
    registerLink: "https://docs.google.com/forms/d/1PPZ6TzNgEuKtUFl1mzEk0JdWCXmjooJMokxpeeYgvUY/edit",
    },
  { 
    name: "BUISNESS QUIZ", 
    image: buisnessImg, 
    description: (
      <>
        <strong>🔥 Business Quiz: The Ultimate Challenge 🔥</strong> 💡 <br /><br />
        📢 Get ready to quiz your way to the top! Show off your business acumen and compete with the best minds.
        <br /><br />
        <strong>📚 Quiz Categories:</strong>
        <ul style={{ listStyle: "none", paddingLeft: 90, textAlign: "left" }}>
          <li>
            ✅ Business & Economics 💹
          </li>
          <li>
            ✅ Finance & Accounting 💰
          </li>
          <li>
            ✅ Entrepreneurship & Management 🚀
          </li>
          <li>
            ✅ International Business 🌍
          </li>
        </ul>
        <strong>🏆 Prizes & Recognition:</strong>
        <ul style={{ listStyle: "none", paddingLeft: 90, textAlign: "left" }}>
          <li>
            🥇 Cash prizes for the top three teams 💵
          </li>
          <li>
            🎖 Certificates for all participants 🏅
          </li>
          <li>
            🏆 Trophy for the winning team 🎉
          </li>
        </ul>
        
        <strong>📅 DATE:</strong> 20<sup>th</sup> March 2025 <br />
        <strong>🕒 Timings:</strong> 12 p.m. – 1 p.m. <br />
        <strong>📍 VENUE:</strong> Bhai Parmanand Shakarpur Campus: II, DSEU
      </>
    ),
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfzxzhlXimR2iBUyBFPcxiqHoLO7WYEDa8yfHvlKdcKzSaqrw/viewform" 
  },

  { 
    name: "ECHOES IN PIXELS", 
    image: posterImg, 
    description: (
      <>
        🚀 <strong>🖌️ Digital Poster Design Contest</strong> 💡 <br /><br />
        Unleash Your Creativity & Win Big! 🎨
        <br /><br />
        <strong>Why Participate..??</strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li>🎁 Exciting Rewards – Stand a chance to win certificates & amazing prizes!</li>
          <li>🖥️ Skill Enhancement – Improve your digital design, composition, and storytelling abilities.</li>
          <li>🏆 Recognition & Exposure – Get your work noticed and appreciated.</li>
        </ul>
        <strong>Event Highlights : </strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li>📌 Theme-Based Poster Challenges – Design posters based on thought-provoking themes.</li>
          <li>🎭 Platform for Young Creators – A stage to express and experiment with designs.</li>
        </ul>
        <strong>📅 DATE:</strong> 20<sup>th</sup> March 2025 <br />
        <strong>🕒 Timings:</strong> 12 p.m. – 2 p.m. <br />
        <strong>📍 VENUE:</strong> Bhai Parmanand Shakarpur Campus: II, DSEU
      </>
    ),
    registerLink: "https://docs.google.com/forms/d/1YhBrz5luzx43T_tJlDvfgLNWAAT0Upq0dFb4lL6QOHM/edit" 
  },

  { 
    name: "WEB CRAZE", 
    image: webImg, 
    description: (
      <>
        🚀 <strong>🌐 WEB CRAZE 2025 – Design. Innovate. Dominate..!! 🎨💻</strong> 💡 <br /><br />
        Enigma presents WEB CRAZE 2025, the ultimate <strong>Website Designing Challenge</strong> where creativity meets technology..!! 
        <br /><br />
        <strong>Why Participate..??</strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li>🎨 Design with Impact – Build visually captivating and user-friendly websites.  </li>
          <li>🤝 Collaborate & Compete – Team up, challenge the best, and showcase your skills.  </li>
          <li>🏆 Win Big – Earn recognition, prizes, and the title of the best web designer! </li>
        </ul>
        <strong>What Awaits You..??</strong>
        <ul style={{ listStyle: "none", paddingLeft: 40, textAlign: "left" }}>
          <li>🌍 Real-World Challenges – Solve engaging problem statements with innovative web solutions. </li>
          <li>📈 Skill Enhancement – Improve your front-end, back-end, and UI/UX expertise.  </li>
          <li>🔗 Exclusive Opportunities – Connect with tech enthusiasts, industry professionals, and mentors. </li>
        </ul>
        <strong>📅 DATE:</strong> 20<sup>th</sup> March 2025 <br />
        <strong>🕒 Timings:</strong> 11 a.m. – 1 p.m. <br />
        <strong>📍 VENUE:</strong> Bhai Parmanand Shakarpur Campus: II, DSEU
      </>
    ),
    registerLink: "https://docs.google.com/forms/u/3/d/1VnXXFmeTKVwIoha5HSCLKb2x0u-1vAZbRcY8K7EFUSI/edit?usp=forms_home&ths=true" 
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={`events-page ${selectedEvent ? "blurred" : ""}`}>
      <h1 className="events-heading">OUR EVENTS</h1>
      <div className="events-container">
        {eventsData.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" onClick={() => setSelectedImage(event.image)}/>
            <h2>{event.name}</h2>
            <button onClick={() => setSelectedEvent(event)}>Register</button>
          </div>
        ))}
      </div>

      {/* Pop-up Window */}
      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content-img" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage} alt="Popup" className="popup-image" />
          </div>
        </div>
      )}

      {selectedEvent && (
        <div className="popup-event">
          <div className="popup-content-event">
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

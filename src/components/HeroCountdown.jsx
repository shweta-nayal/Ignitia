import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "../styles/HeroCountdown.css";

const HeroCountdown = () => {
    const navigate = useNavigate(); // Initialize navigation
    const eventDate = new Date("March 20, 2025 00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero">
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>Welcome to <span>Enigma Fest 2k25</span></h1>
                <p>The Ultimate Tech Fest – March 20th, 2025</p>
                <button className="cta-btn" onClick={() => navigate("/events")}>
                    Explore Events
                </button>

                <div className="countdown">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div className="time-box" key={unit}>
                            <span>{value}</span>
                            <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCountdown;

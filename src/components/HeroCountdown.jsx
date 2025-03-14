import { useState, useEffect } from "react";
import "../styles/HeroCountdown.css";

const HeroCountdown = () => {
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
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero">
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>Welcome to <span>Enigma Fest 2k25</span></h1>
                <p>The Ultimate Tech Fest – March 20th, 2025</p>
                <button className="cta-btn">Explore Events</button>

                <div className="countdown">
                    <div className="time-box">
                        <span>{timeLeft.days}</span>
                        <p>Days</p>
                    </div>
                    <div className="time-box">
                        <span>{timeLeft.hours}</span>
                        <p>Hours</p>
                    </div>
                    <div className="time-box">
                        <span>{timeLeft.minutes}</span>
                        <p>Minutes</p>
                    </div>
                    <div className="time-box">
                        <span>{timeLeft.seconds}</span>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCountdown;

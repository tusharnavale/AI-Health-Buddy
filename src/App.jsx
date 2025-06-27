import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  // 👇 Load Chatbase bot on page load
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "Opx0oZrniIUUa72Kr1nTH"; // your Bot ID
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  // 👇 Open Chatbase bot bubble when button is clicked
  const handleStartChat = () => {
    setChatOpen(true);
    setTimeout(() => {
      if (window.chatbase) {
        window.chatbase("open");
      }
    }, 500);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">HealthBuddy 🤖</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>How It Works</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="main-content">
        <section className="hero">
          <h2>Your Personal AI Health Assistant</h2>
          <p>
            Chat with HealthBuddy to get instant answers to your health-related
            queries — anytime, anywhere.
          </p>
          <button className="hero-btn" onClick={handleStartChat}>
            Start Chatting
          </button>
        </section>

        {/* Features */}
        <section className="features">
          <div className="feature-card">
            <h3>🕒 24/7 Availability</h3>
            <p>Ask health questions anytime — no waiting, no appointments.</p>
          </div>
          <div className="feature-card">
            <h3>🎯 Personalized Advice</h3>
            <p>Suggestions based on your symptoms & history.</p>
          </div>
          <div className="feature-card">
            <h3>📚 Trusted Sources</h3>
            <p>Powered by verified medical databases and real health info.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 HealthBuddy. Built with ❤️ for your health.</p>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./style.css";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "🤖 Hello! I’m HealthBuddy. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleStartChat = () => {
    setChatOpen(true);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse = {
        sender: "bot",
        text: generateBotReply(input)
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const generateBotReply = (userText) => {
    if (userText.toLowerCase().includes("headache")) {
      return "Drink water and rest. Avoid screen time.";
    } else if (userText.toLowerCase().includes("fever")) {
      return "Monitor your temp. Take paracetamol if needed.";
    } else if (userText.toLowerCase().includes("cold")) {
      return "Drink warm fluids and avoid cold items.";
    } else {
      return "I'm here to help! Please elaborate your symptoms.";
    }
  };

  return (
    <div className="container">
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

      {/* Landing Page or Chat UI */}
      {!chatOpen ? (
        <>
          <section className="hero">
            <h2>Your Personal AI Health Assistant</h2>
            <p>
              Chat with HealthBuddy to get instant answers to your health-related queries — anytime, anywhere.
            </p>
            <button className="hero-btn" onClick={handleStartChat}>
              Start Chatting
            </button>
          </section>

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
        </>
      ) : (
        <>
          <section className="chatgpt-ui">
            <div className="chatgpt-header">
              <h2>💬 HealthBuddy AI Chat</h2>
              <p>Your health assistant is here to help you 24/7</p>
            </div>

            <div className="chatgpt-body">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chatgpt-message ${msg.sender === "user" ? "user" : "bot"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chatgpt-input-area">
              <input
                type="text"
                placeholder="Type your message..."
                className="chatgpt-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
              />
              <button className="chatgpt-send-btn" onClick={handleSend}>
                Send
              </button>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 HealthBuddy. Built with ❤️ for your health.</p>
      </footer>
    </div>
  );
}

export default App;

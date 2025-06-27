import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Avoid duplicate script injection
    if (document.getElementById("Opx0oZrniIUUa72Kr1nTH")) return;

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "Opx0oZrniIUUa72Kr1nTH";
    script.setAttribute("data-chatbase-domain", "www.chatbase.co");
    document.body.appendChild(script);
  }, []);

  return null; // This component doesn't render any visible UI
};

export default Chatbot;

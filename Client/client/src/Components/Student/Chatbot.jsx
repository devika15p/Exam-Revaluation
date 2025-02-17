import { useState, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const chatbotContainer = document.createElement("div");
    chatbotContainer.id = "chatbot-container";
    document.body.appendChild(chatbotContainer);
    return () => document.body.removeChild(chatbotContainer);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");
    
    setTimeout(() => {
      const botResponse = { text: getBotResponse(input), sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message) => {
    const responses = {
      hello: "Hi there! How can I help?",
      help: "I'm here to assist you. What do you need help with?",
      bye: "Goodbye! Have a great day!",
      how: "I'm doing great! How about you?",
      weather: "The weather is nice today!",
      name: "I'm a chatbot created to assist you!"
    };
    return responses[message.toLowerCase()] || "I'm not sure how to respond to that.";
  };

  return (
    <div className="chat-popup" style={{ position: "fixed", bottom: "20px", right: "20px", background: "white", padding: "10px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", display: isOpen ? "block" : "none" }}>
      <button onClick={() => setIsOpen(!isOpen)} style={{ position: "absolute", top: "-10px", right: "-10px", background: "red", color: "white", border: "none", borderRadius: "50%", width: "25px", height: "25px" }}>X</button>
      <div className="chat-box" style={{ maxHeight: "300px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "bot" ? "bot-message" : "user-message"}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;

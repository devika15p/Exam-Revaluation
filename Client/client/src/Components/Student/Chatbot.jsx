import { useState, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const chatbotContainer = document.createElement("div");
    chatbotContainer.id = "chatbot-container";
    document.body.appendChild(chatbotContainer);
    return () => document.body.removeChild(chatbotContainer);
  }, []);

  const handleSend = (message) => {
    const userMessage = message || input;
    if (!userMessage.trim()) return;
    setMessages([...messages, { text: userMessage, sender: "user" }]);
    setInput("");
    
    setTimeout(() => {
      const botResponse = { text: getBotResponse(userMessage), sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message) => {
    const responses = {
      "What services do you offer?": "We offer a variety of services, including web development and consulting.",
      "How can I contact you?": "You can reach us at contact@example.com.",
      "What are your working hours?": "Our working hours are from 9 AM to 6 PM, Monday to Friday.",
      "Can you help me with my order?": "Sure! Please provide your order details, and I'll assist you.",
      "Do you provide customer support?": "Yes, we provide 24/7 customer support. How can we assist you?"
    };
    return responses[message] || "I'm not sure how to respond to that.";
  };

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} style={{ position: "fixed", bottom: "20px", right: "20px", background: "blue", color: "white", border: "none", borderRadius: "50%", width: "50px", height: "50px", fontSize: "24px" }}>
        💬
      </button>
      {isOpen && (
        <div className="chat-popup" style={{ position: "fixed", bottom: "80px", right: "20px", background: "white", padding: "10px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", width: "300px" }}>
          <button onClick={() => setIsOpen(false)} style={{ position: "absolute", top: "-10px", right: "-10px", background: "red", color: "white", border: "none", borderRadius: "50%", width: "25px", height: "25px" }}>X</button>
          <div className="chat-box" style={{ maxHeight: "300px", overflowY: "auto", padding: "10px", fontSize: "14px" }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ padding: "5px", margin: "5px 0", borderRadius: "10px", background: msg.sender === "bot" ? "#f1f1f1" : "#007bff", color: msg.sender === "bot" ? "black" : "white", alignSelf: msg.sender === "bot" ? "flex-start" : "flex-end" }}>
                {msg.text}
              </div>
            ))}
          </div>
          <div style={{ padding: "10px", display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {["What services do you offer?", "How can I contact you?", "What are your working hours?", "Can you help me with my order?", "Do you provide customer support?"].map((q, index) => (
              <button key={index} onClick={() => handleSend(q)} style={{ padding: "5px 10px", background: "#eee", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer" }}>{q}</button>
            ))}
          </div>
          <div className="input-box" style={{ display: "flex", borderTop: "1px solid #ccc", padding: "10px" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={() => handleSend()} style={{ marginLeft: "10px", padding: "8px 12px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

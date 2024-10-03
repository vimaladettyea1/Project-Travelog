import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "../Mid-phase/Chatt.css";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Store your API key in an environment variable
  });

  const openai = new OpenAIApi(configuration);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (input.trim() !== "") {
      const userMessage = { user: "User", text: input };
      setMessages([...messages, userMessage]);

      const botMessage = await generateResponse(input);
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setInput("");
    }
  };

  const generateResponse = async (input) => {
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003", // You can use different models based on your needs
        prompt: `You are a travel assistant. Respond to the following question: ${input}`,
        max_tokens: 150,
        temperature: 0.7,
      });

      return { user: "Bot", text: response.data.choices[0].text.trim() };
    } catch (error) {
      console.error("Error generating response:", error);
      return {
        user: "Bot",
        text: "Sorry, I couldn't process your request. Please try again later.",
      };
    }
  };

  return (
    <div className={`chat-container ${isOpen ? "open" : ""}`}>
      <div className="chat-icon" onClick={toggleChat}>
        💬
      </div>
      <div className="chat-box">
        <div className="chat-header">
          <h4>Travel Assistant</h4>
          <button onClick={toggleChat}>X</button>
        </div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.user === "Bot" ? "bot" : "user"}`}
            >
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your trip..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

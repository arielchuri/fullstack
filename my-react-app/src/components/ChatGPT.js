// Example of making a request to ChatGPT API from React component
import React, { useState } from 'react';
import axios from 'axios';

function ChatGPT() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    // Make a request to the ChatGPT API
    try {
      const response = await axios.post('YOUR_CHATGPT_API_ENDPOINT', {
        message: userInput,
      });
      const botResponse = response.data.response;
      setChatHistory([...chatHistory, { user: userInput, bot: botResponse }]);
      setUserInput('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div>
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <p>User: {chat.user}</p>
            <p>ChatGPT: {chat.bot}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatGPT;
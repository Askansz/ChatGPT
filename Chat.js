// Chat.js
import React, { useState, useEffect } from 'react';

const Chat = ({ url }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = async () => {
    // Use Vercel serverless function to send message
    const response = await fetch(`/.netlify/functions/sendMessage?url=${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputMessage }),
    });

    const result = await response.json();

    if (result.success) {
      setMessages([...messages, { text: inputMessage, sender: 'You' }]);
      setInputMessage('');
    }
  };

  useEffect(() => {
    // Fetch messages from Vercel serverless function
    const fetchMessages = async () => {
      const response = await fetch(`/.netlify/functions/getMessages?url=${url}`);
      const result = await response.json();

      if (result.success) {
        setMessages(result.messages);
      }
    };

    fetchMessages();
  }, [url]);

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

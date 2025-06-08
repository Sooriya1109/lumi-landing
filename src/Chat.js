// Chat.js
import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { from: 'lumi', text: 'Hey! How are you feeling today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user's message
    const newMessages = [...messages, { from: 'user', text: input }];

    // Simulate Lumi's reply after a delay
    newMessages.push({ from: 'lumi', text: "I'm here for you. Want to talk more?" });

    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6 min-h-[500px] flex flex-col">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">🧘 Lumi Daily Chat</h2>
      <div className="flex-1 space-y-2 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl max-w-[75%] ${
              msg.from === 'user'
                ? 'bg-indigo-100 self-end text-right'
                : 'bg-purple-100 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your thoughts..."
          className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;

// App.js
import React from 'react';
import Chat from './Chat';

const App = () => {
  // Get the URL dynamically from the Vercel environment or any other means
  const chatUrl = 'https://vercel.com/askanszs-projects/chat-gpt/4u7FwKMQCN3qtGHk5EydgRinU13j';

  return (
    <div>
      <h1>Chat App</h1>
      <Chat url={chatUrl} />
    </div>
  );
};

export default App;

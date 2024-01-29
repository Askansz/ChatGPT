// App.js
import React from 'react';
import Chat from './Chat';

const App = () => {
  // Get the URL dynamically from the Vercel environment or any other means
  const chatUrl = 'your-vercel-deployment-url';

  return (
    <div>
      <h1>Chat App</h1>
      <Chat url={chatUrl} />
    </div>
  );
};

export default App;

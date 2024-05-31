// src/App.js

import React from 'react';
import Chatbot from './chatbot';
import TextToSpeech from './voice';
import Demo from './demo';

function App() {
  return (
    <div className="App">
      <Chatbot />
      {/* <TextToSpeech /> */}
      {/* <Demo></Demo> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        Do the following:
         <ul>
          <li className="check">be downloadable</li>
          <li className="check">function without connection</li>
          <li className="cross">save data locally</li>
          <li className="cross">send push notifications</li>
          <li className="cross">push data to some api when service becomes available</li>
         </ul>
        </p>
    </div>
  );
}

export default App;

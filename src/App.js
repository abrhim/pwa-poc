import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        This app can do the following:
         <ul>
          <li className="check">install to home screen</li>
          <li className="cross">save data to device</li>
          <li className="cross">send push notifications</li>
          <li className="cross">push data to some api when internet becomes available</li>
         </ul>
        </p>
    </div>
  );
}

export default App;

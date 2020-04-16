import React from 'react';
import Src from './src'
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        This app can do the following:
         <ul>
          <li className="check">install to home screen <Src href="https://create-react-app.dev/docs/making-a-progressive-web-app/" /></li>
          <li className="cross">save data to device <Src href="https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa"/></li>
          <li className="cross">send push notifications</li>
          <li className="cross">push data to some api when internet becomes available</li>
         </ul>
        </p>
    </div>
  );
}

export default App;

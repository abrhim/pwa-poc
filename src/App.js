import React from 'react';
import Src from './src'
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        This app can do the following:
         <ul>
          <li className="check">install to home screen <Src sup={1} href="https://create-react-app.dev/docs/making-a-progressive-web-app/" /></li>
          <li className="cross">save data to device <Src sup={1} href="https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa" /> <Src sup={2} href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"/> </li>
          <li className="cross">send push notifications</li>
          <li className="cross">push data to some api when internet becomes available</li>
         </ul>
        </p>
    </div>
  );
}

export default App;

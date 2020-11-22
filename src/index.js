import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



serviceWorker.unregister();

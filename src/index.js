import React from 'react';
import './style.scss';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}



serviceWorker.unregister();

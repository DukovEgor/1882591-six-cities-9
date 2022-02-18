import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PLACES_TO_STAY = 5;

ReactDOM.render(
  <React.StrictMode>
    <App placesToStay={PLACES_TO_STAY}/>
  </React.StrictMode>,
  document.getElementById('root'));

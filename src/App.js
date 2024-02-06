import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/home'; // Correcting to 'Home' assuming it's the correct component name
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

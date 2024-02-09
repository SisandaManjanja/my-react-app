import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './screens/home'; // Assuming this is the correct path to the Home component
import About from './screens/home/about'; // Corrected path to the About component
import Portfolio from './screens/portfolio';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


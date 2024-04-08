// Import the React library for building components
import React from 'react';
// Import ReactDOM for rendering the React components to the DOM
import ReactDOM from 'react-dom/client';
// Import the App component, which is the root component of the application
import App from './App.jsx';
// Import the main stylesheet for the application
import './index.css';
// Import BrowserRouter as Router to handle routing in the application
import {BrowserRouter as Router} from 'react-router-dom';

// Use ReactDOM to find the element with the ID 'root' and render the application inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode is a tool for highlighting potential problems in an application
  <React.StrictMode>
    {/* Router component wraps the App component to enable routing throughout the application */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);

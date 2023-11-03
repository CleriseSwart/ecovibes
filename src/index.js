import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM's createRoot method
import './index.css';
import App from './App';

// Create a root using the createRoot method and attach it to the 'root' element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

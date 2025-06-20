import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your own global CSS if you have it
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // <--- THIS IS THE CORRECT PLACE FOR BOOTSTRAP CSS IMPORT

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

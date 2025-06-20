import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // You can keep this or remove if not needed
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // IMPORTER BOOTSTRAP CSS HNA

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
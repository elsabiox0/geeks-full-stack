// src/App.js
import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';
import 'bootstrap/dist/css/bootstrap.min.css';

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">🚗 React Exercises</h1>

      <div className="card mb-4 shadow p-3">
        <h4 className="text-success">🚙 Car Component</h4>
        <Car carInfo={carinfo} />
      </div>

      <div className="card mb-4 shadow p-3">
        <h4 className="text-info">🧪 Events Component</h4>
        <Events />
      </div>

      <div className="card mb-4 shadow p-3">
        <h4 className="text-warning">📱 Phone Component</h4>
        <Phone />
      </div>

      <div className="card mb-4 shadow p-3">
        <h4 className="text-danger">🎨 Color Component</h4>
        <Color />
      </div>
    </div>
  );
}

export default App;

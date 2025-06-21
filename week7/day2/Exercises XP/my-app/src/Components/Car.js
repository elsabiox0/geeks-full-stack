// src/Components/Car.js
import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
  const [color] = useState("red");

  return (
    <div className="p-3 bg-light rounded">
      <h5>This car is a <span className="text-danger">{color}</span> <strong>{carInfo.model}</strong></h5>
      <Garage size="small" />
    </div>
  );
}

export default Car;

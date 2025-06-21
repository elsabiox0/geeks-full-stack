// src/Components/Phone.js
import React, { useState } from 'react';

function Phone() {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  const changeColor = () => {
    setPhone(prev => ({ ...prev, color: "blue" }));
  };

  return (
    <div className="p-3 bg-light rounded">
      <ul className="list-group">
        <li className="list-group-item">Brand: {phone.brand}</li>
        <li className="list-group-item">Model: {phone.model}</li>
        <li className="list-group-item">Color: {phone.color}</li>
        <li className="list-group-item">Year: {phone.year}</li>
      </ul>
      <button className="btn btn-info mt-3" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default Phone;

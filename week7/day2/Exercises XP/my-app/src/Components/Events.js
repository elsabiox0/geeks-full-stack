// src/Components/Events.js
import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => alert("I was clicked");
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You typed: ${event.target.value}`);
    }
  };
  const toggle = () => setIsToggleOn(prev => !prev);

  return (
    <div className="d-flex flex-column gap-3">
      <button onClick={clickMe} className="btn btn-primary">Click Me</button>
      <input
        type="text"
        className="form-control"
        placeholder="Type and press Enter"
        onKeyDown={handleKeyDown}
      />
      <button onClick={toggle} className={`btn ${isToggleOn ? 'btn-success' : 'btn-danger'}`}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;

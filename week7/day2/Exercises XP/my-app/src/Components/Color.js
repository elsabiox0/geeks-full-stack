// src/Components/Color.js
import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

  return (
    <div className="p-3 bg-light rounded">
      <h5>My favorite color is <span style={{ color: favoriteColor }}>{favoriteColor}</span></h5>
      <button className="btn btn-dark mt-2" onClick={() => setFavoriteColor("blue")}>
        Change Color
      </button>
    </div>
  );
}

export default Color;

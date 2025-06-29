import React from 'react';
import { useSelector } from 'react-redux';

const AgeDisplay = () => {
  const age = useSelector((state) => state.age.age);
  const loading = useSelector((state) => state.age.loading);

  return (
    <div>
      <h2>Age: {age}</h2>
      {loading && <div className="spinner">Loading...</div>}
    </div>
  );
};

export default AgeDisplay;

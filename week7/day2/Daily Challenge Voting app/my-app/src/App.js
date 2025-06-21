// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Initial state for the languages and their votes
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // Function to handle voting
  const handleVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4 text-primary">🗳️ Programming Language Voting App</h1>

      {languages.map((lang, index) => (
        <div key={index} className="card mb-3 shadow p-3">
          <h4>{lang.name}</h4>
          <p>Votes: <strong>{lang.votes}</strong></p>
          <button
            className="btn btn-success"
            onClick={() => handleVote(index)}
          >
            Vote
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;

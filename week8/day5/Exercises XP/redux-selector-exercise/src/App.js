// src/App.js
import React from 'react';
import BookList from './features/books/BookList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Selector Exercise</h1>
        <BookList />
      </header>
    </div>
  );
}

export default App;
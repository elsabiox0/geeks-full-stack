import React, { useState, useEffect } from "react";
import quotes from "./quotes";
import "./App.css";

const getRandomIndex = (length, currentIndex) => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * length);
  } while (newIndex === currentIndex);
  return newIndex;
};

const getRandomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    setQuoteIndex(getRandomIndex(quotes.length, -1));
  }, []);

  const handleNewQuote = () => {
    const newIndex = getRandomIndex(quotes.length, quoteIndex);
    setQuoteIndex(newIndex);
    setColor(getRandomColor());
  };

  const { quote, author } = quotes[quoteIndex];

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="quote-box">
        <h1 style={{ color }}>{`"${quote}"`}</h1>
        <p className="author" style={{ color }}>
          - {author}
        </p>
        <button
          onClick={handleNewQuote}
          className="new-quote-btn"
          style={{ backgroundColor: color }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;

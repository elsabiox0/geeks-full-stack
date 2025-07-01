// src/features/books/BookList.js
import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from './selectors';
import { FaBook, FaDragon, FaGhost, FaRocket, FaThList } from 'react-icons/fa';

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  // useMemo will re-run the selector logic only when selectedGenre changes
  const selectFilteredBooks = useMemo(() => {
    switch (selectedGenre) {
      case 'Horror':
        return selectHorrorBooks;
      case 'Fantasy':
        return selectFantasyBooks;
      case 'Science Fiction':
        return selectScienceFictionBooks;
      default:
        return selectBooks;
    }
  }, [selectedGenre]);

  const visibleBooks = useSelector(selectFilteredBooks);

  // A small enhancement to add a title and icon for the current view
  const genreInfo = {
    All: { icon: <FaThList />, title: 'All Books' },
    Horror: { icon: <FaGhost />, title: 'Horror Books' },
    Fantasy: { icon: <FaDragon />, title: 'Fantasy Books' },
    'Science Fiction': { icon: <FaRocket />, title: 'Science Fiction Books' },
  };

  return (
    <div className="booklist-container">
      <h2>Book Inventory</h2>
      <div className="genre-filters">
        {Object.keys(genreInfo).map((genre) => (
          <button
            key={genre}
            className={`genre-button ${selectedGenre === genre ? 'active' : ''}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genreInfo[genre].icon}
            {genre}
          </button>
        ))}
      </div>

      <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {genreInfo[selectedGenre].icon} {genreInfo[selectedGenre].title}
      </h3>

      <ul className="book-list">
        {visibleBooks.map((book) => (
          <li key={book.id} className="book-item">
            <FaBook className="book-icon" />
            <div className="book-details">
              <strong>{book.title}</strong>
              <span>by {book.author}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
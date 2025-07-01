// src/features/books/selectors.js
import { createSelector } from '@reduxjs/toolkit';

// Basic selector to get the entire books state
const selectBooksState = (state) => state.books;

// Selects the book inventory array from the books state
export const selectBooks = createSelector(
  [selectBooksState],
  (booksState) => booksState.inventory
);

// Selects Horror books
export const selectHorrorBooks = createSelector(
  [selectBooks], // Input selector
  (books) => books.filter((book) => book.genre === 'Horror')
);

// Selects Fantasy books
export const selectFantasyBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Fantasy')
);

// Selects Science Fiction books
export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Science Fiction')
);
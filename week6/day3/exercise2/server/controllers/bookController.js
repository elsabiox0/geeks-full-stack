let books = require('../models/bookModel');

// GET /api/books
exports.getAllBooks = (req, res) => {
  res.json(books);
};

// GET /api/books/:bookId
exports.getBookById = (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.status(200).json(book);
};

exports.createBook = (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
};

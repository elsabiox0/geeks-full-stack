// app.js

// 1. Import Express
const express = require('express');
const app = express();

// 2. Middleware
// This is crucial for parsing the JSON body of incoming POST requests.
app.use(express.json());

// 3. Data Store (Simulated Database)
// An array of book objects to work with.
let books = [
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 },
    { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 3, title: 'Dune', author: 'Frank Herbert', publishedYear: 1965 }
];

// Helper variable to generate new unique IDs
let currentId = 4;

// 4. Implement API Routes

// --- READ ALL BOOKS ---
// Method: GET
// Endpoint: /api/books
app.get('/api/books', (req, res) => {
    // We simply return the entire books array with a 200 OK status.
    console.log('GET /api/books - Returning all books');
    res.status(200).json(books);
});

// --- READ A SINGLE BOOK BY ID ---
// Method: GET
// Endpoint: /api/books/:bookId
app.get('/api/books/:bookId', (req, res) => {
    // Extract bookId from the URL parameters. req.params contains route parameters.
    const bookId = parseInt(req.params.bookId, 10);
    console.log(`GET /api/books/${bookId} - Searching for book`);

    // Find the book in the array.
    const book = books.find(b => b.id === bookId);

    if (book) {
        // If the book is found, return it with a 200 OK status.
        console.log(`Found book with id ${bookId}`);
        res.status(200).json(book);
    } else {
        // If the book is not found, return a 404 Not Found error.
        console.log(`Book with id ${bookId} not found`);
        res.status(404).json({ message: 'Book not found' });
    }
});

// --- CREATE A NEW BOOK ---
// Method: POST
// Endpoint: /api/books
app.post('/api/books', (req, res) => {
    // Extract title, author, and publishedYear from the request body.
    const { title, author, publishedYear } = req.body;
    console.log('POST /api/books - Attempting to create a new book');

    // Basic validation to ensure required fields are present.
    if (!title || !author || !publishedYear) {
        return res.status(400).json({ message: 'Missing required fields: title, author, or publishedYear.' });
    }

    // Create a new book object.
    const newBook = {
        id: currentId++, // Assign a new unique ID and then increment the counter.
        title: title,
        author: author,
        publishedYear: publishedYear
    };

    // Add the new book to our array.
    books.push(newBook);
    
    console.log('Successfully created new book:', newBook);
    // Return the newly created book with a 201 Created status.
    res.status(201).json(newBook);
});


// 5. Start the Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// server.js

// 1. Import Express
const express = require('express');
const app = express();

// Middleware to parse JSON bodies. This is needed to read the body of POST and PUT requests.
app.use(express.json());

// 2. Data Store (Simulated Database)
// We'll use a simple in-memory array to store our blog posts.
// In a real application, this would be a database.
let posts = [
    { id: 1, title: 'Getting Started with Node.js', content: 'Learn the basics of Node.js and its non-blocking I/O model.' },
    { id: 2, title: 'Understanding RESTful APIs', content: 'A deep dive into the principles of REST architecture.' },
    { id: 3, title: 'Express.js for Beginners', content: 'How to build web applications with the Express framework.' }
];
let nextId = 4; // To simulate auto-incrementing IDs for new posts

// 3. Define API Routes

// --- READ ALL POSTS ---
// GET /posts: Returns a list of all blog posts.
app.get('/posts', (req, res) => {
    console.log('GET /posts - Returning all posts');
    res.status(200).json(posts);
});

// --- READ A SPECIFIC POST ---
// GET /posts/:id: Returns a single blog post by its ID.
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10); // Get the ID from the URL and convert it to a number
    const post = posts.find(p => p.id === postId); // Find the post in our array

    if (post) {
        console.log(`GET /posts/${postId} - Found post`);
        res.status(200).json(post);
    } else {
        console.log(`GET /posts/${postId} - Post not found`);
        res.status(404).json({ message: 'Post not found' }); // If not found, send a 404 error
    }
});

// --- CREATE A NEW POST ---
// POST /posts: Creates a new blog post.
app.post('/posts', (req, res) => {
    // Get the title and content from the request body
    const { title, content } = req.body;

    // Basic validation
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    // Create a new post object with a unique ID
    const newPost = {
        id: nextId++,
        title: title,
        content: content
    };

    posts.push(newPost); // Add the new post to our array
    console.log('POST /posts - Created new post with id:', newPost.id);
    res.status(201).json(newPost); // Return the new post with a 201 (Created) status
});

// --- UPDATE AN EXISTING POST ---
// PUT /posts/:id: Updates an existing blog post.
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const postIndex = posts.findIndex(p => p.id === postId); // Find the index of the post

    if (postIndex !== -1) {
        const { title, content } = req.body; // Get updated data from the request body

        // Basic validation
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        // Update the post
        posts[postIndex].title = title;
        posts[postIndex].content = content;

        console.log(`PUT /posts/${postId} - Updated post`);
        res.status(200).json(posts[postIndex]); // Return the updated post
    } else {
        console.log(`PUT /posts/${postId} - Post not found`);
        res.status(404).json({ message: 'Post not found' });
    }
});

// --- DELETE A POST ---
// DELETE /posts/:id: Deletes a blog post.
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex !== -1) {
        posts.splice(postIndex, 1); // Remove the post from the array
        console.log(`DELETE /posts/${postId} - Deleted post`);
        res.status(204).send(); // Send a 204 (No Content) status, as there's nothing to return
    } else {
        console.log(`DELETE /posts/${postId} - Post not found`);
        res.status(404).json({ message: 'Post not found' });
    }
});

// 4. Error Handling
// Middleware for handling routes that don't exist
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Generic error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong on the server' });
});

// 5. Start the Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
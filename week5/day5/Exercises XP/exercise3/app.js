const express = require('express');
const app = express();
const PORT = 5000;

// Import the data module
const { fetchPosts } = require('./data/dataService');

// GET /posts endpoint
app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Data retrieved and sent successfully.');
    res.json(posts);
  } catch (error) {
    console.error('Failed to retrieve posts:', error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

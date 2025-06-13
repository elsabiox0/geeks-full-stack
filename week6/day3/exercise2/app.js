const express = require('express');
const app = express();
const bookRoutes = require('./server/routes/bookRoutes');

// Middleware
app.use(express.json());

// Root route (to fix 404 when accessing localhost:5000)
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Book API');
});

// Routes
app.use('/api/books', bookRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

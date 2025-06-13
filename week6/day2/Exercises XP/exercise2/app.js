// app.js
const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');

app.use(express.json()); // To parse JSON request bodies
app.use('/todos', todoRoutes); // Mount the router

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

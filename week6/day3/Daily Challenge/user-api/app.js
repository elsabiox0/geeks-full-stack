const express = require('express');
require('dotenv').config();
const userRoutes = require('./server/routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('User Management API Running'));

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

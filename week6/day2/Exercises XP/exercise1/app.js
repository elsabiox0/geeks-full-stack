// app.js

// 1. Nimporte Express
const express = require('express');

// 2. Ncreateiw l'app
const app = express();

// 3. Nimporteiw les routes
const mainRoutes = require('./routes/index');

// 4. Middleware bach l'app y9ra JSON (future-proof)
app.use(express.json());

// 5. Use the routes
app.use('/', mainRoutes);

// 6. Setup lport
const PORT = process.env.PORT || 3000;

// 7. Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

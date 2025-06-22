const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// GET
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello From Express" });
});

// POST
app.post("/api/world", (req, res) => {
  console.log("Received from client:", req.body);
  res.send({
    message: `I received your POST request. This is what you sent me: ${req.body.input}`,
  });
});

// Run server
app.listen(PORT, () => {
  console.log(`✅ Express server is running at http://localhost:${PORT}`);
});

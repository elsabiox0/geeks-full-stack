const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/api", userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

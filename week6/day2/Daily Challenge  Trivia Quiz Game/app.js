const express = require("express");
const session = require("express-session");
const quizRouter = require("./routes/quizRouter");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.use(
  session({
    secret: "quiz_secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/quiz", quizRouter);

app.get("/", (req, res) => {
  res.redirect("/quiz");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

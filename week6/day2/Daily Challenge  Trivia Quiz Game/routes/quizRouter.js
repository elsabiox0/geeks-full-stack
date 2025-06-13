const express = require("express");
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

router.use((req, res, next) => {
  if (!req.session.quiz) {
    req.session.quiz = { currentIndex: 0, score: 0 };
  }
  next();
});

// GET /quiz
router.get("/", (req, res) => {
  const { currentIndex } = req.session.quiz;

  if (currentIndex >= triviaQuestions.length) {
    return res.redirect("/quiz/score");
  }

  const currentQuestion = triviaQuestions[currentIndex];

  res.render("question", {
    question: currentQuestion.question,
    questionNumber: currentIndex + 1,
    totalQuestions: triviaQuestions.length,
    feedback: null,
  });
});

// POST /quiz
router.post("/", express.urlencoded({ extended: true }), (req, res) => {
  const userAnswer = req.body.answer;
  const { currentIndex } = req.session.quiz;
  const currentQuestion = triviaQuestions[currentIndex];

  let feedback = "";
  if (userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
    req.session.quiz.score += 1;
    feedback = "✔️ Correct!";
  } else {
    feedback = `❌ Wrong! Correct answer is: ${currentQuestion.answer}`;
  }

  req.session.quiz.currentIndex += 1;

  if (req.session.quiz.currentIndex >= triviaQuestions.length) {
    return res.redirect("/quiz/score");
  }

  const nextQuestion = triviaQuestions[req.session.quiz.currentIndex];
  res.render("question", {
    question: nextQuestion.question,
    questionNumber: req.session.quiz.currentIndex + 1,
    totalQuestions: triviaQuestions.length,
    feedback,
  });
});

// GET /quiz/score
router.get("/score", (req, res) => {
  const { score } = req.session.quiz;
  const total = triviaQuestions.length;

  req.session.quiz = null;

  res.render("score", {
    score,
    total,
  });
});

module.exports = router;

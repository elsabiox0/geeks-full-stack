const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🐱', name: 'Cat' },
];

let score = 0;

function getQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const optionsSet = new Set([correct.name]);
  while (optionsSet.size < 4) {
    const randomName = emojis[Math.floor(Math.random() * emojis.length)].name;
    optionsSet.add(randomName);
  }
  const options = [...optionsSet].sort(() => Math.random() - 0.5);
  return {
    emoji: correct.emoji,
    correctAnswer: correct.name,
    options,
  };
}

app.get('/api/question', (req, res) => {
  const question = getQuestion();
  res.json(question);
});

app.post('/api/guess', (req, res) => {
  const { answer, correctAnswer } = req.body;
  const isCorrect = answer === correctAnswer;
  if (isCorrect) score++;
  res.json({ correct: isCorrect, score });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

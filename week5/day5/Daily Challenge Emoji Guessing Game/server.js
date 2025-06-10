const express = require('express');
const emojis = require('./data');
const path = require('path');

const app = express();
const PORT = 3000;

let leaderboard = [];
let currentScore = 0;

app.use(express.static('public'));
app.use(express.json());

// Serve a random emoji question
app.get('/api/question', (req, res) => {
    const correctIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[correctIndex];

    let options = new Set([correctEmoji.name]);
    while (options.size < 4) {
        const random = emojis[Math.floor(Math.random() * emojis.length)].name;
        options.add(random);
    }

    options = Array.from(options).sort(() => Math.random() - 0.5);

    res.json({
        emoji: correctEmoji.emoji,
        options,
        answer: correctEmoji.name // Only needed server-side; don't expose in frontend
    });
});

// Handle guess
app.post('/api/guess', (req, res) => {
    const { selected, answer } = req.body;

    const correct = selected === answer;
    if (correct) currentScore++;
    else currentScore = 0;

    res.json({ correct, score: currentScore });
});

// Leaderboard (optional enhancement)
app.post('/api/leaderboard', (req, res) => {
    const { name, score } = req.body;
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5);
    res.json(leaderboard);
});

app.get('/api/leaderboard', (req, res) => {
    res.json(leaderboard);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

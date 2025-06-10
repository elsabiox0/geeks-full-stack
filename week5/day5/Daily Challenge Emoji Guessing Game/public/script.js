let currentAnswer = '';

function loadQuestion() {
    fetch('/api/question')
        .then(res => res.json())
        .then(data => {
            currentAnswer = data.answer;
            document.getElementById('emoji').textContent = data.emoji;

            const optionsDiv = document.getElementById('options');
            optionsDiv.innerHTML = '';
            data.options.forEach(option => {
                optionsDiv.innerHTML += `
                    <label>
                        <input type="radio" name="option" value="${option}" required> ${option}
                    </label><br>`;
            });
        });
}

document.getElementById('guessForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const selected = document.querySelector('input[name="option"]:checked').value;

    fetch('/api/guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selected, answer: currentAnswer })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('feedback').textContent = data.correct ? '✅ Correct!' : '❌ Wrong!';
        document.getElementById('score').textContent = data.score;
        loadQuestion();
    });
});

loadQuestion();

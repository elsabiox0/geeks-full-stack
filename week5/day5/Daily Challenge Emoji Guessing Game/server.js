let correctAnswer = '';

async function loadQuestion() {
  const res = await fetch('/api/question');
  const data = await res.json();

  correctAnswer = data.correctAnswer;
  document.getElementById('emoji').textContent = data.emoji;

  const form = document.getElementById('optionsForm');
  form.innerHTML = '';

  data.options.forEach(option => {
    const label = document.createElement('label');
    label.innerHTML = `
      <input type="radio" name="answer" value="${option}" required> ${option}
    `;
    form.appendChild(label);
  });

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Submit';
  form.appendChild(submitBtn);
}

document.getElementById('optionsForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const answer = formData.get('answer');

  const res = await fetch('/api/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answer, correctAnswer }),
  });

  const result = await res.json();

  document.getElementById('feedback').textContent = result.correct ? '✅ Correct!' : '❌ Wrong!';
  document.getElementById('score').textContent = result.score;

  setTimeout(() => {
    document.getElementById('feedback').textContent = '';
    loadQuestion();
  }, 1000);
});

loadQuestion();

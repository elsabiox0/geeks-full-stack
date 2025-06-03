// Matrix effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const letters = ['0', '1'];
const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);
const drops = new Array(columns).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  ctx.font = fontSize + 'px monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 50);

// Giphy API
const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const form = document.getElementById('gifForm');
const input = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const category = input.value.trim();
  if (!category) return;
  try {
    const gifUrl = await fetchRandomGif(category);
    console.log('Fetched gif url:', gifUrl);
    if (gifUrl) appendGif(gifUrl);
    else alert('No GIF found for this category.');
  } catch (err) {
    alert('Error: ' + err.message);
  }
  input.value = '';
});

deleteAllBtn.addEventListener('click', () => {
  gifContainer.innerHTML = '';
});

async function fetchRandomGif(category) {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(category)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Network error');
  const data = await response.json();
  console.log('API response:', data);
  return data.data?.images?.original?.url || null;
}

function appendGif(url) {
  const box = document.createElement('div');
  box.classList.add('gif-box');
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Random GIF';
  const delBtn = document.createElement('button');
  delBtn.classList.add('delete-btn');
  delBtn.textContent = 'DELETE';
  delBtn.onclick = () => box.remove();
  box.appendChild(img);
  box.appendChild(delBtn);
  gifContainer.appendChild(box);
}

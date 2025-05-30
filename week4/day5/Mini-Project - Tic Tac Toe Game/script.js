const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [6, 4, 2]
];

let board = Array(9).fill(null);
let playerSymbol = 'X';
let computerSymbol = 'O';
let difficulty = 'easy';
let gameOver = false;

const boardEl = document.getElementById("board");
const statusText = document.getElementById("statusText");
const restartBtn = document.getElementById("restartBtn");

function setPlayer(symbol) {
  playerSymbol = symbol;
  computerSymbol = symbol === 'X' ? 'O' : 'X';
  startGame();
}

function setDifficulty(level) {
  difficulty = level;
  startGame();
}

function startGame() {
  board = Array(9).fill(null);
  gameOver = false;
  statusText.textContent = '';
  restartBtn.style.display = 'none';
  drawBoard();
}

function drawBoard() {
  boardEl.innerHTML = '';
  board.forEach((val, i) => {
    const square = document.createElement('div');
    square.className = 'square';
    square.id = i;
    square.textContent = val || '';
    square.addEventListener('click', () => handleClick(i));
    boardEl.appendChild(square);
  });
}

function handleClick(index) {
  if (gameOver || board[index]) return;

  board[index] = playerSymbol;
  drawBoard();
  if (checkWin(playerSymbol)) return endGame(`${playerSymbol} wins!`);
  if (board.every(Boolean)) return endGame("It's a tie!");

  setTimeout(() => computerTurn(), 300);
}

function computerTurn() {
  if (gameOver) return;

  let index;
  if (difficulty === 'easy') {
    const empty = board.map((v, i) => v ? null : i).filter(i => i !== null);
    index = empty[Math.floor(Math.random() * empty.length)];
  } else {
    index = findBestMove();
  }

  if (index != null) {
    board[index] = computerSymbol;
    drawBoard();
    if (checkWin(computerSymbol)) return endGame(`${computerSymbol} wins!`);
    if (board.every(Boolean)) return endGame("It's a tie!");
  }
}

function endGame(message) {
  gameOver = true;
  statusText.textContent = message;
  restartBtn.style.display = 'inline-block';
}

function checkWin(symbol) {
  return winCombos.some(combo => combo.every(index => board[index] === symbol));
}

function findBestMove() {
  for (let combo of winCombos) {
    const [a, b, c] = combo;
    const line = [board[a], board[b], board[c]];

    if (line.filter(v => v === computerSymbol).length === 2 && line.includes(null))
      return combo[line.indexOf(null)];

    if (line.filter(v => v === playerSymbol).length === 2 && line.includes(null))
      return combo[line.indexOf(null)];
  }
  const empty = board.map((v, i) => v ? null : i).filter(i => i !== null);
  return empty.length ? empty[Math.floor(Math.random() * empty.length)] : null;
}

startGame();

const grid = document.getElementById('grid');
const colorPicker = document.getElementById('colorPicker');

let isDrawing = false;

// Create grid squares
for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  // Add event listeners to each square
  square.addEventListener('mousedown', () => {
    isDrawing = true;
    square.style.backgroundColor = colorPicker.value;
  });

  square.addEventListener('mouseover', () => {
    if (isDrawing) {
      square.style.backgroundColor = colorPicker.value;
    }
  });

  square.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  grid.appendChild(square);
}

// Stop drawing if mouse is released anywhere on page
document.body.addEventListener('mouseup', () => {
  isDrawing = false;
});


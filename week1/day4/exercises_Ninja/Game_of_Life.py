import time
import os
from copy import deepcopy

class GameOfLife:
    def __init__(self, rows, cols, initial_state, max_generations=100):
        self.rows = rows
        self.cols = cols
        self.grid = [[False for _ in range(cols)] for _ in range(rows)]
        self.max_generations = max_generations
        self.set_initial_state(initial_state)

    def set_initial_state(self, initial_state):
        for r, c in initial_state:
            if 0 <= r < self.rows and 0 <= c < self.cols:
                self.grid[r][c] = True

    def count_neighbors(self, row, col):
        directions = [(-1, -1), (-1, 0), (-1, 1),
                      ( 0, -1),          ( 0, 1),
                      ( 1, -1), ( 1, 0), ( 1, 1)]
        count = 0
        for dr, dc in directions:
            nr, nc = row + dr, col + dc
            if 0 <= nr < self.rows and 0 <= nc < self.cols:
                if self.grid[nr][nc]:
                    count += 1
        return count

    def next_generation(self):
        new_grid = [[False for _ in range(self.cols)] for _ in range(self.rows)]
        for r in range(self.rows):
            for c in range(self.cols):
                neighbors = self.count_neighbors(r, c)
                if self.grid[r][c]:
                    new_grid[r][c] = neighbors in [2, 3]
                else:
                    new_grid[r][c] = neighbors == 3
        self.grid = new_grid

    def display(self):
        os.system('cls' if os.name == 'nt' else 'clear')
        for row in self.grid:
            print(' '.join('█' if cell else ' ' for cell in row))
        print()

    def run(self):
        prev_state = None
        for gen in range(self.max_generations):
            if self.grid == prev_state:
                print(f"Stable configuration reached at generation {gen}.")
                break
            self.display()
            prev_state = deepcopy(self.grid)
            self.next_generation()
            time.sleep(0.3)

# Patterns
GLIDER = [(1, 2), (2, 3), (3, 1), (3, 2), (3, 3)]
BLOCK = [(1, 1), (1, 2), (2, 1), (2, 2)]
BLINKER = [(1, 2), (2, 2), (3, 2)]

# Run the game
game = GameOfLife(rows=10, cols=10, initial_state=GLIDER, max_generations=50)
game.run()

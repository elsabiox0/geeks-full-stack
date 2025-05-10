# Define the Tic Tac Toe game class

class TicTacToe:
    def __init__(self):
        # Initialize the game board as a list of 9 empty strings
        self.board = [' ' for _ in range(9)]
        self.current_player = 'X'  # Player X starts first

    # Display the board in a human-readable format
    def display_board(self):
        print(f"\n{self.board[0]} | {self.board[1]} | {self.board[2]}")
        print("--+---+--")
        print(f"{self.board[3]} | {self.board[4]} | {self.board[5]}")
        print("--+---+--")
        print(f"{self.board[6]} | {self.board[7]} | {self.board[8]}")
        print("\n")

    # Get the player's move, ensuring it's a valid move
    def player_input(self):
        while True:
            try:
                position = int(input(f"Player {self.current_player}, enter a position (1-9): ")) - 1
                if position < 0 or position > 8 or self.board[position] != ' ':
                    print("Invalid position. Try again.")
                else:
                    self.board[position] = self.current_player
                    break
            except ValueError:
                print("Invalid input. Please enter a number between 1 and 9.")

    # Check if there is a winner
    def check_win(self):
        win_conditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
            [0, 4, 8], [2, 4, 6]              # Diagonals
        ]
        for condition in win_conditions:
            if self.board[condition[0]] == self.board[condition[1]] == self.board[condition[2]] != ' ':
                return True
        return False

    # Check if the board is full, which means the game is a tie
    def check_tie(self):
        return ' ' not in self.board

    # The main game loop
    def play(self):
        while True:
            self.display_board()
            self.player_input()

            # Check if the current player has won
            if self.check_win():
                self.display_board()
                print(f"Player {self.current_player} wins!")
                break

            # Check if the game is a tie
            if self.check_tie():
                self.display_board()
                print("The game is a tie!")
                break

            # Switch players
            self.current_player = 'O' if self.current_player == 'X' else 'X'


# Start the game
if __name__ == '__main__':
    game = TicTacToe()
    game.play()

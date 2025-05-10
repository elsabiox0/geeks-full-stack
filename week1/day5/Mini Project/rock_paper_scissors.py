import random

# Game class as before
class Game:
    def __init__(self):
        self.items = ['rock', 'paper', 'scissors']

    def get_user_item(self):
        while True:
            user_item = input("Choose rock, paper, or scissors: ").lower()
            if user_item in self.items:
                return user_item
            print("Invalid choice. Please try again.")

    def get_computer_item(self):
        return random.choice(self.items)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        elif (user_item == 'rock' and computer_item == 'scissors') or \
             (user_item == 'paper' and computer_item == 'rock') or \
             (user_item == 'scissors' and computer_item == 'paper'):
            return 'win'
        return 'loss'

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"You selected {user_item}. The computer selected {computer_item}.")
        print(f"You {result}!")
        return result

# Function to display menu and get user choice
def get_user_menu_choice():
    print("\nMenu:")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    
    choice = input("Enter your choice (1/2/3): ").strip()
    
    # Data validation: ensure the choice is valid
    if choice in ['1', '2', '3']:
        return choice
    else:
        print("Invalid choice. Please try again.")
        return get_user_menu_choice()

# Function to print the results of the games played
def print_results(results):
    print("\nGame Results:")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Draws: {results.get('draw', 0)}")
    print("Thank you for playing!")

# Main function to run the game
def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}  # Initializing the results dictionary
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == '1':  # Play a new game
            game = Game()
            game_result = game.play()  # Play the game and get the result
            
            # Update the results based on the game result
            if game_result == 'win':
                results['win'] += 1
            elif game_result == 'loss':
                results['loss'] += 1
            elif game_result == 'draw':
                results['draw'] += 1
        
        elif choice == '2':  # Show scores
            print_results(results)
        
        elif choice == '3':  # Quit
            print_results(results)
            print("Goodbye!")
            break  # Exit the loop and quit the program

if __name__ == '__main__':
    main()

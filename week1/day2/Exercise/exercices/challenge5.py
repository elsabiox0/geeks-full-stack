import random

def guess(x):
    number = random.randint(1, 100)
    if x == number:
        print("You win")
    else:
        print("You lose")
        print("The number was", number)
        print("The number you entered was", x)

guess(int(input("Enter a number: ")))   
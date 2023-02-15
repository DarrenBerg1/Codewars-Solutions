class Guessing_game():

    def __init__(self, answer_number):
        self.answer_number = answer_number
        self.user_guess = None
    
    def guess(self, user_guess):
        self.user_guess = user_guess
        if self.user_guess < self.answer_number:
            return "low"
        elif self.user_guess > self.answer_number:
            return "high"
        elif self.user_guess == self.answer_number:
            return "correct"

    def solved(self):
        if self.user_guess == self.answer_number:
            return True
        else:
            return False

answer = Guessing_game(10)

while not answer.solved():
    user_guess = int(input("Enter your guess: "))
    result = answer.guess(user_guess)
    print(result)

#print("Congratulations! You've solved the game.")
if answer.solved():
    print(True)




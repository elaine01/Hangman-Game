# Hangman-Game

Pokemon-themed hangman game where a user has unlimited rounds to catch'em all. 

## Demo
App can be played [here](https://elaine01.github.io/Hangman-Game/).


## Installation
```
git clone or fork repo
cd into the folder
open index.html
```

## Technology
```
HTML
CSS
Javascript
Bootstrap
```

## Usage

### Default on launch
On launch, ```index.html``` randomly loads a word to guess as underscores along with a reference image.

![default image](https://github.com/elaine01/Hangman-Game/blob/master/assets/images/screenshots/1startmode.png)

### Guessing letters
When a user guesses correctly, the letter(s) appear. When incorrectly guessed, the letter is added to the wronglyGuessed array and the number of guesses remaining decreases by one.

![default image](https://github.com/elaine01/Hangman-Game/blob/master/assets/images/screenshots/2guess%20_letters.png)

### Wins a round
When a user wins, the winning value increases by one.

![default image](https://github.com/elaine01/Hangman-Game/blob/master/assets/images/screenshots/3win.png)

### New round
![default image](https://github.com/elaine01/Hangman-Game/blob/master/assets/images/screenshots/4new_round.png)

### Loses a round
![default image](https://github.com/elaine01/Hangman-Game/blob/master/assets/images/screenshots/5lose.png)

After losing, a new round starts but the winning value stays the same.
![image](https://github.com/elaine01/Hangman-Game/blob/master/assets/images/screenshots/6_lose.png)

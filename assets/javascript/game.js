// Default counter
var wins = 0; // (# of times the user has guessed correctly)
var guessesLeft = 9; // (# of guesses left. This will update)

// Current guesses will be stored into an array
var currentGuessed = []; // Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// Full list of choices user can choose from
var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Full list of answers
var words = ["cat", "dog", "penguin", "bat"];

// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
document.onkeyup = function(event) {

	if (event.key === "Meta") {
		console.log(event.key)
		return;	
	}

// resets to new round
var reset = function() {
	guessesLeft = 9;
	currentGuessed.length = 0;
	document.querySelector(".guesses").innerHTML = "Number of guesses remaining: 9";
	}

	// User's  guess
var userGuess = event.key.toLowerCase();
var currentAnswer = answer[Math.floor(Math.random()*answer.length)];

	if (answer.indexOf(userGuess) === -1) { // User input != letter
		return alert("You must pick a letter to play!");
	} 
	if (currentGuessed.indexOf(userGuess) !== -1) { // User already guessed letter
		return alert("You already guessed that letter. Pick something else!");
	}

	if (userGuess === currentAnswer) { // if user guesses correctly
		wins++;
		console.log("User wins");
		document.querySelector(".winsCorrect").innerHTML = answer;
		document.querySelector(".win").innerHTML = "Wins: " + wins;
	} else if (guessesLeft === 0) {
		alert("Game over! Please try again");
		reset();
	} else if (userGuess !== currentAnswer) { // if user guesses incorrectly, subtract 1 guess left
		guessesLeft--;
		console.log("guesses left")
		document.querySelector(".guesses").innerHTML = "Number of guesses remaining: " + guessesLeft;
	}
	
	// Display the letters that the user guessed on viewport
	currentGuessed.push(userGuess);
	document.querySelector(".alreadyGuessed").innerHTML = currentGuessed.join(', ');
	}
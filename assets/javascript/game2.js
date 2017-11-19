// Default counter
var wins = 0; // (# of times the user has guessed correctly)
var guessesLeft = 9; // (# of guesses left. This will update)

var wordsArr = ["cat", "doggie", "penguin", "bats"]; // answer choices
var word = wordsArr[Math.floor(Math.random()*wordsArr.length)]; // randomize words for user to guess
var underScore = []; // underscore based on length of word

// Full list of choices user can choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentGuessed = []; // user's guesses so far in a round

//
function generateUnderscore() {
	for (i = 0; i < word.length; i++) {
		underScore.push('_');
	}
	return underScore;
}


// to start a game
function startGame() {
	word;
	currentGuessed.length = 0;
	for (var i = 0; i < word.length; i++) {
		underScore.push("_");
	}
	return underScore;
	// document.querySelector(".currentWord").innerHTML = currentGuessed.join(" ");
	// document.querySelector(".guesses").innerHTML = "Number of guesses remaining: 9";
	// document.querySelector(".letters").innerHTML = "Letters already guessed: ";
}

// get a guess from the player
function guessOne() {
	// var guess = document.getElementById("alreadyGuessed").value;
	document.addEventListener("keyup", function (event)) {
		var keyCode = event.keyCode;
		var keyword = String.fromCharCode(keyCode);
		console.log(keyword);
	}
}


// document.onkeyup = function(event) {

// 	if (event.key === "Meta") {
// 		console.log(event.key)
// 		return;
// 	}

// 	start(); // start game when user presses any key
// 	var userGuess = event.key.toUpperCase();
// 	console.log(userGuess);

// 	if (letters.indexOf(userGuess) === -1) {
// 		return alert("You must pick a letter to play!");
// 	}
// 	if  (currentGuessed.indexOf(userGuess) !== -1) {
// 		return alert("You already guessed that letter. Pick something else!");
// 	}

// 	if (userGuess )


// 	currentGuessed.push(userGuess);
// 	document.querySelector(".alreadyGuessed").innerHTML = currentGuessed.join(' ');

// }



// create an array of words
// choose words randomly

// create underscores based on length of word
// let generateUnderscore = () => {
// 	for (i = 0; i < choosenWord.length; i++) {
// 		underScore.push('_');
// 	}
// 	return underScore;
// }

// get users guess



// get users guess
// check if guess is right
// if right push to right array
// if wrong push to wrong array






// var remainingLetters = word.length; // keep track of letters left to be guessed

// // User guessing one round
// while (remainingLetters > 0) {
	
// 	var guess = 
// }


// http://apprize.info/javascript/kids/7.html

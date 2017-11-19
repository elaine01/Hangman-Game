// Default counter
var wins = 0; // (# of times the user has guessed correctly)
var guessesLeft = 9; // (# of guesses left. This will update)

// create an array of words
var wordsArr = ["cat", "dog", "flower", "bats", "steak", "oranges", "algorithms", "flamingoes", "pitchforks", "outlandish"]; // answer choices

// choose word randomly
var currentWord = wordsArr[Math.floor(Math.random()*wordsArr.length)]; // randomize words for user to guess
var underScore = []; // underscore based on length of word

// Full list of choices user can choose from
// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentGuessed = []; // user's guesses so far in a round
var rightWord = []; // user's correct guesses
var wrongWord = []; // user's incorrect guesses


// create underscores based on length of word
function generateUnderscore() {
	currentWord = wordsArr[Math.floor(Math.random()*wordsArr.length)];
	console.log(currentWord);
		console.log(document.querySelector(".docUnderScore") + " generate");
		console.log(underScore + " generate1");
		document.querySelector(".docUnderScore").innerHTML = underScore.join(' ');
	
}

for (i = 0; i < currentWord.length; i++) {
	underScore[i] = "_";
	if (currentWord[i] === currentGuessed) {
		rightWord[i] = currentGuessed;
		console.log(underScore);
	}
}

// resets to new round
var reset = function() {
	guessesLeft = 9;
	currentGuessed = [];
	rightWord = [];
	wrongWord = [];
	underScore = [];
	document.querySelector(".guesses").innerHTML = "Number of guesses remaining: 9";
	document.querySelector("#wrongGuess").innerHTML = "";
	generateUnderscore();
	}




// get user's guess
document.onkeyup = function(event) {
	if (event.key === "Meta") {
		return;	
	}

	var userGuess = event.key.toLowerCase();
	console.log(userGuess);
	var indexNum = currentWord.indexOf(userGuess);
	// // if user's guess != a letter
	// if (letters.indexOf(userGuess) === -1) {
	// 	return alert("You must pick a letter to play!");
	// } // if user already guessed that letter
	// if (currentGuessed.indexOf(userGuess) !== -1) {
	// 	return alert("You already guessed that letter. Pick something else!");
	// }

	// if user's guess is right
	if (indexNum > -1) { 
		// add to right words array
		for (i = 0; i < currentWord.length; i++) {
			if (currentWord[i] === userGuess) {
				// replace underscore with right letter
				underScore[currentWord.indexOf(userGuess)] = userGuess;
				document.querySelector(".docUnderScore").innerHTML = underScore.join(" ");
				console.log(underScore.join(" "));
			}
			// docdocUnderScore.innerHTML = rightWord;
			if (currentWord.indexOf(userGuess) === -1) {
				document.querySelector(".docUnderScore").innerHTML = underScore.join(' ');
				wrongWord.push(userGuess);
				document.getElementById("wrongGuess").innerHTML = wrongWord.join(' ');
			}
			else if (underScore.join('') === currentWord) {
			// console.log(underScore + " in if");
			wins++;
			document.querySelector(".win").innerHTML = "Wins: " + wins;
			alert("You win!");
			reset();
			}
		}
	} else { // if user's guess is wrong
		if (guessesLeft === 0) { // if user has 0 guesses left
			alert("You lose!");
			reset();
		} else {
			wrongWord.push(userGuess);
			console.log(document.getElementById("wrongGuess"));
			console.log(wrongWord);
			document.getElementById("wrongGuess").innerHTML = wrongWord.join(' ');	
			guessesLeft--;
			document.querySelector(".guesses").innerHTML = "Number of guesses remaining: " + guessesLeft;	
		}  
	}  
};
reset();


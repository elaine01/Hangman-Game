// Default counter
var wins = 0; // (# of times the user has guessed correctly)
var guessesLeft = 9; // (# of guesses left. This will update)

// create an array of words
var wordsArr = ["ivysaur", "cyndaquil", "togepi", "pidgeot", "raichu", "vulpix", "growlithe", "onix",
                "cubone", "articuno", "pichu", "xatu", "umbreon", "swinub", "tyrogue", "lugia", "combusken",
                "mudkip", "shiftry", "ralts", "aron", "ivysaur"]; // answer choices

// choose word randomly
var currentWord = wordsArr[Math.floor(Math.random()*wordsArr.length)]; // randomize words for user to guess
var underScore = []; // underscore based on length of word

// Full list of choices user can choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
               "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentGuessed = []; // user's guesses so far in a round
var rightWord = []; // user's correct guesses
var wrongWord = []; // user's incorrect guesses


// create underscores based on length of word
function generateUnderscore() {
	currentWord = wordsArr[Math.floor(Math.random()*wordsArr.length)];
	console.log(currentWord);
	for (i = 0; i < currentWord.length; i++) {
		underScore.push('_');
		document.querySelector(".docUnderScore").innerHTML = underScore.join(' ');
	}
}

// image associated with the current word
function image() {
	if (currentWord === "ivysaur") {
			document.getElementById("guessImage").src = "assets/images/ivysaur.png";
	}
	if (currentWord === "cyndaquil") {
			document.getElementById("guessImage").src = "assets/images/cyndaquil.png";
	}
	if (currentWord === "togepi") {
			document.getElementById("guessImage").src = "assets/images/togepi.png";
	}
	if (currentWord === "pidgeot") {
			document.getElementById("guessImage").src = "assets/images/pidgeot.png";
	}
	if (currentWord === "raichu") {
			document.getElementById("guessImage").src = "assets/images/raichu.png";
	}
	if (currentWord === "vulpix") {
			document.getElementById("guessImage").src = "assets/images/vulpix.png";
	}
	if (currentWord === "growlithe") {
			document.getElementById("guessImage").src = "assets/images/growlithe.png";
	}
	if (currentWord === "onix") {
			document.getElementById("guessImage").src = "assets/images/onix.png";
	}
	if (currentWord === "cubone") {
			document.getElementById("guessImage").src = "assets/images/cubone.png";
	}
	if (currentWord === "articuno") {
			document.getElementById("guessImage").src = "assets/images/articuno.png";
	}
	if (currentWord === "pichu") {
			document.getElementById("guessImage").src = "assets/images/pichu.png";
	}
	if (currentWord === "xatu") {
			document.getElementById("guessImage").src = "assets/images/xatu.png";
	}
	if (currentWord === "umbreon") {
			document.getElementById("guessImage").src = "assets/images/umbreon.png";
	}
	if (currentWord === "swinub") {
			document.getElementById("guessImage").src = "assets/images/swinub.png";
	}
	if (currentWord === "tyrogue") {
			document.getElementById("guessImage").src = "assets/images/tyrogue.png";
	}
	if (currentWord === "lugia") {
			document.getElementById("guessImage").src = "assets/images/lugia.png";
	}
	if (currentWord === "combusken") {
			document.getElementById("guessImage").src = "assets/images/combusken.png";
	}
	if (currentWord === "mudkip") {
			document.getElementById("guessImage").src = "assets/images/mudkip.png";
	}
	if (currentWord === "shiftry") {
			document.getElementById("guessImage").src = "assets/images/shiftry.png";
	}
	if (currentWord === "ralts") {
			document.getElementById("guessImage").src = "assets/images/ralts.png";
	}
	if (currentWord === "aron") {
			document.getElementById("guessImage").src = "assets/images/aron.png";
	}
	if (currentWord === "ivysaur") {
			document.getElementById("guessImage").src = "assets/images/ivysaur.png";
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
	image();
	}


// get user's guess
document.onkeyup = function(event) {
	if (event.key === "Meta") {
		return;	
	}

	var userGuess = event.key.toLowerCase();
	console.log(userGuess);
	var indexNum = currentWord.indexOf(userGuess);

	// if user's guess != a letter
	if (letters.indexOf(userGuess) === -1) {
		console.log(letters.indexOf(userGuess));
		return alert("You must pick a letter to play!");
	} // if user already guessed that letter
	// if (currentGuessed.indexOf(userGuess) !== -1) { // User already guessed letter
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
			var audio = new Audio("assets/sounds/victory.mp3");
			audio.play();
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
			document.getElementById("wrongGuess").innerHTML = wrongWord.join(' ');	
			guessesLeft--;
			document.querySelector(".guesses").innerHTML = "Number of guesses remaining: " + guessesLeft;	
		}  
	}
	
};




reset();





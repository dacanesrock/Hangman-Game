//word library
var wordLib = ["skrillex", "diplo", "josh-pan", "lido", "mura-masa", "getter", "dj-snake", "vindata", "mr-carmack", "flume", "branchez"];

//empty array for guessed letters
var guesses = [];

//empty array for spaces
var spaces = [];

//empty variable for letters & spaces
var letters;

//win loss variables
var wins = 0;
var losses = 0;

//user starts with 10 lives
var lives = 10;

//choose a word
var currentWord = wordLib[Math.floor(Math.random() * wordLib.length)];

function startUp () {
	for (var i = 0; i < currentWord.length; i++) {
		spaces[i] = "_ ";
	}

	letters = spaces.join("");
	document.getElementById("letters").innerHTML = letters;

	var lives = (currentWord.length + 5);
	document.getElementById("lives").innerHTML = lives;
}

/////////////////////////////////
//will set up game on window load
window.onload = function startUp () {
	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === "-") {
			spaces[i] = "- ";
		}
		else {
			spaces[i] = "_ ";
		}
	}

	letters = spaces.join("");
	document.getElementById("letters").innerHTML = letters;

	var lives = (currentWord.length + 5);
	// var lives = 11;
	document.getElementById("lives").innerHTML = lives;
}

/////////////////////////
//reset default variables
function resetVariables() {
	var guesses = [];
	startUp();
}

/////////////////
//losing function
function loser() {
	if (lives < 1) {
		losses++;
		document.getElementById("losses").innerHTML = losses;
		resetVariables();
		startUp();
	}
}


// function addGuess() {
// 	document.getElementById("guesses").innerHTML = guesses.join("");
// }

/////////////////////
//main game processes
document.onkeyup = function(event) {

	var userGuess = event.key;

	if (userGuess.length > 0) 
	{
		for (var i = 0; i < currentWord.length; i++)
		{
			if (currentWord[i] === userGuess)
			{
				spaces[i] = userGuess;
			}
			// else (currentWord[i] != userGuess) {
			// 	guesses[i] = userGuess;
			// }
		}

	guesses.push(userGuess);	
	lives--;
	document.getElementById("lives").innerHTML = lives;
	document.getElementById("letters").innerHTML = spaces.join(" ");
	document.getElementById("guesses").innerHTML = guesses.join(" ");

	
	}

	// loser();
	// addGuess();
	// resetVariables();
	// document.querySelector("guesses").innerHTML = userGuess;

}
//word library
var wordLib = ["skrillex", "diplo", "galantis", "lido", "deadmau5", "getter", "zedd", "vindata", "tiesto", "flume", "branchez", "avicii", "hardwell", "machineheart"];

//empty array for guessed letters
var guesses = [];

//empty array for spaces
var spaces = [];

//empty variable for letters & spaces
var letters;

//win loss variables
var wins = 0;
var losses = 0;

//user starts with lives = #of letters in currentWord + 5
var lives ;

//correct guess counter
var correctGuess ;

//choose a word
var currentWord ;

//removeSpaces will remove spaces from dictionary when used with split
//wordSeparated will house array for currentWord after split
var removeSpaces ;
var wordSeparated ;

/////////////////////
//reset game on click DOESN'T WORK YET
// $("#playAgain").on("click", function() 
// {
// 	resetVariables() ;
// 	startUp() ;
// }
//  )

function startUp () {
	currentWord = wordLib[Math.floor(Math.random() * wordLib.length)];
	console.log(currentWord);

	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === "\u00A0") {
			spaces[i] = " \u00A0";
		}
		else {
			spaces[i] = "_ ";
		}
	}

	letters = spaces.join("");
	document.getElementById("letters").innerHTML = letters;

	lives = (currentWord.length + 5);
	document.getElementById("lives").innerHTML = lives;

	correctGuess = 0;
}

/////////////////////////////////
//will set up game on window load
window.onload = function startUp () {

	currentWord = wordLib[Math.floor(Math.random() * wordLib.length)];
	console.log(currentWord);

	// re = /\s*;\s*/;
	// wordSeparated = currentWord.split(re);

	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === "_") 
		{
			spaces[i] = "\u00A0";
		}
		else 
		{
			spaces[i] = "_ ";
		}
	}

	letters = spaces.join("");
	document.getElementById("letters").innerHTML = letters;

	lives = (currentWord.length + 5);
	document.getElementById("lives").innerHTML = lives;

	correctGuess = 0;

	// document.getElementById("playOn").onclick = function play() {
	// 	playOn() ;
 //    }
}

/////////////////////////
//reset default variables
function resetVariables() {
	guesses = [];
	spaces = [];
	startUp();
}

/////////////////
//losing function
function loser() {
	if (lives < 1) 
	{
		document.getElementById("winnerMessage").innerHTML = "Game Over!";
		losses++;
		document.getElementById("losses").innerHTML = losses;
		resetVariables();
		// startUp();
	}
}

//////////////////
//winning function
function winner() {
	if (correctGuess === currentWord.length) 
	{
		document.getElementById("winnerMessage").innerHTML = "You Win!";
		wins++;
		document.getElementById("wins").innerHTML = wins;
		resetVariables();
	}
}

// function addGuess() {
// 	document.getElementById("guesses").innerHTML = guesses.join("");
// }

/////////////////////
//main game processes
document.onkeyup = function(event) {

	var userGuess = event.key;

		for (var i = 0; i < currentWord.length; i++)
		{
			if (currentWord[i] === userGuess)
			{
				spaces[i] = userGuess;
				correctGuess++;
			}
			// else (currentWord[i] != userGuess) {
			// 	guesses[i] = userGuess;
			// }
		}

	// removeSpaces = /\s*/;
	// wordSeparated = currentWord.split("removeSpaces");	

	guesses.push(userGuess);	
	lives--;
	document.getElementById("lives").innerHTML = lives;
	document.getElementById("letters").innerHTML = spaces.join(" ");
	document.getElementById("guesses").innerHTML = guesses.join(" ");


	loser();
	winner();
	// addGuess();
	// resetVariables();
	// document.querySelector("guesses").innerHTML = userGuess;

}
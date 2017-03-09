//word library
var wordLib = ["skrillex", "diplo", "galantis", "lido", "deadmau5", "getter", "zedd", "vindata", "tiesto", "flume", "branchez", "avicii", "hardwell", "machineheart"];

//available letter
var availableLetters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,5";

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

var lettersGuessed ;
var lettersMatched ;

/////////////////////
//reset game on click DOESN'T WORK YET
//$("#playAgain").on("click", function() 
//{
// resetVariables() ;
// startUp() ;
//}
// )

function startUp () 
{
	currentWord = wordLib[Math.floor(Math.random() * wordLib.length)];
	console.log(currentWord);

	for (var i = 0; i < currentWord.length; i++) 
	{
		if (currentWord[i] === "\u00A0") 
		{
			spaces[i] = " \u00A0";
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
}

//document.getElementById("playAgain").onclick = setup;

/////////////////////////////////
//will set up game on window load
window.onload = function startUp () 
{

	currentWord = wordLib[Math.floor(Math.random() * wordLib.length)];
	console.log(currentWord);

	// re = /\s*;\s*/;
	// wordSeparated = currentWord.split(re);

	for (var i = 0; i < currentWord.length; i++) 
	{
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
}

/////////////////////////
//reset default variables
function resetVariables() 
{
	guesses = [];
	spaces = [];
	startUp();
}

/////////////////
//losing function
function loser() 
{
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
function winner() 
{
	if (correctGuess === currentWord.length) 
	{
		document.getElementById("winnerMessage").innerHTML = "You Win! The word was: " + currentWord.toUpperCase();
		wins++;
		document.getElementById("wins").innerHTML = wins;
		resetVariables();
	}
}

/////////////////////
//main game processes
document.onkeyup = function(event) 
{

	var userGuess = event.key.toLowerCase();

	// is guess a valid letter? (according to available letters)
    if (availableLetters.indexOf(userGuess) > -1) 
    {
        // has it been guessed already?
        for (var i = 0; i < guesses.length; i++)
        {
        	if (guesses[i] === userGuess)
        	{
        		document.getElementById("winnerMessage").innerHTML = "you've already guessed this letter!";
            	lives.classList.add("text-warning");
        	}
        }

		for (var i = 0; i < currentWord.length; i++)
		{
			if (currentWord[i] === userGuess)
			{
				spaces[i] = userGuess;
				correctGuess++;
			}
		}

		guesses.push(userGuess);	
		lives--;
	}
	// not a valid letter, error
    else 
    {
    	document.getElementById("winnerMessage").innerHTML = "this is not a valid guess, try again!";
    }

	// removeSpaces = /\s*/;
	// wordSeparated = currentWord.split("removeSpaces");	


	document.getElementById("lives").innerHTML = lives;
	document.getElementById("letters").innerHTML = spaces.join(" ");
	document.getElementById("guesses").innerHTML = guesses.join(" ");


	loser();
	winner();

}
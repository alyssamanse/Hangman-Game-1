// Assigning variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
				"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var phrase = ["champion", "chicago", "bulls", "hangtime", "airness", "jordan"];
var wins = 0;
//var wins2 = false;
var losses = 0;
//var losses2 = false;
var guesses = 10;

//var buttonStart = document.getElementById("start");
//var buttonNew = document.getElementById("new");

// Computer randomly chooses a choice from the phrase array for User to guess.
var blankWord = phrase[Math.floor(Math.random() * phrase.length)];


// Creating an empty array to fill with underscores to match number of letters in word.
var answerSpaces = [];
	for (var i = 0; i < blankWord.length; i++) {
			answerSpaces[i] = "_";
		}
		console.log(answerSpaces);
		var letters = blankWord.length;

var lettersGuessed = [];

// ADD RESET FUNCTION HERE AFTER GLOBAL VARIABLES
// Create function that starts new game
//var reset = {
	function newGame() {
			alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
				"r", "s", "t", "u", "v", "w", "x", "y", "z"];
			guesses = 10;
			console.log(guesses);
			blankWord = phrase[Math.floor(Math.random() * phrase.length)];
			console.log(blankWord);
			answerSpaces = [];

			for (var i = 0; i < blankWord.length; i++) {
					answerSpaces[i] = "_";
				}
				console.log(answerSpaces);
			// ADDED TO DISPLAY ANSWER SPACES, LETTERS GUESSED AND GUESSES BEFORE USER CHOOSES FIRST LETTER
			// JOINED ANSWER SPACES AND LETTERS GUESSED TO REMOVE COMMAS
			document.getElementById("spaces").innerHTML = answerSpaces.join(" ");
			document.getElementById("letter-choice").innerHTML = lettersGuessed.join(" ");
			document.getElementById("count").innerHTML = guesses;
			letters = blankWord.length;
			console.log(letters);
			lettersGuessed = [];
	};
//};

// ADDED TO START NEW GAME BEFORE ONKEYUP
newGame();

// Checking to see if the User's guess matches alphabet, then a valid letter in the phrase.
//var playGame = {
	//matching: function() {
		document.onkeyup = function(event) {
		    var userGuess = event.key;
		    userGuess = userGuess.toLowerCase();

		        //check alphabet
		        for (var k = 0; k < alphabet.length; k++) {
		        	if (userGuess === alphabet[k]){
		        		console.log(userGuess);
		        		lettersGuessed.push(userGuess);
		        		console.log(lettersGuessed);
		        		// JOINED LETTERS GUESSED TO REMOVE COMMAS
		        		document.getElementById("letter-choice").innerHTML = lettersGuessed.join(" ");
		        		// REMOVED SO COUNT DOESN'T DECREASE FOR CORRECT LETTER CHOICES
		        		// guesses--;
		        		console.log(guesses);
		        		document.getElementById("count").innerHTML = guesses;
		        		alphabet.splice(alphabet.indexOf(userGuess), 1);		
					    			
					    			//check phrase
								    for (var j = 0; j < blankWord.length; j++) {
								    	if (userGuess === blankWord[j]) {
								    		answerSpaces[j] = userGuess;
								    		letters--;
								    		console.log(answerSpaces);
								    		// ADDED TO REMOVE COMMAS FROM ANSWER SPACES
								    		document.getElementById("spaces").innerHTML = answerSpaces.join(" ");
								    		console.log(letters);
							    		}
						    		}
							}
						}
				
				if (letters === 0) {
					wins++;
					//document.onkeyup = function(event) {
						newGame(); //reset variables
					//};

					document.getElementById("count").innerHTML = guesses;
					console.log(wins);
					document.getElementById("win-section").innerHTML = wins;
					document.getElementById("loss-section").innerHTML = losses;
					document.getElementById("final-result").innerHTML = "You Win!";
					console.log ("You win");
					

				} else if (guesses === 0) {
					losses++;
					//document.onkeyup = function(event) {
						newGame(); //reset variables
					//};

					document.getElementById("count").innerHTML = guesses;
					console.log(losses);
					document.getElementById("win-section").innerHTML = wins;
					document.getElementById("loss-section").innerHTML = losses;
					document.getElementById("final-result").innerHTML = "You Lose!";
					document.getElementById("correct-answer").innerHTML = "Correct Answer: " + blankWord;
					console.log("You Lose");
					

				}
		};
	//}
//};

//document.onkeyup = function(event) {
//		document.getElementById("spaces").innerHTML = answerSpaces;
//		document.getElementById("count").innerHTML = guesses;
//		playGame.matching();
//};

/* 	In this version, there is an issue with correctly decreasing the guesses count.
   	I think you may need something like a checker that checks if the user's guess
 	is in your hangman word and if it is a valid letter of the alphabet.
 	If your checker returns a true boolean, then you can create an if else statement
 	so that true adds the letter to your blank word and false decreases a guess

 	You already have most of this written but I think if it were nested in another 

 	Here is my checker that my tutor helped me with:

 		// Set to false initially before checking the userGuess letter against the word and alphabet
		var checker = false;
		var valid = false;

		// checks if the userGuess is a valid letter
		function validate() {

			var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

			for (var i = 0; i < guessedLetters.length; i++) {

				if (userGuess === guessedLetters[i] || userGuess === blankWord[i]) {
					alert("You've already tried " + userGuess + ". Try again!");
					return;
				} 
			}

			for (var j = 0; j < alphabet.length; j++) {
				if (userGuess === alphabet[j]) {
					valid = true;
				}
			}
		}

		validate();

		// Checks if the userGuess letter is in the hangmanWord
		for (var i = 0; i < wordLength; i++) {

			if (userGuess === hangmanWordLetters[i]) {
				checker = true;
			} 
		}

		// If the letter is in the hangmanWord, then that letter is inserted into the correct index(es)
		if (checker) {

			for (var i = 0; i < wordLength; i++) {

				if (userGuess === hangmanWordLetters[i]) {
					blankWord[i] = userGuess;
					currentWord.innerHTML = "<h1> " + blankWord + " </h1>";
					currentWord.innerHTML = "<h1> " + blankWord.join(" ") + "</h1>";
				} 
			}
		} else if (valid) {
			guessedLetters.push(userGuess);
			lives--;
			guessesRemaining.innerHTML = "<h2> " + lives + "</h2>";
			lettersGuessed.innerHTML = "<h2> " + guessedLetters.join(" ") + "</h2>";
		} 	

*/


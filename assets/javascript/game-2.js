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
			letters = blankWord.length;
			console.log(letters);
			lettersGuessed = [];
	};
//};

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
		        		document.getElementById("letter-choice").innerHTML = lettersGuessed;
		        		guesses--;
		        		console.log(guesses);
		        		document.getElementById("count").innerHTML = guesses;
		        		alphabet.splice(alphabet.indexOf(userGuess), 1);		
					    			
					    			//check phrase
								    for (var j = 0; j < blankWord.length; j++) {
								    	if (userGuess === blankWord[j]) {
								    		answerSpaces[j] = userGuess;
								    		letters--;
								    		console.log(answerSpaces);
								    		document.getElementById("spaces").innerHTML = answerSpaces;
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
//		console.log(blankWord);
//		document.getElementById("spaces").innerHTML = answerSpaces;
//		document.getElementById("count").innerHTML = guesses;
//		playGame.matching();
//};


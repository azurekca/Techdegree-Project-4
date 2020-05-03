/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// create a game class with methods for
// starting game
// ending game
// handling user interactions
// getting a random phrase
// checking for a win
// removing life from the scoreboard

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [
			'Stay on target',
			'Then Ill see you in hell',
			'I find your lack of faith disturbing',
			'These blast points are too accurate for sand people',
			'Red leader standing by'
		];
    this.activePhrase = null;
    this.usedPhrases = 0;
	}

	startGame() {
		// hide the overlay which will also prevent the button from being used
    overlay.style.display = 'none';
    // set the active phrase to a random phrase
    this.activePhrase = new Phrase(this.getRandomPhrase());
    // 
    this.activePhrase.addPhraseToDisplay();
	}

	getRandomPhrase() {
		// retrieve random phrase from phrases array
    const randomNum = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[randomNum]
    // remove random phrase from phrases and increment usedPhrases counter
    this.phrases.splice(randomNum, 1)
    this.usedPhrases++
    return randomPhrase;
	}

	handleInteraction(event) {
		// capture letter user selected
		let guessedLetter;
		if (event.type === 'click') {
			guessedLetter = event.target.textContent;
		} else if (event.type === 'keyup') {
			guessedLetter = event.key;
		}
		console.log(guessedLetter);
	}
}

/*
Create the Game class in the Game.js file.

    The class should also have these methods:
    startGame(): hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.

    handleInteraction(): this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
        Disable the selected letter’s onscreen keyboard button.
        If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
        If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.

  removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.

  checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.

  gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
 
  */

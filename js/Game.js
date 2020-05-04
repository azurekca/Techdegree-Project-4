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
/**
 * Game class to
 */
class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [
			'Stay on target',
			'Then I will see you in hell',
			'I find your lack of faith disturbing',
			'These blast points are too accurate for sand people',
			'Red leader standing by',
			'these are not the droids you are looking for'
		];
		this.activePhrase = null;
		this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
	}
	/**
	 * method to start a new game
	 */
	startGame() {
		// hide the overlay which will also prevent the start button from being used
		overlay.style.display = 'none';
		// set the active phrase to a new Phrase object containing one of the phrases
		this.activePhrase = new Phrase(this.getRandomPhrase());
		// show the phrase with letters hidden
		this.activePhrase.addPhraseToDisplay();
	}
	/**
	 * method to get a random phrase from the phrases property
	 */
	getRandomPhrase() {
		// retrieve random phrase from phrases array
		const randomNum = Math.floor(Math.random() * this.phrases.length);
		const randomPhrase = this.phrases[randomNum];
		// remove random phrase from phrases and increment usedPhrases counter
		this.phrases.splice(randomNum, 1);
		this.usedPhrases++;
		return randomPhrase;
	}
	/**
	 * method to handle the game logic
	 * @param {(click|mousedown)} event user input
	 */
	handleInteraction(event) {
		let guessedLetter; 	// will hold letter user guessed
		let cls;						// will hold css class to style used letters
		
		// capture letter user selected
		if (event.type === 'click') {
			guessedLetter = event.target.textContent;
		} else if (event.type === 'keyup') {
			// check if letter wasn't already guessed, bail if it was
			if (!this.alphabet.includes(event.key)) return;
			guessedLetter = event.key;
		}

		// check if guess is in the phrase
		if (this.activePhrase.checkLetter(guessedLetter)) {
			// letter is in phrase: show letter
			this.activePhrase.showMatchedLetter(guessedLetter);
			// indicate on onscreen keyboard the correct letter was chosen
			cls = 'chosen';
			// call gameOver method if all the letters were found
			if (this.checkForWin()) this.gameOver('win');
		} else {
			cls = 'wrong';
			this.removeLife();
		}

		// find button element corresponding to letter and style and disable it
		for (const btn of document.querySelectorAll('.key')) {
			if (btn.textContent.includes(guessedLetter)) {
				btn.classList.add(cls);
				btn.disabled = true;
			}
		}
		
		// remove letter from alphabet of available letters
		this.alphabet = this.alphabet.replace(guessedLetter, '');
	}
	/**
	 * method to keep track of and display wrong guesses
	 * and call the gameOver method if the player lost
	 */
	removeLife() {
		// change onscreen heart to lost
		const heart = document.getElementsByTagName('img')[this.missed];
		heart.src="images/lostHeart.png";
		// increment the missed counter
		this.missed++
		console.log(`you lost ${this.missed} hearts`);
		if (this.missed >= 5) {
			this.gameOver('lose')
		}
	}
	/**
	 * method to check if the player has won
	 */
	checkForWin() {
		return document.getElementsByClassName('hide').length === 0;
	}
	/**
	 * method to show the outcome of the game
	 * @param {string} outcome 
	 */
	gameOver(outcome) {
		// set win or lose class and game over message depending on outcome
		let cls;
		let message;
		if (outcome === 'win') {
			cls = 'win';
			message = 'Woo hoo!! You Win!!'
		} else if (outcome === 'lose') {
			cls = 'lose';
			message = 'Boo hoo!! You lose :('
		}
		overlay.classList = cls;

		// add game over message to overlay
		document.getElementById('game-over-message').innerText = message;
		// show the win/lose overlay
		overlay.style.display = '';
	}
}

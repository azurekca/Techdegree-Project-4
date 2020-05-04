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
		this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
	}

	startGame() {
		// hide the overlay which will also prevent the start button from being used
		overlay.style.display = 'none';
		// set the active phrase to a new Phrase object containing one of the phrases
		this.activePhrase = new Phrase(this.getRandomPhrase());
		// show the phrase with letters hidden
		this.activePhrase.addPhraseToDisplay();
	}

	getRandomPhrase() {
		// retrieve random phrase from phrases array
		const randomNum = Math.floor(Math.random() * this.phrases.length);
		const randomPhrase = this.phrases[randomNum];
		// remove random phrase from phrases and increment usedPhrases counter
		this.phrases.splice(randomNum, 1);
		this.usedPhrases++;
		return randomPhrase;
	}

	handleInteraction(event) {
		let guessedLetter;
		let cls;
		
		// capture letter user selected
		if (event.type === 'click') {
			// check if the clicked target was a key button, bail if not
			if (!event.target.matches('.key')) return;
			guessedLetter = event.target.textContent;
		} else if (event.type === 'keyup') {
			// check if letter wasn't already guessed, bail if it was
			if (!this.alphabet.includes(guessedLetter)) return;
			guessedLetter = event.key;
		}

		// check if guess is in the phrase
		if (this.activePhrase.checkLetter(guessedLetter)) {
			// letter is in phrase: show letter
			this.activePhrase.showMatchedLetter(guessedLetter);
			// indicate on onscreen keyboard the correct letter was chosen
			cls = 'chosen';
			if (this.checkForWin()) this.gameOver('win');
		} else {
			cls = 'wrong';
			this.removeLife();
		}

		// find button element corresponding to letter
		for (const btn of document.querySelectorAll('.key')) {
			if (btn.textContent.includes(guessedLetter)) {
				// change button style
				btn.classList.add(cls);
				// disable guessed button
				btn.disabled = true;
				// remove letter from alphabet of available letters
				this.alphabet = this.alphabet.replace(guessedLetter, '');
			}
		}
	}

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

	checkForWin() {
		return document.getElementsByClassName('hide').length === 0;
	}

	gameOver(outcome) {
		let cls;
		outcome === 'win' ?	cls = 'win' : cls = 'lose';
		overlay.classList = cls;
		overlay.style.display = '';
	}
}

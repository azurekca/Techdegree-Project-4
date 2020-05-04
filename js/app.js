/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlay = document.getElementById('overlay');
const resetBtn = document.getElementById('btn__reset');
const onscreenKeyboard = document.getElementById('qwerty');
const phraseUL = document.querySelector('#phrase ul');
let game = null;

function resetBoard() {
	// remove all li's from the phrase ul
	phraseUL.innerHTML = '';
	// remove chosen and wrong classes and enable all onscreen keys
	document.querySelectorAll('.key').forEach(key => {
		key.classList = 'key';
		key.disabled = false;
	})
	// reset hearts
	document.querySelectorAll('img[alt="Heart Icon"]').forEach(heart => {
		heart.src="images/liveHeart.png"
	})
}

// add event listener to start the game
resetBtn.addEventListener('click', function() {
	resetBoard();
	game = new Game();
	game.startGame();
});

// add event listener to keyboard
document.addEventListener('keyup', event => {
	if (game) {
		game.handleInteraction(event);
	}
});

// add event listeners to onscreen keyboard
onscreenKeyboard.addEventListener('click', event => {
	// check if an onscreen key was clicked, bail if not
	if (!event.target.matches('.key')) return;
	game.handleInteraction(event);
});


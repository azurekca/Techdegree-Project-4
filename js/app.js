/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlay = document.getElementById('overlay');
const resetBtn = document.getElementById('btn__reset');
const onscreenKeyboard = document.getElementById('qwerty');
let game = null;

// create new instance of the game class

// add event listener to start the game
resetBtn.addEventListener('click', function() {
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
			game.handleInteraction(event);
		}
	);


/* Update the app.js file.

    Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons:
        Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
				Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called. */
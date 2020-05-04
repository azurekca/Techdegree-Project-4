/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * Phraes class handles the creation of phrases
  * receives a phrase on instantiation
  */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * method to add the phrase property in the phrase object to the DOM
   */
  addPhraseToDisplay() {
    // turn the phrase string into an array of each letter and space
    const phraseArray = [...this.phrase]; 
    // variable to hold the css class that will be assigned to letters and spaces
    let cls = '';
    // create an li for each letter and space in the phrase
    phraseArray.forEach(function(char) {
      const li = document.createElement('li');
      if (char === ' ') {
        cls = ['space'];
      } else {
        cls = ['hide', 'letter', char];
      }
      li.textContent = char;
      li.classList.add(...cls);
      // add the li to the phrase ul
      phraseUL.appendChild(li);
    });
  }
  /**
   * method to check if a given letter is in the object's phrase property
   * @param {string} letter letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
  /**
   * method to reveal the matched letter on the board
   * @param {string} letter letter in the phrase property to show
   */
  showMatchedLetter(letter) {
    const letterElements = document.getElementsByClassName(letter);
    for (let i = 0; i < letterElements.length; i++) {
      letterElements[i].classList.remove('hide');
      letterElements[i].classList.add('show');
    }
  }
}

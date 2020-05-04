/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 // create a phrase class to handle the creation of phrases
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const ul = document.querySelector('#phrase ul');
    const phraseArray = [...this.phrase];
    let cls = '';
    phraseArray.forEach(function(char) {
      // create an li for each letter and space in the phrase
      const li = document.createElement('li');
      if (char === ' ') {
        cls = ['space'];
      } else {
        cls = ['hide', 'letter', char];
      }
      li.textContent = char;
      li.classList.add(...cls);
      ul.appendChild(li);
    });
  }

  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  showMatchedLetter(letter) {
    const letterElements = document.getElementsByClassName(letter);
    for (let i = 0; i < letterElements.length; i++) {
      letterElements[i].classList.remove('hide');
      letterElements[i].classList.add('show');
    }
  }
}
 /** 
Create the Phrase class in the Phrase.js file.

    The class should also have these methods:
        
        checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
        
        showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.

 */
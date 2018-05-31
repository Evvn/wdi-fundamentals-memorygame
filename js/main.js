//array of cards
var cards = ['queen', 'queen', 'king', 'king'];

//cards in play
var cardsInPlay = [];

//function to check for match
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
};

//function to store steps when user flips a cardTwo
var flipCard = function (cardId) {

//display card flipped in console
console.log('User flipped ' + cards[cardId])

//push selected card in to Play array
cardsInPlay.push(cards[cardId]);

//Checks if two cards are in play
  if (cardsInPlay.length === 2){
    checkForMatch();
  }
};

//call flipCard function test
flipCard(0);
flipCard(2);

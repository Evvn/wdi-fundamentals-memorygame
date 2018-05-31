//array of cards
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

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

//function to store steps when user flips a card
var flipCard = function (cardId) {

//display card flipped in console
console.log('User flipped ' + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

//push selected card in to Play array
cardsInPlay.push(cards[cardId].rank);

//Checks if two cards are in play
  if (cardsInPlay.length === 2){
    checkForMatch();
  }
};

//call flipCard function test
flipCard(0);
flipCard(2);

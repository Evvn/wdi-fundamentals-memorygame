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
var flipCard = function () {
//store data-id of clicked card in a variable
var cardId = this.getAttribute('data-id');
//display card flipped in console
console.log('User flipped ' + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
//push selected card in to Play array
cardsInPlay.push(cards[cardId].rank);
//update src of clicked card to cardImage from cards object
this.setAttribute('src', cards[cardId].cardImage);
//Checks if two cards are in play
  if (cardsInPlay.length === 2){
    checkForMatch();
  }
};
//function to create game board
var createBoard = function () {
  //for loop to loop through the cards array
  for (var i = 0; i < cards.length; i++) {
    //create card elements
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png')
    cardElement.setAttribute('data-id', i);
    //give cards id to be able to delete them later
    cardElement.setAttribute('id', 'card' + i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};
//call the function to create the board
createBoard();
//function to reset the board on reset image clicked
var resetBoard = function () {
    //for loop to clear previous cards by card id
    for (var i = 0; i < cards.length; i++) {
      var deleteCard = document.getElementById('card' + i);
      deleteCard.remove();
      //clear cards in play array
      cardsInPlay = [];
    }
    //call create board function to recreate the board
    createBoard();
};
//add event listener to reset image
var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetBoard);

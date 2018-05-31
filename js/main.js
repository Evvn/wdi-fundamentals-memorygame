console.log("Up and running!");

//array of cards
var cards = ['queen', 'queen', 'king', 'king'];
//cards in play
var cardsInPlay = [];
//first card flipped
var cardOne =  cards[0];
//add to cards in play array
cardsInPlay.push(cardOne);
//test card flipped in console
console.log('User flipped ' + cardOne);
//add second card, third in array
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log('User flipped ' + cardTwo);
//check if two cards have been played
if (cardsInPlay.length === 2){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
}

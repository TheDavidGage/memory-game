// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];
// loop to add event listeners to each card
for (var i = 0; i < cards.length; i++){
  cards[i].addEventListener("click", displayCard)
};
// displayCard is a functio we'll talk about this soon

// toggles open and show class to display cards
var displayCard = function () {
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
}

// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// deck of all cards in game
const deck = document.querySelector(".deck");
function startGame() {
  var shuffledCards = shuffle(cards);
  for (var i = 0; i < shuffledCards.length; i++){
    [].forEach.call(shuffledCards, function(item){
    });
  }
}

windom.onload = startGame();

// add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
  openedCards.push(this);
  var len = openedCards.length;
  if(len === 2){
    moveCounter();
    if(openedCards[0].type === openedCards[1].type){
      matched();
    } else {
      unmatched();
    }
  }
};

// for when cards match
function matched(){
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  openedCards[0].classList.remove("show", "open");
  openedCards[1].classList.remove("show","open");
  openedCards = [];
}

// for when cards don't match
function
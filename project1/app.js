const gameCardsDetails = require("./data.js");
const gameCards = require("./data.js");
const playerCards = [];
const playerValue = [];
let playerCount = 0;

/* First we shuffle the deck */
const gameDeckShuffle = () => {
  // This function shuffles the deck of cards
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5); // https://javascript.info/task/shuffle
  }
  shuffle(gameCards);
};

/* Get the number of players + deal cards */
const dealCards = () => {
  gameDeckShuffle();
  let playerCount = Number(prompt("How many players? Max 4 : "));
  for (let i = 0; i < playerCount; i++) {
    let draw = {
      name: "player" + [i + 1],
      cards: [gameCards[i], gameCards[playerCount + i + 1]],
    };
    playerCards.push(draw);
  }
  playerCards.push({
    name: "dealer",
    cards: [gameCards[playerCount], gameCards[playerCount * 2 + 1]],
  });
  gameCards.splice(0, (playerCount + 1) * 2);
  return playerCount;
};

dealCards();
console.log(playerCards);

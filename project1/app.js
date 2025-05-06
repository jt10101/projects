const gameCardsDetails = require("./data.js");
const gameCards = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
];
const playerCards = [];
const handValue = [];
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
    let handTotal = 0;
    handTotal =
      gameCardsDetails[gameCards[i]].value +
      gameCardsDetails[gameCards[playerCount + i + 1]].value;
    let draw = {
      name: "player" + [i + 1],
      cards: [gameCards[i], gameCards[playerCount + i + 1]],
      handvalue: handTotal,
    };
    playerCards.push(draw);
  }
  let handTotal = 0;
  handTotal =
    gameCardsDetails[gameCards[playerCount]].value +
    gameCardsDetails[gameCards[playerCount * 2 + 1]].value;
  playerCards.push({
    name: "dealer",
    cards: [gameCards[playerCount], gameCards[playerCount * 2 + 1]],
    handvalue: handTotal,
  });
  gameCards.splice(0, (playerCount + 1) * 2);
  return playerCount;
};

let playerCount = 0;
const playerCards = [];
const playerValue = [];
const gameCardsDetails = require("./data.js");
const gameCards = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
];
const gameDeckShuffle = () => {
  // This function shuffles the deck of cards
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5); // https://javascript.info/task/shuffle
  }
  shuffle(gameCards);
};
const dealCards = () => {
  gameDeckShuffle();
  let playerCount = Number(prompt("How many players? : "));
  for (let i = 0; i < playerCount; i++) {
    const playerCards[i].cards = [];
    let draw = {
      name: "player" + [i + 1],
      cards: gameCards[i],
      card2: gameCards[playerCount + i + 1],
    };
    playerCards.push(draw);
  }
  playerCards.push({
    name: "dealer",
    card1: gameCards[playerCount],
    card2: gameCards[playerCount * 2 + 1],
  });
  gameCards.splice(0, (playerCount + 1) * 2);
  return playerCount;
};

let handValue = 0;
const valueCalc = () => {
  dealCards();
  for (i = 0; i < playerCards[0].length - 1; i++) {
    handValue = gameCardsDetails[playerCards[0].card1].value + handValue;
    playerValue.push(handValue);
  }
  console.log(playerCards);
  console.log(handValue);
};
valueCalc();

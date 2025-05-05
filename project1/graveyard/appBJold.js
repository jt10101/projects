const gameCardsDetails = require("./data.js");
const playerCards = []; // this is the player's hand
const dealerCards = []; // this is the dealer's hand

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
  for (let i = 0; i < 2; i++) {
    playerCards.push(gameCards[0]);
    dealerCards.push(gameCards[1]);
    gameCards.splice(0, 2);
  }
};
const playerValueCalc = () => {
  let playerValue = 0;
  for (let i = 0; i < playerCards.length; i++) {
    playerValue = gameCardsDetails[playerCards[i]].value + playerValue;
  }
  return playerValue;
};
const dealerValueCalc = () => {
  let dealerValue = 0;
  for (let i = 0; i < dealerCards.length; i++) {
    dealerValue = gameCardsDetails[dealerCards[i]].value + dealerValue;
  }
  return dealerValue;
};

const gameOn = () => {
  dealCards();
  playerValueCalc();
  let playerValue = playerValueCalc();
  let dealerValue = dealerValueCalc();
  let playState = true;
  while (playState) {
    // loops until user decides to STAND
    let userDecision = prompt(
      `Your current hand value is ${playerValue} D : ${dealerValue}|. Hit [H] or stand [S]?: `
    );
    if (userDecision === "H") {
      playerCards.unshift(gameCards[0]);
      gameCards.splice(0, 1);
      playerValue = gameCardsDetails[playerCards[0]].value + playerValue;
      console.log("Wow, you're hitting!");
    } else if (userDecision === "S") {
      console.log("Standing your position!");
      playState = false;
    }
  }
  // Player has concluded their turn to draw cards
  if (dealerValue < 15) {
    while (dealerValue < 15) {
      // dealer will draw cards as long as their hand value is lesser than 15
      dealerCards.unshift(gameCards[0]);
      dealerValue = gameCardsDetails[dealerCards[0]].value + dealerValue;
      gameCards.splice(0, 1);
    }
  } else {
    if (playerValue > dealerValue) {
      console.log(
        `You win! Your hand: ${playerValue} | Dealer hand: ${dealerValue}`
      );
    } else if (playerValue < dealerValue) {
      `You lose! Your hand: ${playerValue} | Dealer hand: ${dealerValue}`;
    } else if (playerValue === dealerValue) {
      `Draw! Your hand: ${playerValue} | Dealer hand: ${dealerValue}`;
    }
  }
};
gameOn();

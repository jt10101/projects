const gameCardsDetails = require("../data.js");
const gameCards = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
];
const playerCards = []; // this is the player's hand
const dealerCards = []; // this is the dealer's hand
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
const randomInt = (max) => {
  return Math.floor(Math.random() * max);
};
const dealerAI = () => {
  let x = 0;
  x = randomInt(2);
  return x;
};
const playerValueCalc = () => {
  for (let i = 0; i < playerCards.length; i++) {
    playerValue = gameCardsDetails[playerCards[i]].value + playerValue;
  }
  return playerValue;
};
const dealerValueCalc = () => {
  for (let i = 0; i < dealerCards.length; i++) {
    dealerValue = gameCardsDetails[dealerCards[i]].value + dealerValue;
  }
  return dealerValue;
};

/* Start of Game*/
let playerValue = 0;
let dealerValue = 0;
let playerHand = {};
let DealerHand = {};
dealCards();
playerValueCalc();
dealerValueCalc();

playerTurn = true;
while (playerTurn) {
  if (playerValue < 21) {
    let playerDecision = prompt(
      `Hand Value: ${playerValue} | [H]it or [S]tand: ?`
    );
    if (playerDecision === "H") {
      playerCards.unshift(gameCards[0]);
      gameCards.splice(0, 1);
      playerValue = gameCardsDetails[playerCards[0]].value + playerValue;
    } else if (playerDecision === "S") {
      console.log(`Stand Position`);
      playerTurn = false;
    } else {
      console.log(`Invalid input.`);
    }
  } else {
    console.log(
      `Hand value ${playerValue} is 21 or more, cannot draw anymore cards!`
    );
    playerTurn = false;
  }
}

dealerTurn = true;
while (dealerTurn) {
  dealerAI();
  dealerDecision = dealerAI();
  if (
    (dealerValue >= 16 && dealerValue < 21 && dealerDecision === 1) ||
    dealerValue < 16
  ) {
    dealerCards.unshift(gameCards[0]);
    dealerValue = gameCardsDetails[dealerCards[0]].value + dealerValue;
    gameCards.splice(0, 1);
  } else if (dealerValue >= 16 && dealerDecision === 0) {
    dealerTurn = false;
  }
}

let playerBust = false;
if (playerValue > 21) {
  playerBust = true;
}
let dealerBust = false;
if (dealerValue > 21) {
  dealerBust = true;
}

if (playerBust === false && dealerBust === false) {
  if (playerValue < dealerValue) {
    console.log(`You lose! Player: ${playerValue} | Dealer: ${dealerValue}`);
  } else if (playerValue > dealerValue) {
    console.log(`You win! Player: ${playerValue} | Dealer: ${dealerValue}`);
  } else if (playerValue === dealerValue) {
    console.log(`Draw! Player: ${playerValue} | Dealer: ${dealerValue}`);
  }
} else if (playerBust === false && dealerBust) {
  console.log(`You win! Player: ${playerValue} | Dealer: ${dealerValue}`);
} else if (playerBust && dealerBust === false) {
  console.log(`You lose! Player: ${playerValue} | Dealer: ${dealerValue}`);
} else if (playerBust && dealerBust) {
  console.log(`Draw! Player: ${playerValue} | Dealer: ${dealerValue}`);
}

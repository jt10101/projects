const playerCards = []; // this is the player's hand
const dealerCards = []; // this is the dealer's hand

const gameCards = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
];
const gameCardsDetails = [
  { number: 0, suit: "Spade", value: 1, dealt: false },
  { number: 1, suit: "Spade", value: 2, dealt: false },
  { number: 2, suit: "Spade", value: 3, dealt: false },
  { number: 3, suit: "Spade", value: 4, dealt: false },
  { number: 4, suit: "Spade", value: 5, dealt: false },
  { number: 5, suit: "Spade", value: 6, dealt: false },
  { number: 6, suit: "Spade", value: 7, dealt: false },
  { number: 7, suit: "Spade", value: 8, dealt: false },
  { number: 8, suit: "Spade", value: 9, dealt: false },
  { number: 9, suit: "Spade", value: 10, dealt: false },
  { number: 10, suit: "Spade", value: 10, dealt: false }, // Jack
  { number: 11, suit: "Spade", value: 10, dealt: false }, // Queen
  { number: 12, suit: "Spade", value: 10, dealt: false }, // King
  { number: 13, suit: "Diamond", value: 1, dealt: false },
  { number: 14, suit: "Diamond", value: 2, dealt: false },
  { number: 15, suit: "Diamond", value: 3, dealt: false },
  { number: 16, suit: "Diamond", value: 4, dealt: false },
  { number: 17, suit: "Diamond", value: 5, dealt: false },
  { number: 18, suit: "Diamond", value: 6, dealt: false },
  { number: 19, suit: "Diamond", value: 7, dealt: false },
  { number: 20, suit: "Diamond", value: 8, dealt: false },
  { number: 21, suit: "Diamond", value: 9, dealt: false },
  { number: 22, suit: "Diamond", value: 10, dealt: false },
  { number: 23, suit: "Diamond", value: 10, dealt: false }, // Jack
  { number: 24, suit: "Diamond", value: 10, dealt: false }, // Queen
  { number: 25, suit: "Diamond", value: 10, dealt: false }, // King
  { number: 26, suit: "Heart", value: 1, dealt: false },
  { number: 27, suit: "Heart", value: 2, dealt: false },
  { number: 28, suit: "Heart", value: 3, dealt: false },
  { number: 29, suit: "Heart", value: 4, dealt: false },
  { number: 30, suit: "Heart", value: 5, dealt: false },
  { number: 31, suit: "Heart", value: 6, dealt: false },
  { number: 32, suit: "Heart", value: 7, dealt: false },
  { number: 33, suit: "Heart", value: 8, dealt: false },
  { number: 34, suit: "Heart", value: 9, dealt: false },
  { number: 35, suit: "Heart", value: 10, dealt: false },
  { number: 36, suit: "Heart", value: 10, dealt: false }, // Jack
  { number: 37, suit: "Heart", value: 10, dealt: false }, // Queen
  { number: 38, suit: "Heart", value: 10, dealt: false }, // King
  { number: 39, suit: "Club", value: 1, dealt: false },
  { number: 40, suit: "Club", value: 2, dealt: false },
  { number: 41, suit: "Club", value: 3, dealt: false },
  { number: 42, suit: "Club", value: 4, dealt: false },
  { number: 43, suit: "Club", value: 5, dealt: false },
  { number: 44, suit: "Club", value: 6, dealt: false },
  { number: 45, suit: "Club", value: 7, dealt: false },
  { number: 46, suit: "Club", value: 8, dealt: false },
  { number: 47, suit: "Club", value: 9, dealt: false },
  { number: 48, suit: "Club", value: 10, dealt: false },
  { number: 49, suit: "Club", value: 10, dealt: false }, // Jack
  { number: 50, suit: "Club", value: 10, dealt: false }, // Queen
  { number: 51, suit: "Club", value: 10, dealt: false }, // King
];
const gameDeckShuffle = () => {
  // This function shuffles the deck of cards
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5); // https://javascript.info/task/shuffle
  }
  shuffle(gameCards);
  //   console.log(gameCards);
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

// const gameOn = () => {
//   dealCards();
//   playerValueCalc();
//   let playerValue = playerValueCalc();
//   let dealerValue = dealerValueCalc();
//   if (playerValue === 21) {
//     // Player gets a Blackjack
//     console.log(`Congratulations, you got a Blackjack!`);
//   } else if (dealerValue === 21) {
//     // Dealer gets a Blackjack
//     console.log(`You Lose! Dealer got a Blackjack!`);
//   } else {
//     // No Blackjack on draw, user input required

//     prompt(
//       `Your current hand value is ${playerValue}. Hit [H] or stand [S]?: `
//     );
//   }
// };

const gameOn = () => {
  dealCards();
  playerValueCalc();
  let playerValue = playerValueCalc();
  let dealerValue = dealerValueCalc();
  if (playerValue === 21) {
    // Player gets a Blackjack
    console.log(`Congratulations, you got a Blackjack!`);
  } else if (dealerValue === 21) {
    // Dealer gets a Blackjack
    console.log(`You Lose! Dealer got a Blackjack!`);
  } else {
    let playState = true;
    while ((playState = true)) {
      // No Blackjack on draw, user input required
      let userDecision = prompt(
        `Your current hand value is ${playerValue}. Hit [H] or stand [S]?: `
      ).toLowerCase;
      if (userDecision === "H") {
        // playerCards.push(gameCards[0]);
        // gameCards.splice(0, 1);
        // playerValue = gameCardsDetails[playerCards[i]].value + playerValue;
        console.log("Wow, you're hitting!");
      }
    }
  }
};

gameOn();

// playerCards.push(gameCards[0], gameCards[2]);
// dealerCards.push(gameCards[1], gameCards[3]);
// console.log(`Player cards are: ${playerCards}`);
// console.log(`Dealer cards are: ${dealerCards}`);

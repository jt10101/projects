const gameCardsDetails = [
  { number: 0, suit: "♠", value: 1, display: "A♠" },
  { number: 1, suit: "♠", value: 2, display: "2♠" },
  { number: 2, suit: "♠", value: 3, display: "3♠" },
  { number: 3, suit: "♠", value: 4, display: "4♠" },
  { number: 4, suit: "♠", value: 5, display: "5♠" },
  { number: 5, suit: "♠", value: 6, display: "6♠" },
  { number: 6, suit: "♠", value: 7, display: "7♠" },
  { number: 7, suit: "♠", value: 8, display: "8♠" },
  { number: 8, suit: "♠", value: 9, display: "9♠" },
  { number: 9, suit: "♠", value: 10, display: "10♠" },
  { number: 10, suit: "♠", value: 10, display: "J♠" }, // Jack
  { number: 11, suit: "♠", value: 10, display: "Q♠" }, // Queen
  { number: 12, suit: "♠", value: 10, display: "K♠" }, // King
  { number: 13, suit: "♦", value: 1, display: "A♦" },
  { number: 14, suit: "♦", value: 2, display: "2♦" },
  { number: 15, suit: "♦", value: 3, display: "3♠" },
  { number: 16, suit: "♦", value: 4, display: "4♦" },
  { number: 17, suit: "♦", value: 5, display: "5♦" },
  { number: 18, suit: "♦", value: 6, display: "6♦" },
  { number: 19, suit: "♦", value: 7, display: "7♦" },
  { number: 20, suit: "♦", value: 8, display: "8♦" },
  { number: 21, suit: "♦", value: 9, display: "9♦" },
  { number: 22, suit: "♦", value: 10, display: "10♦" },
  { number: 23, suit: "♦", value: 10, display: "J♦" }, // Jack
  { number: 24, suit: "♦", value: 10, display: "Q♦" }, // Queen
  { number: 25, suit: "♦", value: 10, display: "K♦" }, // King
  { number: 26, suit: "♥", value: 1, display: "A♥" },
  { number: 27, suit: "♥", value: 2, display: "2♥" },
  { number: 28, suit: "♥", value: 3, display: "3♥" },
  { number: 29, suit: "♥", value: 4, display: "4♥" },
  { number: 30, suit: "♥", value: 5, display: "5♥" },
  { number: 31, suit: "♥", value: 6, display: "6♥" },
  { number: 32, suit: "♥", value: 7, display: "7♥" },
  { number: 33, suit: "♥", value: 8, display: "8♥" },
  { number: 34, suit: "♥", value: 9, display: "9♥" },
  { number: 35, suit: "♥", value: 10, display: "10♥" },
  { number: 36, suit: "♥", value: 10, display: "J♥" }, // Jack
  { number: 37, suit: "♥", value: 10, display: "Q♥" }, // Queen
  { number: 38, suit: "♥", value: 10, display: "K♥" }, // King
  { number: 39, suit: "♣", value: 1, display: "A♣" },
  { number: 40, suit: "♣", value: 2, display: "2♣" },
  { number: 41, suit: "♣", value: 3, display: "3♣" },
  { number: 42, suit: "♣", value: 4, display: "4♣" },
  { number: 43, suit: "♣", value: 5, display: "5♣" },
  { number: 44, suit: "♣", value: 6, display: "6♣" },
  { number: 45, suit: "♣", value: 7, display: "7♣" },
  { number: 46, suit: "♣", value: 8, display: "8♣" },
  { number: 47, suit: "♣", value: 9, display: "9♣" },
  { number: 48, suit: "♣", value: 10, display: "10♣" },
  { number: 49, suit: "♣", value: 10, display: "J♣" }, // Jack
  { number: 50, suit: "♣", value: 10, display: "Q♣" }, // Queen
  { number: 51, suit: "♣", value: 10, display: "K♣" }, // King
];
const deck = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
];

// Constants
const game = {
  turn: 1, // 1 = player1, 2 = player2, 3 = player 3
  // state: "bet", // bet = player hasn't made bet yet, decision = player placed bet and making decision
  cards: {
    player1: [],
    player2: [],
    player3: [],
    dealer: [],
  },
  cardValue: {
    player1: 0,
    player2: 0,
    player3: 0,
    dealer: 0,
  },
  playerMoney: {
    player1: 100,
    player2: 200,
    player3: 300,
  },
  betAmount: {
    player1: 0,
    player2: 0,
    player3: 0,
  },
  state: "PlayerTurn",
};
// Variables

// Cached elements here
const hitButtonElement = document.getElementById("hit");
const standButtonElement = document.getElementById("stand");
const betButtonElement = document.getElementById("bet");
const betAmount = document.getElementById("bet-amount");
// const playerCards = document.getElementById(`.${game.turn}-`);
// const decisionButtonElement = document.querySelectorAll(".decision");

// Subfunctions here

const init = () => {
  // This function shuffles the deck of cards
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5); // https://javascript.info/task/shuffle
  }
  shuffle(deck);
  // console.log(deck); // checks deck after shuffle
  for (let i = 0; i < 4; i++) {
    let x = Object.values(game.cards)[i];
    x.push(deck[i]); // pushes first card
    x.push(deck[i + 4]); // pushes second card
  }
  deck.splice(0, 8); // removes the first 8 cards dealt during init from game deck
  // console.log(game.cards); // checks current state of each player's hand
  // console.log(deck); // check for deck state after init
};
const playeractions = () => {
  let activeplayer = `player${game.turn}`;
  if (
    betAmount.value <= 0 ||
    betAmount.value > game.playerMoney[activeplayer]
  ) {
    console.log("Not enough money");
    return;
  } else {
    game.betAmount[activeplayer] = betAmount.value;
    // disables betting functions + enables HIT and stand buttons
    betAmount.setAttribute("disabled", "");
    betButtonElement.setAttribute("disabled", "");
    hitButtonElement.removeAttribute("disabled", "");
    standButtonElement.removeAttribute("disabled", "");
    renderFirstTwo();
    calcValue();
  }
};
// // Check for return value of this function (bet, stand or hit)
const handleclick = (event) => {
  return event.target.id;
};
// renders first 2 cards when bets are placed
const renderFirstTwo = () => {
  for (let i = 0; i < 2; i++) {
    const playerCards = document.getElementById(`${game.turn}-${i + 1}`);
    let activeplayer = `player${game.turn}`;
    let printCard = game.cards[activeplayer][i];
    playerCards.innerText = gameCardsDetails[printCard].display;
    playerCards.setAttribute("class", "cardface");
  }
};

// calculates hand value of active player (not including dealer)
const calcValue = () => {
  let handtotal = 0;
  let x;
  x = `player${game.turn}`;
  for (let i = 0; i < game.cards[x].length; i++) {
    handtotal += gameCardsDetails[game.cards[x][i]].value;
  }
  game.cardValue[x] = handtotal;
  console.log(game);
};

// Main function here
const main = () => {
  //init function that shuffles and deals cards
  init();
  playeractions();
  //event listeners for all 3 buttons here
  hitButtonElement.addEventListener("click", handleclick);
  standButtonElement.addEventListener("click", handleclick);
  betButtonElement.addEventListener("click", playeractions);
};

main();

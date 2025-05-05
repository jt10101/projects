let gameLow = prompt(`Lower range of number to guess: `); // user input to collect lower bound of number to guess
let gameHigh = prompt(`Upper range of number to guess: `); // user input to collect upper bound of number to guess
const gameTries = 5; // number of tries a user has to play the game
const gameWin = Math.floor(Math.random() * gameHigh + gameLow); // winning number
const gameStore = []; // Array to store past guesses

for (let i = 0; i < gameTries; i++) {
  let userGuess = 0; // declare variable
  userGuess = prompt(
    `Attempt ${[i + 1]}! Guess a number between ${gameLow} to ${gameHigh}: `
  ); // stores user input in variable called userGuess
  gameStore.push(userGuess); // pushes value into an array

  if (userGuess != gameWin) {
    if (userGuess < gameWin) {
      console.log(
        `Wrong! Your guess of ${userGuess} is LOWER than the correct answer! | Guesses: ${gameStore}`
      );
    } else if (userGuess > gameWin) {
      console.log(
        `Wrong! Your guess of ${userGuess} is HIGHER than the correct answer! | Guesses: ${gameStore}`
      );
    }
  } else if ((userGuess = gameWin)) {
    console.log(
      `Correct! You got it in ${
        i + 1
      } attempt(s). Answer: ${gameWin} | Guesses: ${gameStore}`
    );
    {
      break;
    }
  }
}
console.log(`Correct Ans : ${gameWin}`);

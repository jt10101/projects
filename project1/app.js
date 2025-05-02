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

//   if (userGuess === gameWin)
//   {
//     // condition if correct answer is guessed
//     console.log(
//       `Correct! You got it in ${
//         i + 1
//       } attempt(s). Answer: ${gameWin} | Guesses: ${gameStore}`
//     );
//     // exits if correct answer is guessed
//   }
// else if(userGuess < gameWin) {
//     console.log(
//       `Wrong! Your guess of ${userGuess} is LOWER than the correct answer! | Guesses: ${gameStore}`
//     );
//   }

//   if (userGuess > gameWin) {
//     console.log(
//       `Wrong! Your guess of ${userGuess} is HIGHER than the correct answer! | Guesses: ${gameStore}`
//     );
//   }
// }

// console.log(gameGuess);

// prompt(`${gameTries} tries remaining! Guess a number: `);

// let playerAttempt = {};

// const game = () => {
//   let running = true;
//   while (running) {
//     const correctNumber = Math.floor(Math.random() * 10 + 1);
//     //   console.log(correctNumber);
//     const guess1 = parseFloat(
//       prompt("You have only 3 chances~ Make your guess!")
//     );
//     if (guess1 === correctNumber) {
//       console.log("You win!!!");
//     } else {
//       playerAttempt[1] = guess1;
//       console.log(playerAttempt);
//       const guess2 = parseFloat(
//         prompt("You left 2 chances~ Make your 2nd guess!")
//       );
//       // console.log(guess2);
//       if (guess2 === correctNumber) {
//         console.log("You win!!!");
//       } else {
//         playerAttempt[2] = guess2;
//         console.log(playerAttempt);
//         const guess3 = parseFloat(
//           prompt("You left one last chance~ Make your last guess!")
//         );
//         //   console.log(guess3);
//         if (guess3 === correctNumber) {
//           console.log("You win!!!");
//         } else {
//           playerAttempt[3] = guess3;
//           console.log(playerAttempt);
//           console.log("You lose! END!!!");
//           playerAttempt = {};
//         }
//       }
//     }
//     const reply = prompt("Continue?");
//     if (reply == "end") {
//       running = false;
//     }
//   }
// };
// game();

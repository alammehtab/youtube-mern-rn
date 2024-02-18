// CHAPTER-27: Generating random numbers

// Math module

// const randomNumber = Math.random();
// console.log(randomNumber);

// converting random number to integer
let randomNumber = Math.random();
const intergerNumber = randomNumber * 100000000000000000;
console.log(intergerNumber);

// generating random number from 0 to 6
// let randomNumber = Math.random();
// randomNumber = randomNumber * 6;
// console.log(randomNumber);

// generating random number between 0 and n
// const n = 10;
// const randomNumber = Math.random() * n;
// console.log(Math.floor(randomNumber));

// ludo dice example
// let bigDecimal = Math.random();
// let improvedNum = bigDecimal * 6 + 1;
// let numberOnDice = Math.floor(improvedNum);

// console.log({ bigDecimal, improvedNum, numberOnDice });

// guessing number game
// const randomNumber = Math.ceil(Math.random() * 3);
// const userGuess = +prompt("Guess the number between 1 and 3");
// console.log(randomNumber);

// if (randomNumber === userGuess) {
//   alert("you got it right");
// } else {
//   alert("Try again");
// }

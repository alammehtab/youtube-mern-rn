// CHAPTER-27: Generating random numbers

// METHOD WE'RE DISCUSSING IN THIS CHAPTER
// random: Math.random()
// 1. returns a random number between 0 (inclusive),  and 1 (exclusive).
// 2. always returns a number lower than 1.
// 3. always delivers a 16-place decimal that ranges from 0.0000000000000000 to 0.9999999999999999

// GENERATING A RANDOM NUMBER
// const randomNumber = Math.random();
// console.log(randomNumber);

// CONVERTING A RANDOM NUMBER TO AN INTEGER
// There is no such thing as JavaScript integers.
// We are talking about numbers with no decimals here.

// removing the decimal point and getting the whole number as an integer
// const randomDecimal = Math.random();
// const randomInteger = randomDecimal * 10000000000000000;
// console.log(randomDecimal);
// console.log(randomInteger);

// getting just the integer part, removing the decimal part (numbers after decimal point)
// let randomNumber = Math.random();
// const intergerNumber = Math.floor(randomNumber);
// console.log(intergerNumber);

// GENERATING A RANDOM NUMBER FROM 0.0000000000000000 to 5.9999999999999999
// let randomNumber = Math.random();
// randomNumber = randomNumber * 6; // upper limit exclusive hoti ha
// console.log({ randomNumber });

// GENERATING RANDOM NUMBER FROM 0 TO N (0 inclusive, n exlclusive)
// const n = 10;
// const randomNumber = Math.random() * n;
// const randomInteger = Math.floor(randomNumber);
// console.log(randomInteger);

// LUDO DICE EXAMPLE, RANDOM NUMBERS 1 TO 6
// let bigDecimal = Math.random();
// let improvedNum = bigDecimal * 6 + 1; // 1.something - 6.something
// let numberOnDice = Math.floor(improvedNum);

// console.log({ bigDecimal, improvedNum, numberOnDice });

// GUESS THE NUMBER, GAME, 1-3
const randomNumber = Math.ceil(Math.random() * 3);
const userGuess = +prompt("Guess the number between 1 and 3");

if (randomNumber === userGuess) {
  alert("you got it right");
} else {
  alert("Try again");
}
alert("The random number was: " + randomNumber);

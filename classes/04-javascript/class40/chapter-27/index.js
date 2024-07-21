// CHAPTER-27: Generating random numbers

// METHOD WE'RE DISCUSSING IN THIS CHAPTER
// random: Math.random()
// 1. returns a random number between 0 (inclusive),  and 1 (exclusive).
// 2. always returns a number lower than 1.
// 3. always delivers a 16-place decimal that ranges from 0.0000000000000000 to 0.9999999999999999

// GENERATING A RANDOM NUMBER
// var randomNumber = Math.random();
// console.log(randomNumber);

// CONVERTING A RANDOM NUMBER TO AN INTEGER
// There is no such thing as JavaScript integers.
// We are talking about numbers with no decimals here.

// getting just the integer part, removing the decimal part (numbers after decimal point)
// var randomNumber = Math.random();
// var intergerNumber = Math.floor(randomNumber);
// console.log(intergerNumber);

// GENERATING A RANDOM NUMBER FROM 0.0000000000000000 to 5.9999999999999999
// var randomNumber = Math.random();
// randomNumber = randomNumber * 6; // upper limit exclusive hoti ha
// console.log({ randomNumber });

// GENERATING RANDOM NUMBER FROM 0 TO N (0 inclusive, n exlclusive)
// in this case 0-9
// var n = 10;
// var randomNumber = Math.random() * n;
// var randomInteger = Math.ceil(randomNumber);
// console.log(randomInteger);

// LUDO DICE EXAMPLE, RANDOM NUMBERS 1 TO 6 (method0: +1)
// var decimalInRange = Math.random() * 6 + 1; // 1.something - 6.something
// var numberOnDice = Math.floor(decimalInRange); // 1 to 6

// console.table([bigDecimal, numberOnDice ]);

// GUESS THE NUMBER, GAME, 1-3 (method1: ceil)
// var randomNumber = Math.ceil(Math.random() * 3);
// var userGuess = +prompt("Guess the number between 1 and 3");

// if (randomNumber === userGuess) {
//     alert("you got it right");
// } else {
//     alert("Try again");
// }
// alert("The random number was: " + randomNumber);
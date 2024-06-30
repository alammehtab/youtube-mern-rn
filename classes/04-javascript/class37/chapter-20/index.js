// CHAPTER-20: FOR LOOPS NESTED

// ============================
// Exercise 0: Simple Nested Loop
// ============================
// kitni dfa loop chal rha
// var count = 0;

// // outer loop
// for (var i = 1; i <= 3; i++) {
//   // inner loop
//   for (var j = 1; j <= 3; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//     count++;
//   }
// }
// console.log({ count });

// ===========================
// formatted strings
// ===========================
// var firstNumber = 5;
// var secondNumber = 10;
// var sum = firstNumber + secondNumber;

// console.log(`The sum of ${firstNumber} and ${secondNumber} is: ${sum}`);

// ============================
// Exercise 1: Multiplication Table (5x5)
// ============================
// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// ============================
// Exercise 2: Multiplication Table (Single number) will cover formatted strings
// ============================
// var userInput = +prompt("Please enter a number");

// for (var i = 1; i <= 10; i++) {
//   console.log(`${userInput} * ${i} = ${userInput * i}`);
// }

// ============================
// Exercise 3: Repeating Characters
// ============================

// var characters = "ABC";

// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < characters.length; j++) {
//     console.log(characters[j]);
//   }
// }

// ============================
// Exercise 4: Triangle Pattern with *s
// ============================

var rows = 5;

for (var i = 1; i <= rows; i++) {
  // for lines/rows
  var stars = "";
  for (var j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

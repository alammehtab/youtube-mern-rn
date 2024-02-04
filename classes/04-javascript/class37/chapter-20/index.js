// CHAPTER-20: FOR LOOPS NESTED

// ============================
// Exercise 0: Simple Nested Loop
// ============================
// kitni dfa loop chal rha
// let count = 0;

// // outer loop
// for (let i = 1; i <= 3; i++) {
//   // inner loop
//   for (let j = 1; j <= 3; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//     count++;
//   }
// }
// console.log({ count });

// ===========================
// formatted strings
// ===========================
// const firstNumber = 5;
// const secondNumber = 10;
// const sum = firstNumber + secondNumber;

// console.log(`The sum of ${firstNumber} and ${secondNumber} is: ${sum}`);

// ============================
// Exercise 1: Multiplication Table (5x5)
// ============================
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// ============================
// Exercise 2: Multiplication Table (Single number) will cover formatted strings
// ============================
// const userInput = +prompt("Please enter a number");

// for (let i = 1; i <= 10; i++) {
//   console.log(`${userInput} * ${i} = ${userInput * i}`);
// }

// ============================
// Exercise 3: Repeating Characters
// ============================

// let characters = "ABC";

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < characters.length; j++) {
//     console.log(characters[j]);
//   }
// }

// ============================
// Exercise 4: Triangle Pattern with *s
// ============================

const rows = 5;

for (let i = 1; i <= rows; i++) {
  // for lines/rows
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

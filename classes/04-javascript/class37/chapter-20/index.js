// flag and loopus intr recap
// let isFound = false;
// let desiredNumber = 9;

// for (let count = 1; count <= 12; count++) {
//   console.log({ count });
//   if (count === desiredNumber) {
//     isFound = true;
//     break;
//   }
// }

// if (isFound) {
//   console.log("we found the number");
// } else {
//   console.log("number not found");
// }

// Lecture Notes: Nested For Loops

// ============================
// Lecture Overview
// ============================
/*
In this lecture, we'll dive into the concept of nested for loops in JavaScript. 
Nested loops are loops within loops, providing a powerful tool for iterating through multi-dimensional 
arrays and solving complex problems.

We'll explore practical examples to understand how to structure and use nested for loops effectively.
*/

// ============================
// Exercise 1: Simple Nested Loop
// ============================
// kitni dfa loop chal rha
// let count = 0;

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//     count++;
//   }
// }
// console.log({ count });

// formatted strings
// const firstNumber = 5;
// const secondNumber = 10;
// const sum = firstNumber + secondNumber;

// console.log(`the sum of ${firstNumber} and ${secondNumber} is: ${sum}`);

// ============================
// Exercise 1.1: Multiplication Table (5x5)
// ============================
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// ============================
// Exercise 1.1.1: Multiplication Table (Single number)
// ============================

// student's task

// ============================
// Exercise 1.2: Repeating Characters
// ============================

// let characters = "ABC";

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < characters.length; j++) {
//     console.log(characters[i]);
//   }
// }

// ============================
// Exercise 2.1: Pyramid Pattern
// ============================
// let pyramidSize = 3;

// for (let i = 1; i <= pyramidSize; i++) {
//   let row = "";
//   for (let j = 1; j <= pyramidSize - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// ============================
// Exercise 2.2: Reverse Pyramid Pattern
// ============================

// let reversedPyramidSize = 5;

// for (let i = reversedPyramidSize; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= reversedPyramidSize - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

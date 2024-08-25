// CHAPTER-42: do while loops

// The Do While Loop
// The do while loop is a variant of the while loop.This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// Syntax
// do {
// //code block to be executed
// }
// while (condition);

// Example
// The example below uses a do while loop.The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

// var i = 0
// do {
//     console.log(i)
//     i++;
// }
// while (i < 0);

// NOTE: Do not forget to increase the variable used in the condition, otherwise the loop will never end!

// WHILE VS DO WHILE

// key differences:
// Initial Check: while checks the condition first; do...while checks after the first execution.
// Minimum Executions: while can potentially not execute at all; do...while guarantees at least one execution.

// example situations:

// while Loop:
// Iterating through an array only if it contains elements.
// Running a loop based on a condition that might already be false.

// dowhile Loop:
// Prompting the user for input until a valid input is provided.
// Performing an initial setup task before checking the loop condition.

// EXAMPLE PROGRAMS
// do {
//     var randomNumber = Math.ceil(Math.random() * 5)
//     var userGuess = +prompt("Guess the number: ")

//     if (userGuess === randomNumber) {
//         alert("Hurrah! You got it!")
//         console.log(randomNumber)
//     } else {
//         alert("Oh! try next time.")
//         console.log(randomNumber)
//     }
//     var play = +prompt("Do you wanna play the game?\n1. 'Yes'\n0. 'No'")
// } while (play)
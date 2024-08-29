// Chapter-41: while loops

// DIFFERENCE BETWEEN A FOR LOOP AND WHILE LOOP

// For Loop: A for loop is an iteration method that is best used when you know the number of iterations ahead of time.It’s always followed by the initialization, expression and increment statements.

// While Loop: A while loop is an iteration method that is best used when you don't know the number of iterations ahead of time. The contents of the loop are executed as long as the expression evaluates to true.

// EXAMPLE FOR LOOP

// for (count = 1; count < 10; count++) {
//     console.log(count);
// }

// NOTE: The increment does not have to be ++, but you’ll see that the most often.

// SAME EXAMPLE WITH WHILE LOOP

// var count = 1;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

// FOR VS WHILE SYNTAX

// So, in summary, the while loop has a looser syntax, and the for loop has a more rigid syntax.A while loop expects some sort of modification to the variable in the body, whereas everything is in the for loop’s definition.

// A FEW USE CASES

// Use a for loop to iterate over an array.
// Use a for loop when you know the loop should execute n times.
// Use a while loop for reading a file into a variable.
// Use a while loop when asking for user input.
// Use a while loop when the increment value is nonstandard.

// EXAMPLE PROGRAMS
// GUESS THE NUMBER GAME
// var playAgain = +prompt("Khelna chah rhe ho?\n0. 'No' \n1.'Yes'")

// while (playAgain) {
//     var randomNumber = Math.ceil(Math.random() * 3)
//     var userGuess = +prompt("Guess the number: ")

//     if (userGuess === randomNumber) {
//         alert("You got it right")
//     } else {
//         alert("Try again!")
//     }
//     playAgain = +prompt("Khelna chah rhe ho?\n0. 'No' \n1.'Yes'")
// }

// console.log(randomNumber)
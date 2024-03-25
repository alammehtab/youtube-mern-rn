// Chapter-36: Functions: Passing them data

// PARAMETER VS ARGUMENT
// The data inside the parentheses in a FUNCTION STATEMENT is known as a parameter.
// The data inside the parenthesis in a FUNCTION CALL is known as an argument.

// function statement
// function printNumber(num) {
//   //num is a parameter
//   alert(num);
// }

// function call
// 10 is an argument
// printNumber(10);

// WITHOUT PASSING DATA
// function greetUser() {
//   alert("hello");
// }

// greetUser();
// greetUser();
// greetUser();
// greetUser();

// PASSING DATA TO A FUNCTION
// function greetUser(greeting) {
//   alert(greeting);
// }

// greetUser("Hello");
// greetUser("Salam");
// greetUser("Pakher Raghle");

// PASSING DATA USING A VARIABLE
// function greetTheUser(greeting) {
//   alert(greeting);
// }

// const greetingMessage = "Hello";
// greetTheUser(greetingMessage);

// A FUNCTION CAN TAKE ANY NUMBER OF PARAMETERS
// function printUserDetails(userName, age, isMarried) {
//   console.log(
//     `Your name is ${userName}, you are ${age} years old and your marital status is = ${isMarried}.`
//   );
// }

// printUserDetails("Ali", 40, true);

// ARGUMENTS' ORDER DOES MATTER
// function printUserDetails(userName, age, isMarried) {
//   console.log(
//     `Your name is ${userName}, you are ${age} years old and your marital status is = ${isMarried}.`
//   );
// }

// printUserDetails(40, true, "Ali");

// IF NOTHING IS PROVIDED TO PARAMETER THEN IT WILL BE UNDEFINED.
function printUserDetails(userName, age, isMarried) {
  console.log(
    `Your name is ${userName}, you are ${age} years old and your marital status is = ${isMarried}.`
  );
}

printUserDetails("Ali", 40);

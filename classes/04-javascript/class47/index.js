// Chapter-36: Functions: Passing them data

// passing data to function
// function greetUser(msg) {
//   console.log(msg + "kese hn ap?");
// }

// greetUser("Hello there!");

// hamari example
// function greetTheUser(user) {
//   alert("Helllooo " + user);
// }

// greetTheUser("John");

// passing data using variable
// function greetTheUser(user) {
//   alert("Helllooo " + user);
// }

// const userName = "John";
// greetTheUser(userName);

// You can pass any number of arguments
// function printUserDetails(userName, age, isMarried) {
//   console.log(
//     `Your name is ${userName}, you are ${age} years old and your marital status is = ${isMarried}.`
//   );
// }

// printUserDetails("Ducket", 40, true);

// arguments' order DOES matter
// function printUserDetails(userName, age, isMarried) {
//   console.log(
//     `Your name is ${userName}, you are ${age} years old and your marital status is = ${isMarried}.`
//   );
// }

// printUserDetails(40, true, "Ducket");

// if nothing is provided as a value for a parameter then it will be set to undefined
// function printUserDetails(userName, age, isMarried) {
//   console.log(
//     `Your name is ${userName}, you are ${age} years old and your marital status is = ${isMarried}.`
//   );
// }

// printUserDetails(40, true);

// CHAPTER-10 IF STATEMENT

// simple example
// const baadal = true;

// if (baadal) {
//   alert("Umbrella uthalo");
// } else {
//   alert("No badal no umbrella");
// }

// driving license
// the conditions returns a boolean
// let userAge = +prompt("please enter your age");

// if (userAge >= 18) {
//   console.log("you are eligible to get your license");
// } else {
//   console.log("you are not eligible to get your license");
// }

// if (userAge >= 18) {
//   console.log("You're ELIGIBLE to get your driving license");
//   console.log("We're working on your license");
//   console.log("Here is your license");
// }

// if (userAge < 18) {
//   console.log("You're NOT ELIGIBLE to get your driving license");
// }

// BRT CARD BALANCE
// const cardBalance = +prompt("Please enter your balance");

// if (cardBalance >= 55) {
//   alert("Welcome to ZU Peshawar!");
// }

// if (cardBalance < 55) {
//   alert("Please recharge!");
// }

// PROGRAM TO FIND WHETHER A NUMBER IS ZERO, POSITIVE, NEGATIVE
const userName = prompt("Yr please apna name to bataye");
const userNumber = +prompt("1 number dijyega please");

// number is 0
if (userNumber === 0) {
  console.log(userName + " ap ne 0 enter kia");
}

// number chota ho 0 se
if (userNumber < 0) {
  console.log(userName + " ap ne NEGATIVE number enter kia");
}

// number bara ho 0 se
if (userNumber > 0) {
  console.log(userName + " ap ne POSITIVE number enter kia");
}

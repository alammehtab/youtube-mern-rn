// CHAPTER-13 TESTING SETS (MULTIPLE) OF CONDITIONS

// WE'VE ALREADY SEEN
// if (badal) {
//   alert("It's gonna be raining soon in Peshawar!");
// } else {
//   alert("No chance of rain in Peshawar!");
// }

// FIND LARGEST OF THREE NUMBERS
// const firstNumber = +prompt("enter first number");
// const secondNumber = +prompt("enter second number");
// const thirdNumber = +prompt("enter third number");

// if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//   console.log("First number that is " + firstNumber + " is the largest number");
// } else if (secondNumber > thirdNumber) {
//   console.log(
//     "Second number that is " + secondNumber + " is the largest number"
//   );
// } else {
//   console.log("Third number that is " + thirdNumber + " is the largest number");
// }

// GRADING SYSTEM
const userName = prompt("Please enter your name");
const score = +prompt("Please enter your score");

if (score >= 90) {
  alert(userName + " your Grade is A");
} else if (score >= 80) {
  alert(userName + " your Grade is B");
} else if (score >= 70) {
  alert(userName + " your Grade is C");
} else if (score >= 60) {
  alert(userName + " your Grade is D");
} else {
  alert(userName + " your Grade is F");
}

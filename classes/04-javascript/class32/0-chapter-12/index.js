// CHAPTER-12 IF ELSE STATEMENT

// badal ha to barish, nahi to nahi
// const badal = true;

// agr badal ho
// if (badal) {
//   alert("It's gonna be raining soon in Peshawar!");
// }

// agar badal na ho
// if (!badal) {
//   alert("No chance of rain in Peshawar!");
// }

// using if-else
// if (badal) {
//   alert("It's gonna be raining soon in Peshawar!");
// } else {
//   alert("No chance of rain in Peshawar!");
// }

// real world example
// const bhook = false;
// const paisa = true;

// if (bhook && paisa) {
//   alert("Get the burger");
// } else {
//   alert("Chill karo!");
// }

// question: negate value or variable

// negating value, allowed
// const badal = !false;
// console.log(badal);

// negating variable, allowed
// const badal = false;
// console.log(!badal);

// negating variable right at the time of declaration, not allowed
// const !badal = false;
// console.log(badal)

// PROGRAM: EVEN/ODD
const userName = prompt("Please apna name to bataiyega");
const userInput = +prompt("Please 1 number dijyega: ");

const remainder = userInput % 2;

if (remainder === 0) {
  alert(userName + " Bhai ap ne EVEN number enter kia.");
} else {
  alert(userName + " Bhai ap ne ODD number enter kia.");
}

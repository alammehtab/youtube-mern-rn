// CHAPTER-14: IF STATEMENTS NESTED

// what is a nested if
// if (10 > 8) {
//   if (8 > 5) {
//     console.log("yes 8 > 5");
//   }
// }

// User Authentication
// const username = prompt("Please enter your username");
// let password = "";

// if (username === "admin") {
//   password = prompt("Please enter your password");
//   if (password === "secret") {
//     document.write("Login successful. Welcome, Admin!");
//   } else {
//     document.write("Incorrect password. Please try again.");
//   }
// } else {
//   document.write("User not found. Please check your username.");
// }

// Ticket Pricing
// const age = +prompt("Please enter your age");
// const isStudent = +prompt(`Are you a student\n0.No\n1.Yes`);

// if (age < 12) {
//   document.write("Child Ticket: $5");
// } else {
//   if (age >= 12 && age < 18 && isStudent) {
//     document.write("Student Ticket: $10");
//   } else {
//     document.write("Adult Ticket: $15");
//   }
// }

// SARKARI NOKRI
// REQUIREMENTS:
// AGE: 18-25
// GENDER: male

var age = 19
var gender = 'female'

if (age >= 18 && age <= 25) {
  if (gender === 'male') {
    console.log(`Eligible`)
  }
} else {
  console.log(`Not Eligible`)
}

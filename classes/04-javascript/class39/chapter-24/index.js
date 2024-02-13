// CHAPTER-24: Finding a character at a location

// METHOD WE'LL DISCUSS
// charAt

// const institute = "saylani mass it training";
// console.log(institute.charAt(14));

// const fruit = "apple";
// console.log(fruit.charAt(3));

// IF U WANT TO ACCESS SPACE
// const greetings = "hi how are you?";
// console.log(greetings.charAt(2));

// EMAIL VALIDATION USING CHARAT
const userEmail = prompt("Please enter your email address");
let isValid = false;

for (let charIndex = 0; charIndex < userEmail.length; charIndex++) {
  if (userEmail.charAt(charIndex) === "@") {
    isValid = true;
    break;
  }
}

if (isValid) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}

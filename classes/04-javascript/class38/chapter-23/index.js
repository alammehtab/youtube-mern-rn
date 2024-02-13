// Chapter-23: Strings:Finding segments

// methods we're gonna discuss
// indexOf
// const book = "Think and Grow Rich";
// const indexOfK = book.indexOf("k");
// console.log(indexOfK);

// ALWAYS RETURNS THE INDEX OF VERY FIRST MATCH
// const greetings = "hello";
// console.log(greetings.indexOf("l"));

// CAN PASS STRING AS WELL
// const book = "Think and Grow Rich";
// console.log(book.indexOf("and Grow"));

// APKO WO INDEX DETA HA JISPE MATCH MILE
// const email = "test@test.com";
// console.log(email.indexOf("r"));
// console.log(email.indexOf("@gmail.com"));

// APKO -1 DETA HA AGAR MATCH NA MILE
// console.log(email.indexOf("r"));

// WE CAN USE SIMPLE ARRAYS AS WELL
// const mohalla = ["ali", "ahmad", "akram", "aslam", "ajmal", "aslam"];
// console.log(mohalla.indexOf("aslam"));
// console.log(mohalla.lastIndexOf("aslam"));

// lastIndexOf

// as the name suggests, it always returns the index of last match
// const greetings = "hello";
// console.log(greetings.lastIndexOf("l"));

// EMAIL VALIDATION WITHOUT USING INDEXOF
// const userEmail = prompt("Please enter your email address");
// let isValid = false;

// for (let charIndex = 0; charIndex < userEmail.length; charIndex++) {
//   if (userEmail[charIndex] === "@") {
//     isValid = true;
//     break;
//   }
// }

// if (isValid) {
//   console.log("Valid email address");
// } else {
//   console.log("Invalid email address");
// }

// EMAIL VALIDATION USING INDEXOF
// const email = prompt("Please enter your email");
// const isValid = email.indexOf("@");

// if (isValid === -1) {
//   console.log("Invalid email");
// } else {
//   console.log("Valid email");
// }

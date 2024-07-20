// Chapter-23: Strings:Finding segments

// methods we're gonna discuss
// indexOf
// var book = "Think and Grow Rich";
// var indexOfK = book.indexOf("k");
// console.log(indexOfK);

// ALWAYS RETURNS THE INDEX OF VERY FIRST MATCH
// var greetings = "hello";
// console.log(greetings.indexOf("l"));

// CAN PASS STRING AS WELL
// var book = "Think and Grow Rich";
// console.log(book.indexOf("and Grow"));

// APKO -1 DETA HA AGAR MATCH NA MILE
// console.log(email.indexOf("r"));

// APKO WO INDEX DETA HA JISPE MATCH MILE
// var email = "test@test.com";
// console.log(email.indexOf("r"));
// console.log(email.indexOf("@gmail.com"));

// WE CAN USE SIMPLE ARRAYS AS WELL
// var mohalla = ["ali", "ahmad", "akram", "aslam", "ajmal", "aslam"];
// console.log(mohalla.indexOf("aslam"));

// lastIndexOf

// as the name suggests, it always returns the index of last match
// var greetings = "hello";
// console.log(greetings.lastIndexOf("l"));

// var mohalla = ["ali", "ahmad", "akram", "aslam", "ajmal", "aslam"];
// console.log(mohalla.lastIndexOf("aslam"));

// EMAIL VALIDATION WITHOUT USING INDEXOF (must include @)
// var userEmail = prompt("Please enter your email address");
// var isValid = false;

// for (var charIndex = 0; charIndex < userEmail.length; charIndex++) {
//     if (userEmail[charIndex] === "@") {
//         isValid = true;
//         break;
//     }
// }

// if (isValid) {
//     alert("Valid email address");
// } else {
//     alert("Invalid email address");
// }

// EMAIL VALIDATION USING INDEXOF
// var email = prompt("Please enter your email");
// var isValid = email.indexOf("@");

// if (isValid === -1) {
//     alert("Invalid email");
// } else {
//     alert("Valid email");
// }
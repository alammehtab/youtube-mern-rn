// Chapter - 86: Form validation: email

// EMAIL VALIDATION FUNCTION USING INDEXOF
// function validateEmail() {
//     var userEmail = document.getElementById("email").value

//     // Check if there are spaces in the email address
//     if (userEmail.indexOf(" ") !== -1) { // not equal to -1 tb hi ayega jb space mile
//         alert("No spaces allowed in address.");
//         return false; // form submit mt krna
//     }

//     // Check if "@" is present and present at a valid position
//     if (userEmail.indexOf("@") < 1 || userEmail.indexOf("@") > userEmail.length - 5) {
//         alert("Invalid position of '@' symbol.");
//         return false;
//     }

//     // Check if there is a period and enough characters after it
//     if (userEmail.indexOf(".") - userEmail.indexOf("@") < 2 || userEmail.indexOf(".") > userEmail.length - 3) {
//         alert("Invalid domain name.");
//         return false;
//     }

//     return true
// }

// EMAIL VALIDATION FUNCTION USING REGEX
// function validateEmail() {
//     var userEmail = document.getElementById("email").value;
//     var emailPattern = /^[\w\-\.\+]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,4}$/;

//     if (!emailPattern.test(userEmail)) {
//         alert("Please enter a valid email address.");
//         return false;
//     }

//     return true
// }
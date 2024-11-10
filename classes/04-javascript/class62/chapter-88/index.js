// Chapter - 88: Exceptions: throw

// VALIDATION FUNCTION FOR PASSWORD
// function checkPassword() {
//     try {
//         // user ne jo pswrd enter kia h
//         var userPassword = document.getElementById("userPassword").value

//         // Check for minimum length of 8 characters
//         if (userPassword.length < 8) {
//             throw "Please enter at least 8 characters."
//         }

//         // check for max length of 12 characters
//         if (userPassword.length > 12) {
//             throw "Password exceeded the limit (12 characters)."
//         }

//         // Check for spaces (spaces not allowed)
//         if (userPassword.indexOf(" ") !== -1) {
//             throw "Space is not allowed in the password."
//         }

//         // Check for at least one number

//         // flag variable for making decision
//         var numberSomewhere = false
//         for (var i = 0; i < userPassword.length; i++) {
//             // agr character number h
//             if (!isNaN(userPassword[i])) {
//                 numberSomewhere = true
//                 // loop ko break krlo q k 1 nmbr milgya kafi h
//                 break
//             }
//         }

//         if (!numberSomewhere) {
//             throw "Please include at least one number in the password."
//         }
//     } catch (error) {
//         alert(error)
//         return false // form ko submit hone se rokna h
//     }

// }
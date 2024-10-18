// Chapter 82: Form Validation - Text Fields

// FUNCTION FOR VALIDATION
// function checkForLastName() {
//     if (document.getElementById("lastNameField").value.length === 0) {
//         alert("Please enter your last name");
//         return false; // Stops form submission
//     }
// }

// IMPROVED FUNCTION WITH FOCUS() IN FIELD AFTER INVALID SUBMISSION
// function checkForLastName() {
//     var targetField = document.getElementById("lastNameField");
//     if (targetField.value.length === 0) {
//         alert("Please enter your last name");
//         targetField.focus(); // Places cursor in the field
//         return false;
//     }
// } 

// ADDING VISUAL FEEDBACK

// function checkForLastName() {
//     var targetField = document.getElementById("lastNameField");
//     if (targetField.value.length === 0) {
//         alert("Please enter your last name");
//         targetField.style.background = "yellow"; // Highlights empty field
//         targetField.focus();
//         return false;
//     }
//     targetField.style.background = "white"; // Restores background after valid input
// }

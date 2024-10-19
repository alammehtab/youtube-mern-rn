// Chapter - 85: Form validation: ZIP codes

// VALIDATION FUNCTION

// function validateZIP() {
//     var valueEntered = document.getElementById("zip").value;
//     var numChars = valueEntered.length;

//     // Check if ZIP code has fewer than 5 digits
//     if (numChars < 5) {
//         alert("Please enter a 5-digit code.");
//         return false; // ta k form submit na ho
//     }

//     // Loop through each character to ensure it is a number
//     for (var i = 0; i < 5; i++) {
//         var thisChar = parseInt(valueEntered[i]);
//         if (isNaN(thisChar)) {
//             alert("Please enter only numbers.");
//             return false; // Cancel form submission if a non-numeric character is found
//         }
//     }
//     return true; // ZIP code is valid, allow form submission
// }



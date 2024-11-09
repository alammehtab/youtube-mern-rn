// Chapter - 85: Form validation: ZIP codes

// VALIDATION FUNCTION FOR ZIP CODE
function validateZIP() {
    // get zip code value, user ne jo zipcode value enter ki h
    var zipcode = document.getElementById("zip").value

    // Check if ZIP code has fewer than 5 digits
    if (zipcode.length < 5) {
        alert("Please enter a 5-digit code.")
        return false // form submit hone se rokdo
    }

    // Loop through each character to ensure it is a number
    for (var i = 0; i < 5; i++) {
        var currentCharacter = parseInt(zipcode[i])

        // agr ye character number na ho
        if (isNaN(currentCharacter)) {
            alert("Please enter only numbers.");
            return false;
        }
    }

    return true
}
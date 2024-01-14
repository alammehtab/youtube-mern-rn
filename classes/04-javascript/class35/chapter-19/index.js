// CHAPTER-19: for loops:Flags, Booleans, array length, and loopus interruptus

// flags:

// booleans

// array length

// loopus interruptus

// implementation
const cleanestCities = ["Peshawar", "Islamabad", "Karachi", "Lahore", "Multan"];
const cityToCheck = prompt("Please enter your city name: ");

// flag
let cityMili = false;

for (let cityIndex = 0; cityIndex < cleanestCities.length; cityIndex++) {
  if (cityToCheck === cleanestCities[cityIndex]) {
    cityMili = true;
    // alert("It's one of the cleanest cities");
    // loopus intrrupt
    break;
  }
  // console.log({ cityIndex });
}

// using the flag
// if (cityMili === false) {
//   alert("It's not on the list");
// } else {
//   alert("It's one of the cleanest cities");
// }

if (cityMili) {
  alert("It's one of the cleanest cities");
} else {
  alert("It's not on the list");
}

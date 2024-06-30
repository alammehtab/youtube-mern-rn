// CHAPTER-19: for loops:Flags, Booleans, array length, and loopus interruptus

// flag:
// Flag variable is used as a signal in programming to var the program know that a
// certain condition has met. It usually acts as a boolean variable indicating a condition
// to be either true or false

// booleans
// data type, 0s and 1s

// array length
// number of elements in an array

// loopus interruptus
// to break a loop before it's compvarion, meeting a condition

// implementation
var cleanestCities = ["Peshawar", "Islamabad", "Karachi", "Lahore", "Multan"];
var cityToCheck = prompt("Please enter your city name: ");

// flag
var cityMili = false;

for (var cityIndex = 0; cityIndex < cleanestCities.length; cityIndex++) {
  if (cityToCheck === cleanestCities[cityIndex]) {
    cityMili = true;
    // loopus intrruptus
    break;
    // alert("han g city mil gai");
  }
  // else {
  //   alert("city nahi mili");
  // }
  // alert(cityIndex);
}

if (cityMili) {
  alert("It's one of the cleanest cities");
} else {
  alert("It's not on the list");
}

// using the flag (ye sb karne ki zaroorat nahi)
// if (cityMili === true) {
//   alert("It's one of the cleanest cities");
// } else {
//   alert("It's not on the list");
// }

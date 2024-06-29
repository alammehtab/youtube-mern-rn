// CHAPTER-18 FOR LOOPS

// verification of cleanest city without using loops
// const cleanestCities = ["Peshawar", "Islamabad", "Karachi", "Lahore", "Multan"];
// const cityToCheck = prompt("Please enter your city name: ");

// if (cityToCheck === cleanestCities[0]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[1]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[2]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[3]) {
//   alert("It's one of the cleanest cities");
// } else if (cityToCheck === cleanestCities[4]) {
//   alert("It's one of the cleanest cities");
// } else {
//   alert("It's not on the list");
// }

// for loop syntax
// for (expression 1; expression 2; expression 3) {
//  code block to be executed
// }

// Expression 1,
// 1. declare and variable and assign it a value
// 2. it is executed (one time) before the execution of the code block.

// Expression 2
// 1. we check the condition
// 2. defines the condition for executing the code block.

// Expression 3
// 1. increment/ decrement
// 2. it is executed (every time) after the code block has been executed except the first time.

// understanding for loop with a very simple example
// print numbers 1 to 10
// for (var number = 1; number <= 10; number++) {
//   console.log(number);
// }

// verification of cleanest city using loops
// const cleanestCities = ["Peshawar", "Islamabad", "Karachi", "Lahore", "Multan"];
// const cityToCheck = prompt("Please enter your city name: ");

// for (var cityIndex = 0; cityIndex < cleanestCities.length; cityIndex++) {
//   if (cityToCheck === cleanestCities[cityIndex]) {
//     alert("It's one of the cleanest cities");
//   }
// }

// totalIterations: 6 (0,1,2,3,4,5)
// cityToCheck  = "Karachi"

// iteration0:
// cityIndex: 0
// cityIndex < cleanestCities.length -> 0 < 5 (true)
// cityToCheck === cleanestCities[cityIndex]-> "Karachi" === cleanestCities[0] -> "Karachi" === "Peshawar" -> FALSE

// iteration1:
// cityIndex: 1
// cityIndex < cleanestCities.length -> 1 < 5 (true)
// cityToCheck === cleanestCities[cityIndex]-> "Karachi" === cleanestCities[1] -> "Karachi" === "Islamabad" -> FALSE

// iteration2:
// cityIndex: 2
// cityIndex < cleanestCities.length -> 2 < 5 (true)
// cityToCheck === cleanestCities[cityIndex]-> "Karachi" === cleanestCities[2] -> "Karachi" === "Karachi" -> TRUE

// iteration3:
// cityIndex: 3
// cityIndex < cleanestCities.length -> 3 < 5 (true)
// cityToCheck === cleanestCities[cityIndex]-> "Karachi" === cleanestCities[3] -> "Karachi" === "Lahore" -> FALSE

// iteration4:
// cityIndex: 4
// cityIndex < cleanestCities.length -> 4 < 5 (true)
// cityToCheck === cleanestCities[cityIndex]-> "Karachi" === cleanestCities[4] -> "Karachi" === "Multan" -> FALSE

// iteration5:
// cityIndex: 5
// cityIndex < cleanestCities.length -> 5 < 5 (false)
// loop will be terminated because the condition is false

// CHAPTER-22: Strings:Measuring length and extracting parts

// FINDING LENGTH OF STRING
// console.log("first".length);
// var channelName = "cs with alam";
// var channelNameLength = channelName.length;
// console.log(channelNameLength);

// EXTRACT PART OF A STRING
// array recap
// var numbers = [1, 2, 3, 4, 5];
// var arrayPart = numbers.slice(0, 2);
// console.log(arrayPart);

// slice with strings
var language = "JavaScript";

// using another variable
// var sliced = language.slice(1, 3);
// console.log(sliced);

// not using another variable
// console.log(language.slice(0, 4));
// console.log(language.slice(1, 5))

// USER INPUT CITY NAME, FIRST LETTER CAPITAL

// var city = prompt("Please enter your city name");
// var firstLetter = city[0];
// var firstLetter = city.slice(0, 1);
// var capitalFirstLetter = firstLetter.toUpperCase();
// var remainingLetters = city.slice(1);
console.table([firstLetter, capitalFirstLetter, remainingLetters])
// var finalResult = capitalFirstLetter + remainingLetters;
// console.log(finalResult);

// MONTH NAME ABBREVIATION IF LENGTH > 3
// understanding the problem
// January -> Jan
// May -> May

// var monthName = prompt("Please enter a month name");

// if (monthName.length > 3) {
//     var firstThreeCharacters = monthName.slice(0, 3);
//     var firstCharacter = firstThreeCharacters.slice(0, 1).toUpperCase();
//     var remainingCharacters = firstThreeCharacters.slice(1);
//     var finalResult = firstCharacter + remainingCharacters;
//     console.log(finalResult);
// } else {
//     var firstCharacter = monthName.slice(0, 1).toUpperCase();
//     var remainingCharacters = monthName.slice(1);
//     var finalResult = firstCharacter + remainingCharacters;
//     console.log(finalResult);
// }
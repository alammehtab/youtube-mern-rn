// CHAPTER-22: Strings:Measuring length and extracting parts

// FINDING LENGTH OF STRING
// const channelName = "cs with alam";
// const channelNameLength = channelName.length;
// console.log(channelNameLength);
// console.log("first".length);

// EXTRACT PART OF A STRING
// array recap
// const numbers = [1, 2, 3, 4, 5];
// const arrayPart = numbers.slice(0, 2);
// console.log(arrayPart);

// slice with strings
// let language = "JavaScript";

// using another variable
// const sliced = language.slice(1, 3);
// console.log(sliced);

// not using another variable
// language = language.slice(1, 5);
// console.log(language);
// console.log(language.slice(0, 4));

// USER INPUT CITY NAME, FIRST LETTER CAPITAL

// const city = prompt("Please enter your city name");
// const firstLetter = city[0];
// const firstLetter = city.slice(0, 1);
// const capitalFirstLetter = firstLetter.toUpperCase();
// const remainingLetters = city.slice(1);
// console.log(firstLetter);
// console.log(remainingLetters);
// const finalResult = capitalFirstLetter + remainingLetters;
// console.log(finalResult);

// MONTH NAME ABBREVIATION IF LENGTH > 3
// understanding the problem
// January -> Jan
// May -> May

const monthName = prompt("Please enter a month name");

if (monthName.length > 3) {
  const shortForm = monthName.slice(0, 3);
  const firstLetter = shortForm.slice(0, 1).toUpperCase();
  const remainingLetters = shortForm.slice(1);
  const finalResult = firstLetter + remainingLetters;
  console.log(finalResult);
} else {
  const firstLetter = monthName.slice(0, 1).toUpperCase();
  const remainingLetters = monthName.slice(1);
  const finalResult = firstLetter + remainingLetters;
  console.log(finalResult);
}

// CHAPTER-4 VARIABLE NAMES LEGAL AND ILLEGAL

// A variable name can't contain any spaces.
// For example, my name, full name
// const my name = 'mehtab'//illegal
// const myName = "mehtab";
// const myFirstName = 'mehtab';

// A variable name can contain only letters, numbers, dollar signs, and underscores.
// For example, myName, myName1, my1Name, student10Name, my$name, my_name
// const myName ="mehtab"
// const myName1 = 'mehtab'
// const my1Name = 'Mehtab';
// const $myName = 'Mehtab'
// const my$name = 'mehtab'
// const  my_name = 'Mehtab';
// const _name = 'mehtab'
// const my_first_name = "Mehtab";

// Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
// For example, userAlert and myVar are legal.
// const function //// it's illegal
// const myFunction = "my function"; ////legal
// console.log(myFunction);
// const const = 'my const' ////illegal

// Capital letters are fine, but be careful. Variable names are case sensitive.
// For example, A bike is not a Bike 🚲.
// const bike = "super bike";
// console.log(bike); //// output: super bike
// console.log(Bike); ////error: Bike not defined
// const bIKE = "another bike";
// console.log(bike); //// output: super bike
// console.log(bIKE); //// output: another bike

// I teach the camelCase 🐪 naming convention. Why "camelCase"? Because there is a hump or
// two (or three) in the middle if the name is formed by more than one word. A camelCase
// name begins in lower case. If there's more than one word in the name, each subsequent
// word gets an initial cap, creating a hump.
// For example, name, firstName, myFirstName

// const name = "mehtab";
// const firstName = "mehtab";
// const myFirstName = "Mehtab";

// snack case
const name = "mehtab";
const first_name = "mehtab";
const my_first_name = "Mehtab";

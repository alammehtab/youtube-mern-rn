// CHAPTER-4 VARIABLE NAMES LEGAL AND ILLEGAL

// A VARIABLE NAME CAN'T CONTAIN ANY SPACES.
// For example, my name, full name
// var my name = 'mehtab'//illegal
// var myName = "mehtab";
// var myFirstName = 'mehtab';

// A VARIABLE NAME CAN CONTAIN ONLY LETTERS, NUMBERS, DOLLAR SIGNS, AND UNDERSCORES.
// For example, myName, myName1, my1Name, student10Name, my$name, my_name
// var myName ="mehtab"
// var myName1 = 'mehtab'
// var my1Name = 'Mehtab';
// var $myName = 'Mehtab'
// var my$name = 'mehtab'
// var  my_name = 'Mehtab';
// var _name = 'mehtab'
// var my_first_name = "Mehtab";

// THOUGH A VARIABLE NAME CAN'T BE ANY OF JAVASCRIPT'S KEYWORDS, IT CAN CONTAIN KEYWORDS.
// For example, userAlert and myVar are legal.
// var function //// it's illegal
// var myFunction = "my function"; ////legal
// console.log(myFunction);
// var var = 'my var' ////illegal

// CAPITAL LETTERS ARE FINE, BUT BE CAREFUL. VARIABLE NAMES ARE CASE SENSITIVE.
// For example, A bike is not a Bike 🚲.
// var bike = "super bike";
// console.log(bike); //// output: super bike
// console.log(Bike); ////error: Bike not defined
// var bIKE = "another bike";
// console.log(bike); //// output: super bike
// console.log(bIKE); //// output: another bike

// I TEACH THE CAMELCASE 🐪 NAMING CONVENTION.WHY CAMELCASE ? BECAUSE THERE IS A HUMP OR TWO(OR THREE) IN THE MIDDLE IF THE NAME IS FORMED BY MORE THAN ONE WORD.A CAMELCASE NAME BEGINS IN LOWER CASE.IF THERE'S MORE THAN ONE WORD IN THE NAME, EACH SUBSEQUENT WORD GETS AN INITIAL CAP, CREATING A HUMP.
// For example, name, firstName, myFirstName

// var name = "mehtab";
// var firstName = "mehtab";
// var myFirstName = "Mehtab";

// snack case
// var name = "mehtab";
// var first_name = "mehtab";
// var my_first_name = "Mehtab";

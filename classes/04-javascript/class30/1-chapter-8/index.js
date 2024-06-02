// CHAPTER-8 CONCATENATING STRINGS (combining strings)

// IN CHAPTER 1 YOU LEARNED TO DISPLAY A MESSAGE IN AN ALERT, CODING IT THIS WAY.
// alert("Thanks for your input!");

// OR YOU COULD CODE IT THIS WAY.
// const message = "Thanks for your input!";
// alert(message);

// PERSONALIZED MESSAGES
// const userName = "Ali";
// alert("Thanks, " + userName + "!");

// NOTE THAT THE FIRST STRING INCLUDES A SPACE IN ABOVE ALERT.

// another example of concatenation
// const firstName = "Muhammad";
// const lastName = "Ali";
// const fullName = firstName + " " + lastName;
// alert(fullName);

// You can concatenate any combination of strings and variables, or all strings or all variables.
// For example,
// const message = "Thanks, ";
// const userName = "Ali";
// const punctuation = "!";
// alert(message + userName + punctuation);

// Here it is, with three strings
// alert("Thanks, " + "Ali" + "!");

// YOU CAN ASSIGN A CONCATENATION TO A VARIABLE.
// const message = "Thanks, ";
// const userName = "Ali";
// const punctuation = "!";
// const customMess = message + userName + punctuation;
// alert(customMess);

// IF YOU PUT NUMBERS IN QUOTES, JAVASCRIPT CONCATENATES THEM AS STRINGS RATHER THAN ADDING THEM.
// This code...
// alert("2" + "2");
// alert(2 + "2");
// alert(2 + "j");

// IF YOU MIX STRINGS AND NUMBERS JAVASCRIPT AUTOMATICALLY CONVERTS THE NUMBERS TO STRINGS, AND DISPLAYS THE MESSAGE '2 PLUS 2 EQUALS 22'.
// alert("2 plus 2 equals " + 2 + 2);
// alert(2 + 2 + " is 2 plus 2");

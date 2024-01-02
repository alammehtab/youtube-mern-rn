// CHAPTER-8 CONCATENATING STRINGS (combining strings)

// In Chapter 1 you learned to display a message in an alert, coding it this way.
// alert("Thanks for your input!");

// Or you could code it this way.
// const message = "Thanks for your input!";
// alert(message);

// Personalized message
// const userName = "Ali";
// alert("Thanks, " + userName + "!");

// Note that the first string includes a space in above alert.

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

// You can assign a concatenation to a variable.
// const message = "Thanks, ";
// const userName = "Ali";
// const punctuation = "!";
// const customMess = message + userName + punctuation;
// alert(customMess);

// If you put numbers in quotes, JavaScript concatenates them as strings rather than adding them.
// This code...
// alert("2" + "2");
// alert(2 + "2");
// alert(2 + "j");

// If you mix strings and numbers JavaScript automatically converts the numbers to strings,
// and displays the message "2 plus 2 equals 22".
// alert("2 plus 2 equals " + 2 + 2);
// alert(2 + 2 + " is 2 plus 2");

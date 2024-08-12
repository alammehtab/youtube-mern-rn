// Chapter-35: Functions

// WHAT IS A FUNCTION?
// A function is a block of JavaScript that robotically does the same thing again and again,whenever you invoke/call its name.

// SOME OF THE FUNCTIONS/METHODS WE'VE USED SO FAR
// alert, push, pop, slice, splice, indexOf, lastIndexOf, toString, parseInt, parseFloat etc

// BUIL-IT VS USER-DEFINED FUNCTIONS
// now we'll be creating our own function for our needs

// CREATE OUR OWN FUNCTION
// functionKeyword functionName(){
// whatever this function does, goes here
// }

// function declaration/statement
// function sayHello() {
//   alert("Hello");
// }

// function call
// sayHello();

// WHY FUNCTIONS?
// It saves you repetitive coding and makes your code easier to understand.

// EXAMPLE SCENARIO
// On your website, suppose there are several pages where you want to display an alert that tells the user the current time in this format hh:mm.

// demonstrate the above scenario using js modules
// use export and import to share the code
// make sure you set a new prop "type" with the value "module" on scripts in html file

// function tellTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   alert("time: " + theHr + ":" + theMin);
// }
// tellTime();

// export { tellTime }
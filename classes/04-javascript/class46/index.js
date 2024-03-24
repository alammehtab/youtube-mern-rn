// Chapter-35: Functions

// WHAT IS A FUNCTION?
// A function is a block of JavaScript that robotically does the same thing again and again,
// whenever you invoke its name.

// WHY FUNCTIONS?
// It saves you repetitive coding and makes your code easier to understand.

// EXAMPLE SCENARIO
// On your website, suppose there are several pages where you want to display an alert that
// tells the user the current time.

// without creating a function
// const now = new Date();
// const theHr = now.getHours();
// const theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);

// using function
// function tellTime() {
//   const now = new Date();
//   const theHr = now.getHours();
//   const theMin = now.getMinutes();
//   alert("time: " + theHr + ":" + theMin);
// }
// tellTime();
// tellTime();
// tellTime();
// tellTime();

// CREATE OUR OWN FUNCTION

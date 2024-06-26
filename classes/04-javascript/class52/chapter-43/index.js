// Chapter-43: Placing Scripts

// WHERE TO PLACE/WRITE JAVASCRIPT CODE?

// the < script > tag
// In HTML, JavaScript code is inserted between < script > and </script > tags.

// JavaScript in <head> or <body>?
// You can place any number of scripts in an HTML document.
// Scripts can be placed in the < body >, or in the < head > section of an HTML page, or in both.

// JavaScript in <head> (demonstrate in html file)
// In this example, a JavaScript function is placed in the <head> section of an HTML page.
// The function is invoked(called) when a button is clicked.

// JavaScript in <body> (demonstrate in html file)
// In this example, a JavaScript function is placed in the <body> section of an HTML page.
// The function is invoked(called) when a button is clicked.

// NOTE:
// Placing scripts at the bottom of the < body > element improves the display speed, because script interpretation slows down the display.

// External JavaScript (demonstrate in this file)
// Scripts can also be placed in external files.
// function helloFromExternalFile() {
//     alert("Helllo from external script file!")
// }

// External scripts are practical when the same code is used in many different web pages.
// To use an external script, put the name of the script file in the src(source) attribute of a < script > tag.

// You can place an external script reference in <head> or <body> as you like.
// The script will behave as if it was located exactly where the <script> tag is located.

// NOTE:
// External scripts cannot contain < script > tags.

// External JavaScript Advantages
// It separates HTML and JavaScript
// It makes HTML and JavaScript easier to read and maintain
// Cached JavaScript files can speed up page loads
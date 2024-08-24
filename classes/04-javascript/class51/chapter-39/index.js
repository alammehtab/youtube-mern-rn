// Chapter-39: switch statements: How to start them

// USE OF SWITCH STATEMENT
// In JavaScript, if/else statements and switch statements are used to control the flow of a program based on a specific condition.

// IF/ELSE VS SWITCH
// The main difference between the two is that an if/else statement evaluates a CONDITION and executes a block of code if the condition is true, while a switch statement evaluates an EXPRESSION and executes the code associated with the matching case statement.

// EXAMPLE PROGRAM WITH IF/ELSE
// var x = 5;
// if (x > 10) {
//     console.log("x is greater than 10");
// } else {
//     console.log("x is less than or equal to 10");
// }

// EXAMPLE PROGRAM WITH SWITCH
// var day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     default:
//         console.log("Today is neither Monday nor Tuesday");
// }


// SAME PROGRAM WITH IF-ELSE
// if (day === "Monday") {
//     console.log("Today is Monday")
// } else if (day === "Tuesday") {
//     console.log("Today is Tuesday")
// } else {
//     console.log("Today is neither Monday nor Tuesday")
// }

// ADVANTAGES OF SWITCH
// 1. One advantage of using a switch statement is that it can be more efficient than multiple if/else statements when testing a single expression against multiple possible values.
// 2. Additionally, a switch statement can make the code more readable and easier to follow, especially when there are many possible conditions to check.

// However, if/else statements offer more flexibility than switch statements, as they can evaluate complex expressions and conditions that cannot be easily represented in a switch statement. if/else statements also allow for more fine - grained control over the flow of the program, as multiple conditions can be checked in a specific order.

// WHEN TO USE WHICH
// Overall, the choice between using an if/else statement and a switch statement depends on the specific needs of the program and the complexity of the conditions being evaluated.

// var day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     default:
//         console.log("Today is neither Monday nor Tuesday");
// }

// JUST FOCUS ON FIRST 3 LINES
// 1. Begins with the keyword switch. Bumping up against it is the variable that's being tested, inside parentheses. Then there's an opening curly bracket.
// 2. The first possibility, that the variable day has the value "Monday". Begins with the
// keyword case. Then the value that is being tried, "Monday". Then a space and a colon.
// 3. The statement that executes if the test passes—if day does, in fact, have the value
// "Monday". This statement is indented. Any number of statements can execute if the test passes.
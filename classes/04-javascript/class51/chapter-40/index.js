// Chapter-40: switch statements: How to complete them

// RECAP OF THE LAST VIDEO
// use of switch
// switch vs if-else
// example program
// syntax- first 3 lines

// UNDERSTANDING THE WHOLE PROGRAM
// var day = "Sunday"

// switch (day) {
//     case "Sunday":
//         console.log("Today is Sunday")
//         break
//     case "Monday":
//         console.log("Today is Monday")
//         break
//     case "Tuesday":
//         console.log("Today is Tuesday")
//         break
//     case "Wednesday":
//         console.log("Today is Wednesday")
//         break
//     case "Thurday":
//         console.log("Today is Thurday")
//         break
//     case "Friday":
//         console.log("Today is Friday")
//         console.log("BLESSED FRIDAY")
//         break
//     case "Saturday":
//         console.log("Today is Saturday")
//         break
//     default:
//         console.log("Invalid day")
// }

// EXAMPLE/PRACTICE PROGRAMS (SWITCH STATEMENT):
// function calculate(operation, num1, num2) {
//     switch (operation) {
//         case 'add':
//             return num1 + num2;
//         case 'subtract':
//             return num1 - num2;
//         case 'multiply':
//             return num1 * num2;
//         case 'divide':
//         // return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
//         if (num2 !== 0) {
//             return num1 / num2
//         } else {
//             return 'Cannot divide by zero'
//         }
//         default:
//             return 'Invalid operation';
//     }
// }

// console.log(calculate('add', 5, 3));
// console.log(calculate('divide', 10, 0));

// UNDERSTANDING RETURN STATEMENT
// function understandReturn() {
//     console.log("hellooooo world")
//     return
//     console.log("buy world")
// }

// understandReturn()
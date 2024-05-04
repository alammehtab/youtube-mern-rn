// Chapter-40: switch statements: How to complete them

// RECAP OF THE LAST VIDEO
// use of switch
// switch vs if-else
// example program
// syntax- first 3 lines

// UNDERSTANDING THE WHOLE PROGRAM
const day = "Friday"

switch (day) {
    case "Monday":
        console.log("Today is Monday")
        break
    case "Tuesday":
        console.log("Today is Tuesday")
        break
    case "Wednesday":
        console.log("Today is Wednesday")
        break
    case "Thurday":
        console.log("Today is Thurday")
        break
    case "Friday":
        console.log("Today is Friday")
        console.log("BLESSED FRIDAY")
        break
    case "Saturday":
        console.log("Today is Saturday")
        break
    case "Sunday":
        console.log("Today is Sunday")
        break
    default:
        console.log("Invalid day")
}
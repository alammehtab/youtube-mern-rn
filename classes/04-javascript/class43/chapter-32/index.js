// Chapter-32: EXTRACTING PARTS OF THE DATE AND TIME

// LAST CLASS
// var now = new Date();
// console.log(now);

// get day
// console.log(now.getDay());

// day name
// var daysNames = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
// ];
// console.log(daysNames[now.getDay()]);

// getFullYear
// console.log(now.getFullYear());

// getHour
// console.log(now.getHours());

// getMinutes
// console.log(now.getMinutes());

// getDate
// var aajKiTareekh = now.getDate();
// console.log({ aajKiTareekh });

// NEW STUFF

// GETTING MONTH NAME
// var now = new Date();

// var monthsNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
// ];

// getting current month number
// var currentMonthNumber = now.getMonth();
// console.log(currentMonthNumber);

// printing month name
// console.log(monthsNames[currentMonthNumber]);

// PRINTING HOURS AND MINUTES IN FORMATTED STRING

// using variables
// var now = new Date()
// var hours = now.getHours();
// var minutes = now.getMinutes();
// console.log({ hours, minutes });
// console.log(`${hours}:${minutes}`);

// without using variables
// console.log(`${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()}`);

// DECIDING AM AND PM, HOURS > 11 PM ELSE AM
// var now = new Date()
// var hours = now.getHours();

// if (hours === 12) { // noon: mtlb din 12 bje
//     console.log(`${hours} PM`);
// } else if (hours === 0) { //mid-night: mtlb raat 12 bje
//     console.log(`${hours + 12} AM`)
// } else if (hours > 11) {
//     console.log(`${hours - 12} PM`);
// } else {
//     console.log(`${hours} AM`);
// }
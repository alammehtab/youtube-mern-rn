// Chapter-32: EXTRACTING PARTS OF THE DATE AND TIME

// LAST CLASS
const now = new Date();
// console.log(now);

// get day
// console.log(now.getDay());

// day name
// const daysNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(daysNames[now.getDay()]);

// getFullYear
// console.log(now.getFullYear());

// getHour
// console.log(now.getHours());

// getMinutes
// console.log(now.getMinutes());

// getDate
// const aajKiTareekh = now.getDate();
// console.log({ aajKiTareekh });

// NEW STUFF

// GETTING MONTH NAME
// const monthsNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// getting current month number
// const currentMonthNumber = now.getMonth();
// console.log(currentMonthNumber);

// printing month name
// console.log(monthsNames[currentMonthNumber]);

// PRINTING HOURS AND MINUTES IN FORMATTED STRING

// using variables
// const hours = now.getHours();
// const minutes = now.getMinutes();
// console.log({ hours, minutes });
// console.log(`${hours}:${minutes}`);

// without using variables
// console.log(`${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()}`);

// DECIDING AM AND PM, HOURS > 11 PM ELSE AM
const hours = now.getHours();

if (hours > 11) {
  console.log(`${hours} PM`);
} else {
  console.log(`${hours} AM`);
}

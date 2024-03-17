// CHAPTE-31: GETTING THE CURRENT DATE AND TIME

// GETTING CURRENT DATE AND TIME, DATE OBJECT
const rightNow = new Date();

// EXPLAIN THE DATE OBJECT
// console.log(rightNow);

// GET DIFFERENT CHUNKS FROM DATE OBJECT

// getting current time in milliseconds
// const currentTime = rightNow.getTime();
// console.log(currentTime);

// getting current full year
// const currentYear = rightNow.getFullYear();
// console.log(currentYear);

// getting current date
// const currentDate = rightNow.getDate();
// console.log(currentDate);

// getting current month
// const currentMonth = rightNow.getMonth();
// console.log(currentMonth);

// getting current day
// const currentDay = rightNow.getDay();
// console.log(currentDay);

// CONVERT DATE OBJECT TO STRING USING TOSTRING
// console.log(typeof rightNow);
// const dateString = rightNow.toString();
// console.log(typeof dateString);

// GET CURRENT DAY NUMBER
// const currentDay = rightNow.getDay();
// console.log(rightNow);
// console.log(currentDay);

// GET TODAY NAME
const daysNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayNumber = rightNow.getDay();
const currentDayName = daysNames[currentDayNumber];
console.log(currentDayName);

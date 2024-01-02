// CHAPTER-9 PROMPTS
// used to take user input
// const userAge = prompt("Please enter your age!");
// console.log("You are " + userAge + " years old.");
// alert("You are " + userAge + " years old.");

// const userName = prompt("Please enter your name");
// alert("Helllooooo " + userName);
// console.log("helllooo " + userName);

// const firstName = prompt("Please enter your first name ");
// const lastName = prompt("Please enter your last name ");
// const fullName = firstName + " " + lastName;

// alert("Helloooo " + fullName);

// STATIONARY SHOP BILLING SYSTEM
// const pencil = prompt("Price for pencil");
// const notebook = prompt("price for notebook");
// const totalBill = pencil + notebook;

// alert("your total bill is " + totalBill);

// prompts always return string values
const pencil = +prompt("Price for pencil");
const notebook = +prompt("price for notebook");
const totalBill = pencil + notebook;

alert("your total bill is " + totalBill);

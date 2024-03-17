// Chapter-28: Converting strings to integers and decimals

// type coercion
// automatic conversion of values from one data type to another, typically
// performed during operations or comparisons involving different data types

// we've already seen
// const age = prompt("Enter your age ");
// console.log(typeof age);
// const yearsEligibleToVote = age - 18;

// console.log(yearsEligibleToVote);

// const result = "200" + 150;
// console.log(result);

// imtihan
// console.log("a" - 10);

// problem, int
// const currentAge = prompt("Enter your age");
// const ageAfterAYear = currentAge + 1;
// console.log(ageAfterAYear);

// NUMBER
// int: without decimal point
// float: with or without decimal point

// solution, int
// const currentAge = prompt("Enter your age");
// const incrementedAge = parseInt(currentAge) + 1;
// console.log(incrementedAge);

// problem, float
// const itemPrice = prompt("Enter price of the item in $");
// const priceAfterAddingTax = itemPrice + 1;
// console.log(priceAfterAddingTax);

// solution, float
// const itemPrice = prompt("Enter price of the item in $");
// const priceAfterAddingTax = parseFloat(itemPrice) + 1;
// console.log(priceAfterAddingTax);

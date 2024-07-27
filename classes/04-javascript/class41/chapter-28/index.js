// Chapter-28: Converting strings to integers and decimals

// type coercion
// automatic conversion of values from one data type to another, typically
// performed during operations or comparisons involving different data types

// TYPE COERSION VS TYPE CASTING
// COERSION:
// implicit (automatic) type conversion
// jo js khud type conversion karti h usko kehte hn coersion
// CASTING:
// explicit type conversion
// jo ap khud krte ho

// we've already seen
// var age = prompt("Enter your age ");
// console.log(typeof age);
// var yearsEligibleToVote = age - 18;
// console.log(yearsEligibleToVote);

// var result = "200" + 150;
// console.log(result);

// imtihan
// console.log("a" - 10);

// problem, int
// var currentAge = prompt("Enter your age");
// var ageAfterAYear = currentAge + 1;
// console.log(ageAfterAYear);

// NUMBER
// int: without decimal point
// float: with or without decimal point

// solution, int
// var currentAge = prompt("Enter your age");
// var incrementedAge = parseInt(currentAge) + 1;
// console.log(incrementedAge);

// problem, float
// var itemPrice = prompt("Enter price of the item in $");
// var priceAfterAddingTax = itemPrice + 1;
// console.log(priceAfterAddingTax);

// solution, float
// var itemPrice = prompt("Enter price of the item in $");
// var priceAfterAddingTax = parseFloat(itemPrice) + 1;
// console.log(priceAfterAddingTax);